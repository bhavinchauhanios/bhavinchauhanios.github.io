<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */
// an email address that will be in the From field of the email.
$from = 'bhavin.9909@gmail.com';
// an email address that will receive the email with the output of the form
$sendTo = 'bhavin.9909@gmail.com';
// subject of the email
$subject = 'New message from contact form';
// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('InputName' => 'Name', 'InputEmail' => 'Email', 'InputSubject' => 'Subject', 'InputMessage' => 'Message'); 
// message that will be displayed when everything is OK :)
$okMessage = 'Your message successfully submitted. Thank you, I will get back to you soon!';
// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';
/*
 *  LET'S DO THE SENDING
 */

if(count($_POST) != 0){
$InputName = $_POST['InputName'];

$InputEmail = $_POST['InputEmail'];

$InputSubject = $_POST['InputSubject'];

$InputMessage = $_POST['InputMessage'];
}


$emailText = '<br><br>We have received the below enquiry from :<br><br>Name:'. $InputName.'<br><br>E-mail: '.$InputEmail.'<br><br>Subject: '.$InputSubject.'<br><br>Message:'.$InputMessage;
$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From:bhavin.9909@gmail.com' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
    if (mail($sendTo, $subject, $emailText, $headers)){
        $responseArray = array('type' => 'success', 'message' => $okMessage);
    }else{
        $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    } 
    
?>
