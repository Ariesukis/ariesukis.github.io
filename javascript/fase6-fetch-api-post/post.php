<?php

$user = $_POST['InputUser'];
$password = $_POST['InputPassword'];

if($user === '' || $password === '')
{
    echo json_encode('error');
}else{
    echo json_encode('Usuario: '.$user.'<br>Contraseña: '.$password);
}

?>