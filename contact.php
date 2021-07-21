<?php

$name = $_POST['name'];
$email = $_POST['email'];
$website = $_POST['website'];
$subject = $_POST['subject'];
$comments = $_POST['comments'];

$to = 'arvind@raisinginfotech.in';
$subject = $_POST['name']." - ".$subject;

$htmlContent = '
    <html>
    <head>
        <title>Raisinginfotech Pvt Ltd Customer contact</title>
    </head>
    <body>
        <h1>Raisinginfotech  pvt Ltd.</h1>
        <table cellspacing="0" style="border: 2px dashed #FB4314; width: 300px; height: 200px;">
            <tr>
                <th>Name:</th><td>'.$name.'</td>
            </tr>
            <tr style="background-color: #e0e0e0;">
                <th>Email:</th><td>'.$email.'</td>
            </tr>
            <tr>
                <th>Website:</th><td><a href="'.$website.'">'.$website.'</a></td>
            </tr>
			<tr>
                <th>Subject:</th><td>'.$subject.'</td>
            </tr>
			<tr>
                <th>Messages:</th><td>'.$comments.'</td>
            </tr>
        </table>
    </body>
    </html>';

// Set content-type header for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: admin@raisinginfotech.in' . "\r\n";
$headers .= 'Cc: hr@raisinginfotech.in' . "\r\n";
// Send email
if(mail($to,$subject,$htmlContent,$headers))
{
   echo 'Email has sent successfully';
}
else{
   // echo 'Email sending fail';
}


?>