<?php
session_start();

$mail=$_POST['mail'];
$pass=$_POST['pass'];


$db = mysqli_connect('localhost', 'root', '', 'misoten');
if (!$db) {
    die('DB接続エラー');
}
$sql = "SELECT * FROM user WHERE MYMAIL='$mail' AND PASS='$pass';";
$ret = mysqli_query($db, $sql);
if (!$ret) {
    die('SQLエラー'.$sql);
}

$res = mysqli_fetch_assoc($ret);

$msg = "";
if ($res == null) {
    $msg = "IDまたはパスワードが違います。";
} else {
    $_SESSION['id']=$res['MYID'];
    $_SESSION['name']=$res['MYNAME'];
    $_SESSION['mail']=$res['MYMAIL'];
    $_SESSION['pass']=$res['PASS'];
    header('Location: home.html');
}



mysqli_free_result($ret);
mysqli_close($db);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ログインチェック</title>
    <link rel="shortcut icon" href="img/icon.png" type="image/x-icon">
</head>

<body>
    <?php
    echo $msg;
    ?>
</body>

</html>