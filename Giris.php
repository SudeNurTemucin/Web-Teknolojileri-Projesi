<?php
// Sabit kullanıcı bilgisi 
define('USER_EMAIL',    'b241210108@sakarya.edu.tr');
define('USER_PASSWORD', 'b241210108');

// Formdan gelen değerleri alma
$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$password = isset($_POST['password']) ? trim($_POST['password']) : '';

//Boş alan kontrolü
if ($username === '' || $password === '') {
    echo "<script>
            alert('Kullanıcı adı ve şifre boş bırakılamaz.');
            window.location.href = 'giriş.html';
          </script>";
    exit;
}

//E-posta format kontrolü
if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
    echo "<script>
            alert('Lütfen geçerli bir e-posta adresi giriniz.');
            window.location.href = 'giriş.html';
          </script>";
    exit;
}

//Kullanıcı doğrulaması
if (strtolower($username) === USER_EMAIL && $password === USER_PASSWORD) {
    // Başarılı giriş: Hoşgeldiniz mesajı
    $shortName = htmlspecialchars(explode('@', USER_EMAIL)[0]);
    echo "<!DOCTYPE html>
    <html lang=\"tr\">
    <head>
      <meta charset=\"UTF-8\">
      <title>Hoşgeldiniz</title>
      <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css\" rel=\"stylesheet\">
      <style>body { display:flex; justify-content:center; align-items:center; height:100vh; }</style>
    </head>
    <body>
      <div class=\"text-center\">
        <h1 class=\"display-4\">Hoşgeldiniz $shortName!</h1>
        <p class=\"lead\">Sisteme başarılı bir şekilde giriş yaptınız.</p>
        <a href=\"index.html\" class=\"btn btn-success mt-3\">Ana Sayfaya Dön</a>
      </div>
    </body>
    </html>";
    exit;
} else {
    // Başarısız giriş: uyarı ve geri yönlendirme
    echo "<script>
            alert('Girdiğiniz bilgiler geçersiz. Lütfen tekrar deneyin.');
            window.location.href = 'giriş.html';
          </script>";
    exit;
}
?>
