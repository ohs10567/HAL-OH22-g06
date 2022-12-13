<?php
// 新規登録　form 受け取り
// $name=$_POST['name'];
// $mail=$_POST['mail'];
// $pass=$_POST['pass'];
$name = $_POST['myname'];
$mail = $_POST['mymail'];
$pass = $_POST['pass'];
$upload_file = $_FILES['image'];

// データベース接続　メモ
$host='localhost';
$uname='root';
$passwd='';
$dbname='misoten';

// データベース接続処理
$db=mysqli_connect($host,$uname,$passwd,$dbname);
if(mysqli_connect_errno()){
    die('DB接続エラー');
}

// ID振り分け
// 未使用のID １件取得
$query="SELECT MYID , id FROM id WHERE flg = 0 LIMIT 1 ; " ;
$res=mysqli_query($db,$query);
if(!$res){
    die('SQLエラー'.$query);
}
while($rec=mysqli_fetch_assoc($res)){
    $NEWID[]=$rec;
}

$str = $upload_file['name'];
$ext = mb_substr($str, mb_strrpos($str, '.') + 1, mb_strlen($str));
$image = $NEWID[0]['MYID']. '.' . $ext;
// IDテーブル情報
//  $NEWID[0]['id'];   IDテーブル　主キー
//  $NEWID[0]['MYID']; IDテーブル　ID(5桁)

// FLG 書き換え
$flgquery="UPDATE id SET flg = 1 WHERE id = " . $NEWID[0]['id'] . " ; " ;
$res=mysqli_query($db,$flgquery);
if(!$res){
    die('SQLエラー'.$query);
}

$userid = $NEWID[0]['MYID'];
// echo $userid;

// テーブルリセットsql
// UPDATE id SET flg = 0 WHERE flg = 1 ;

// ユーザー情報登録
// $query = "INSERT INTO user (MYNAME, IMAGE, MYMAIL, PASS)
// $query="INSERT INTO movie(MOVNAME, MOVIMG, MOVTEXT, MOVCAST, MOVDIRECTER, MOVGENRE) VALUES ('$movname','$movimg','$movtext','$movcast','$movdirecter','$movgenre');";
$query="INSERT INTO  user (MYID, MYNAME, MYIMAGE, MYMAIL, PASS) VALUES ('$userid','$name','$image','$mail','$pass'); " ;
$res=mysqli_query($db,$query);
if(!$res){
    die('SQLエラー'.$query);
}else {
    move_uploaded_file($upload_file['tmp_name'], "profile_image/" . $image);
}

mysqli_close($db);
header('Location: ログイン画面.html');
?>
