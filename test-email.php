<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Simple diagnostic script for debugging
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With, Authorization, Origin');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

$response = [
    'status' => 'OK',
    'method' => $_SERVER['REQUEST_METHOD'],
    'timestamp' => date('Y-m-d H:i:s'),
    'php_version' => phpversion(),
    'server_info' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown',
    'origin' => $_SERVER['HTTP_ORIGIN'] ?? 'No Origin',
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'No User Agent',
];

// Check if this is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    
    $response['received_data'] = $data ? 'Valid JSON received' : 'Invalid or no JSON';
    $response['raw_input_length'] = strlen($raw);
    
    // Check PHPMailer
    $response['phpmailer_exists'] = file_exists(__DIR__ . '/vendor/autoload.php');
    
    if ($response['phpmailer_exists']) {
        try {
            require_once __DIR__ . '/vendor/autoload.php';
            $response['phpmailer_loaded'] = 'Successfully loaded';
        } catch (Exception $e) {
            $response['phpmailer_loaded'] = 'Error: ' . $e->getMessage();
        }
    }
    
    // Test basic email functionality
    if (function_exists('mail')) {
        $response['php_mail_function'] = 'Available';
    } else {
        $response['php_mail_function'] = 'Not available';
    }
    
    // Check write permissions
    $response['directory_writable'] = is_writable(__DIR__);
    
    http_response_code(200);
} else {
    $response['message'] = 'Send a POST request to test email functionality';
    http_response_code(200);
}

echo json_encode($response, JSON_PRETTY_PRINT);
exit;
