<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "anthonyoberto@gmail.com, heidighillenbrand@gmail.com, bender.april@gmail.com";
$subject = "New message from Nostalgiawar.com";

mail ($to, $subject, $message, "From: " . $email);
echo "Your message has been sent. Thanks for sharing with us!"

?>