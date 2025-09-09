<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log all errors to help debug
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_errors.log');

// Set CORS headers immediately to avoid any conflicts
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With, Authorization, Origin');
header('Access-Control-Max-Age: 3600');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight immediately
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Preflight OK"]);
    exit(0);
}

// Log request details for debugging
error_log("=== EMAIL REQUEST START ===");
error_log("Method: " . $_SERVER['REQUEST_METHOD']);
error_log("Origin: " . ($_SERVER['HTTP_ORIGIN'] ?? 'No Origin'));
error_log("Content-Type: " . ($_SERVER['CONTENT_TYPE'] ?? 'No Content-Type'));

// Only allow POST for actual email sending
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Read and validate input
$raw = file_get_contents('php://input');
error_log("Raw input length: " . strlen($raw));

if (!$raw) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "No input received"]);
    exit;
}

$data = json_decode($raw, true);
if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON: " . json_last_error_msg()]);
    exit;
}

error_log("Decoded data: " . print_r($data, true));

// Check required fields
$required = ['name', 'email', 'phone'];
$missing = [];
foreach ($required as $field) {
    if (empty($data[$field])) {
        $missing[] = $field;
    }
}

if ($missing) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing required fields: " . implode(', ', $missing)]);
    exit;
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email address"]);
    exit;
}

// Check if PHPMailer is available
if (!file_exists(__DIR__ . '/vendor/autoload.php')) {
    error_log("PHPMailer not found at: " . __DIR__ . '/vendor/autoload.php');
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "PHPMailer not installed. Please run: composer require phpmailer/phpmailer"]);
    exit;
}

try {
    require __DIR__ . '/vendor/autoload.php';
    error_log("PHPMailer loaded successfully");
} catch (Exception $e) {
    error_log("PHPMailer load error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "PHPMailer load error: " . $e->getMessage()]);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    error_log("Creating PHPMailer instance");
    $mail = new PHPMailer(true);
    
    // Enable SMTP debugging (will go to error log)
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {
        error_log("PHPMailer Debug: " . $str);
    };

    // SMTP Settings for Gmail
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'inquiryservicefirstau@gmail.com';
    $mail->Password   = 'ualrphismhfjdcam';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    
    error_log("SMTP settings configured");

    // From and recipients
    $mail->setFrom('inquiryservicefirstau@gmail.com', 'Peak Season Heating and Cooling Website');
    
    // Reply-To uses visitor email if valid
    $visitorEmail = $data['email'];
    $visitorName = strip_tags($data['name']);
    $mail->addReplyTo($visitorEmail, $visitorName);
    
    // Primary recipient
    $mail->addAddress('codexbd@gmail.com');
    
    error_log("Email addresses configured");

    $mail->isHTML(true);
    $mail->Subject = 'New Appointment Request - Peak Season Heating and Cooling';

    // Safely handle services field
    $services = $data['services'] ?? [];
    if (is_array($services)) {
        $services_str = implode(", ", array_map('strip_tags', $services));
    } else {
        $services_str = strip_tags((string)$services);
    }

    // Prepare fields with safe output
    $fields = [
        'Name' => strip_tags($data['name']),
        'Email' => strip_tags($data['email']),
        'Phone' => strip_tags($data['phone']),
        'Address' => strip_tags($data['address'] ?? ''),
        'Postcode' => strip_tags($data['postcode'] ?? ''),
        'Services' => $services_str,
        'Service Type' => strip_tags($data['serviceType'] ?? ''),
        'Date' => strip_tags($data['date'] ?? ''),
        'Time' => strip_tags($data['time'] ?? ''),
        'Additional Info' => strip_tags($data['additionalInfo'] ?? ''),
    ];

    $body = "<h2>New Appointment Request</h2>";
    $body .= "<table cellspacing='0' cellpadding='5' border='1'>";
    foreach ($fields as $k => $v) {
        if ($v !== '') {
            $body .= "<tr><td style='font-weight:bold;'>" . htmlspecialchars($k) . ":</td><td>" . htmlspecialchars($v) . "</td></tr>";
        }
    }
    $body .= "</table>";

    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace(["<br>", "<br/>", "<br />"], "\n", $body));
    
    error_log("Email content prepared, attempting to send");

    $result = $mail->send();
    
    if ($result) {
        error_log("Email sent successfully");
        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } else {
        error_log("Email send failed: Unknown reason");
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Email send failed"]);
    }
    
} catch (Exception $e) {
    $error_msg = "Mailer Error: " . $e->getMessage();
    error_log($error_msg);
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $error_msg]);
}

error_log("=== EMAIL REQUEST END ===");
exit;
