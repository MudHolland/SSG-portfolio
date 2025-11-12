<?php
$to = "info@dennisulijn.com";
$subject = "Test";
$message = "Hallo, test van " . date('Y-m-d H:i:s');
$headers = "From: test@dennisulijn.com\r\n";
if (mail($to, $subject, $message, $headers)) {
    echo "Verzonden!";
} else {
    echo "Fout: " . print_r(error_get_last(), true);
}
?>