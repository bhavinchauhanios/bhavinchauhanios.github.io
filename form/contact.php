<?php
ini_set('display_errors', '0');
error_reporting(E_ALL);
ob_start();

// Contact email destination
$sendTo = 'bhavinchauhan.tech@gmail.com';
$from = 'bhavinchauhan.tech@gmail.com';
$subject = 'New message from contact form';
$okMessage = 'Your message successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later.';

$responseArray = array('type' => 'danger', 'message' => $errorMessage);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $responseArray['message'] = 'Invalid request method.';
    ob_clean();
    header('Content-Type: application/json');
    echo json_encode($responseArray);
    exit;
}

$inputName = isset($_POST['InputName']) ? trim($_POST['InputName']) : '';
$inputEmail = isset($_POST['InputEmail']) ? trim($_POST['InputEmail']) : '';
$inputSubject = isset($_POST['InputSubject']) ? trim($_POST['InputSubject']) : '';
$inputMessage = isset($_POST['InputMessage']) ? trim($_POST['InputMessage']) : '';

if ($inputName === '' || $inputEmail === '' || $inputSubject === '' || $inputMessage === '') {
    $responseArray['message'] = 'All fields are required.';
    ob_clean();
    header('Content-Type: application/json');
    echo json_encode($responseArray);
    exit;
}

if (!filter_var($inputEmail, FILTER_VALIDATE_EMAIL)) {
    $responseArray['message'] = 'Please enter a valid email address.';
    ob_clean();
    header('Content-Type: application/json');
    echo json_encode($responseArray);
    exit;
}

$emailText = '<br><br>We have received the below enquiry from :'
    . '<br><br>Name: ' . htmlspecialchars($inputName, ENT_QUOTES, 'UTF-8')
    . '<br><br>E-mail: ' . htmlspecialchars($inputEmail, ENT_QUOTES, 'UTF-8')
    . '<br><br>Subject: ' . htmlspecialchars($inputSubject, ENT_QUOTES, 'UTF-8')
    . '<br><br>Message: ' . nl2br(htmlspecialchars($inputMessage, ENT_QUOTES, 'UTF-8'));

$headers = "MIME-Version: 1.0\r\n";
$headers .= "From: {$from}\r\n";
$headers .= "Reply-To: {$inputEmail}\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";

$sent = @mail($sendTo, $subject, $emailText, $headers, '-f ' . $from);

if ($sent) {
    $responseArray = array('type' => 'success', 'message' => $okMessage);
} else {
    $lastError = error_get_last();
    if (isset($lastError['message']) && $lastError['message'] !== '') {
        $responseArray['message'] = $errorMessage . ' Mailer error: ' . $lastError['message'];
    }
}

ob_clean();
header('Content-Type: application/json');
echo json_encode($responseArray);
?>
