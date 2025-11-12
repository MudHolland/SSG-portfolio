<?php
// === contact.php – 100% SPAM-PROOF MET RECAPTCHA v3 ===

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "error"; exit;
}

// 1. HONEYPOT
if (!empty($_POST['honeypot'])) {
    error_log("SPAM: Honeypot gevuld");
    echo "error"; exit;
}

// 2. RECAPTCHA v3 VALIDATIE (MOET EERST!)
if (empty($_POST['g-recaptcha-response'])) {
    echo "error"; exit;
}

$secret_key = '6LcCQwosAAAAAONn2L7v9dW0j8x9k8s7d6f5g4h3j';
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secret_key . "&response=" . $_POST['g-recaptcha-response']);
$result = json_decode($response);

if (!$result->success || $result->score < 0.5) {
    error_log("reCAPTCHA failed: score = " . ($result->score ?? 'null'));
    echo "error"; exit;
}

// 3. INPUT OPHALEN
$senderName    = trim($_POST['name'] ?? '');
$senderEmail   = trim($_POST['email'] ?? '');
$senderSubject = trim($_POST['subject'] ?? '');
$senderMessage = trim($_POST['message'] ?? '');

// 4. CYRILLISCH BLOKKEREN (Russisch, etc.)
$fullText = $senderName . $senderEmail . $senderSubject . $senderMessage;
if (preg_match('/[а-яА-ЯёЁ]/u', $fullText)) {
    error_log("SPAM: Cyrillisch gedetecteerd");
    echo "error"; exit;
}

// 5. VALIDATIE
if (!$senderName || !$senderEmail || !$senderSubject || !$senderMessage) {
    echo "error"; exit;
}
if (!filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
    echo "error"; exit;
}

// 6. SANITIZE (voor HTML)
$senderName    = htmlspecialchars($senderName, ENT_QUOTES, 'UTF-8');
$senderEmail   = htmlspecialchars($senderEmail, ENT_QUOTES, 'UTF-8');
$senderSubject = htmlspecialchars($senderSubject, ENT_QUOTES, 'UTF-8');
$senderMessage = nl2br(htmlspecialchars($senderMessage, ENT_QUOTES, 'UTF-8'));

// 7. MAIL NAAR JOU
$receiverMail = "info@dennisulijn.com";
$to = $receiverMail;
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

$headers = [
    "From: $receiverMail",
    "Reply-To: $senderEmail",
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8"
];
$headers = implode("\r\n", $headers);

$success = mail($to, $subject, $body, $headers);

if (!$success) {
    error_log("Mail naar jou MISLUKT: $senderEmail");
    echo "error"; exit;
}

// 8. BEVESTIGING NAAR AFZENDER
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

$confirmHeaders = [
    "From: $receiverMail",
    "Reply-To: $receiverMail",
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8"
];
$confirmHeaders = implode("\r\n", $confirmHeaders);

mail($senderEmail, $confirmSubject, $confirmBody, $confirmHeaders); // geen check nodig

// 9. SUCCES
error_log("Mail succesvol verzonden aan $senderEmail");
echo "success";
?>