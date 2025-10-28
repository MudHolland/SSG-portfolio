<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Gegevens uit formulier ophalen en schoonmaken
    $senderName    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $senderEmail   = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
    $senderSubject = htmlspecialchars(trim($_POST['subject'] ?? ''));
    $senderMessage = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Basisvalidatie
    if (!$senderName || !$senderEmail || !$senderSubject || !$senderMessage) {
        echo "error";
        exit;
    }

    // Ontvanger
    $receiverMail = "info@dennisulijn.com";

    // Bericht naar ontvanger
    $to      = $receiverMail;
    $subject = "Nieuw bericht via contactformulier: $senderSubject";
    $body    = "
        <html>
        <head><meta charset='UTF-8'></head>
        <body>
            <p>Nieuw bericht ontvangen via <a href='https://www.dennisulijn.com'>dennisulijn.com</a>:</p>
            <p><b>Naam:</b> $senderName</p>
            <p><b>E-mailadres:</b> $senderEmail</p>
            <p><b>Onderwerp:</b> $senderSubject</p>
            <p><b>Bericht:</b><br>$senderMessage</p>
        </body>
        </html>
    ";

    $headers  = "From: $receiverMail\r\n";
    $headers .= "Reply-To: $senderEmail\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $success = mail($to, $subject, $body, $headers);

    if ($success) {
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
        $confirmHeaders  = "From: $receiverMail\r\n";
        $confirmHeaders .= "Reply-To: $receiverMail\r\n";
        $confirmHeaders .= "MIME-Version: 1.0\r\n";
        $confirmHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";

        mail($senderEmail, $confirmSubject, $confirmBody, $confirmHeaders);
        echo "success";
    } else {
        echo "error";
    }
}
?>
