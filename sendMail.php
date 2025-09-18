<?php
if ($_SERVER["REQUEST METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "ralphmatthew.samonte@gmai.com";
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    $fullMessage = "You received a new message from your portfolio contact form:\n\n";
    $fullMessage .= "Name: $name\n";
    $fullMessage .= "Email: $email\n";
    $fullMessage .= "Subject: $subject\n\n";
    $fullMessage .= "Message:\n$message\n";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
