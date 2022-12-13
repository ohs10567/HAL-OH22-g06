<?php

//POST数値受け取り
$mymail = $_POST['mymail'];
$pass = $_POST['pass'];
$myname = $_POST['myname'];
$upload_file = $_FILES['image'];

//データベース
$host = 'localhost';
$uname = 'root';
$password = '';
$dbname = 'misoten';

$link = mysqli_connect($host, $uname, $password, $dbname);

if (mysqli_connect_error()) {
    die("データベース接続エラー");
}

$query =  "SELECT MYID FROM user ORDER BY MYID DESC LIMIT 1";
$res =  mysqli_query($link, $query);
if (!$res) {
    die('SQLエラー');
} else {
    $rec = mysqli_fetch_assoc($res);
    if ($rec) {
        $str = $upload_file['name'];
        $ext = mb_substr($str, mb_strrpos($str, '.') + 1, mb_strlen($str));
        $image = $rec['MYID'] + 1 . '.' . $ext;
        $flg = 1;
    } else {
        $str = $upload_file['name'];
        $ext = mb_substr($str, mb_strrpos($str, '.') + 1, mb_strlen($str));
        $image = 1 . '.' . $ext;
        $flg = 1;
    }
}
mysqli_close($link);


$link = mysqli_connect($host, $uname, $password, $dbname);

if (mysqli_connect_error()) {
    die("データベース接続エラー");
}
if ($flg == 1) {
    $query = "INSERT INTO user (MYNAME, IMAGE, MYMAIL, PASS) VALUES ('" . $myname . "','" . $image . "','" . $mymail . "','" . $pass . "')";
    $res =  mysqli_query($link, $query);
    if (!$res) {
        die('SQLエラー');
    } else {
        move_uploaded_file($upload_file['tmp_name'], "profile_image/" . $image);
    }
    mysqli_close($link);
    header('Location: ログイン画面.html');
}

?>


