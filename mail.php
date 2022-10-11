<?php

    $name = $_POST[`full-name`];
    $subject = $_POST[`subject`];
    $email = $_POST[`email`];
    $message = $_POST[`message`];

$mailHeader = "From:".$name."<".$email.">\r\n";

$recipient = "joranengelund@hotmail.com";

mail($recipient, $subject, $message, $mailHeader)
or die("Error!");


?>

