<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow CORS and JSON POST
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

// PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // SMTP Settings for Gmail
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'inquiryservicefirstau@gmail.com';
    $mail->Password   = 'ualrphismhfjdcam';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('inquiryservicefirstau@gmail.com', 'Service First Website');
    $mail->addAddress('codexbd@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'New Appointment Request';
    $mail->Body    = "
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> {$data['name']}</p>
        <p><strong>Email:</strong> {$data['email']}</p>
        <p><strong>Phone:</strong> {$data['phone']}</p>
        <p><strong>Address:</strong> {$data['address']}</p>
        <p><strong>Postcode:</strong> {$data['postcode']}</p>
        <p><strong>Services:</strong> " . implode(", ", $data['services']) . "</p>
        <p><strong>Service Type:</strong> {$data['serviceType']}</p>
        <p><strong>Date:</strong> {$data['date']}</p>
        <p><strong>Time:</strong> {$data['time']}</p>
        <p><strong>Additional Info:</strong> {$data['additionalInfo']}</p>
    ";

    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
