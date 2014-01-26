<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "anthonyoberto@gmail.com";
$subject = "New Message";

mail ($to, $subject, $message, "From: " . $name);
echo "Thanks! Your message has been sent";

?>