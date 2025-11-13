<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

$config = require __DIR__ . '/config.php';
$smtpPassword = $config['7M]qwT+QpI'];

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "error"; exit;
}

// 1. HONEYPOT (anti-spam)
if (!empty($_POST['honeypot'])) {
    error_log("SPAM: Honeypot filled");
    echo "error"; exit;
}

// 2. INPUT
$senderName    = trim($_POST['name'] ?? '');
$senderEmail   = trim($_POST['email'] ?? '');
$senderSubject = trim($_POST['subject'] ?? '');
$senderMessage = trim($_POST['message'] ?? '');

// 3. CYRILLIC BLOCK (basic spam filter)
$fullText = $senderName . $senderEmail . $senderSubject . $senderMessage;
if (preg_match('/[а-яА-ЯёЁ]/u', $fullText)) {
    error_log("SPAM: Cyrillic detected");
    echo "error"; exit;
}

// 4. VALIDATION
if (!$senderName || !$senderEmail || !$senderSubject || !$senderMessage) {
    echo "error"; exit;
}
if (!filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
    echo "error"; exit;
}

// 5. SANITIZE
$senderName    = htmlspecialchars($senderName, ENT_QUOTES, 'UTF-8');
$senderEmail   = htmlspecialchars($senderEmail, ENT_QUOTES, 'UTF-8');
$senderSubject = htmlspecialchars($senderSubject, ENT_QUOTES, 'UTF-8');
$senderMessage = nl2br(htmlspecialchars($senderMessage, ENT_QUOTES, 'UTF-8'));

// 6. PREPARE MAIL CONTENTS
$receiverMail = "info@dennisulijn.com";

$subject = "Nieuw bericht via contactformulier: $senderSubject";

$body = "
<html>
<head><meta charset='UTF-8'></head>
<body>
    <p>Nieuw bericht ontvangen via <a href='https://www.dennisulijn.com'>dennisulijn.com</a>:</p>
    <p><b>Naam:</b> $senderName</p>
    <p><b>E-mailadres:</b> <a href='mailto:$senderEmail'>$senderEmail</a></p>
    <p><b>Onderwerp:</b> $senderSubject</p>
    <p><b>Bericht:</b><br>$senderMessage</p>
</body>
</html>
";

$confirmSubject = "Bevestiging: ik heb je bericht ontvangen";

$confirmBody = "
<html>
<head><meta charset='UTF-8'></head>
<body>
    <p>Beste $senderName,</p>
    <p>Bedankt voor je bericht! Ik kom er binnen een paar dagen bij je op terug.</p>
    <p>Met vriendelijke groet,<br>Dennis Ulijn</p>
</body>
</html>
";

// 7. SEND MAILS VIA PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@dennisulijn.com';
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Send to you
    $mail->setFrom('info@dennisulijn.com', 'Dennis Ulijn');
    $mail->addAddress($receiverMail);
    $mail->addReplyTo($senderEmail, $senderName);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();

    // Send confirmation to sender
    $mail->clearAllRecipients();
    $mail->addAddress($senderEmail);

    $mail->Subject = $confirmSubject;
    $mail->Body    = $confirmBody;
    $mail->AltBody = strip_tags($confirmBody);

    $mail->send();

} catch (Exception $e) {
    error_log("Mail sending failed: {$mail->ErrorInfo}");
    echo "error"; exit;
}

error_log("Mail successfully sent to $senderEmail");
echo "success";
