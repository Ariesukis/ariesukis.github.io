<?php

$user = $_POST['InputUser'];
$password = $_POST['InputPassword'];

if($user === ' ' || $password === ' ')
{
    echo json_encode('Llena todos los campos');
}else{
    echo json_encode('<p>Usuario: '+$user+'</p><p> Contraseña: '+$password+'</p>');
}



?>