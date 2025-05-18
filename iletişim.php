<?php
// iletişim.php

// Form gönderilmemişse doğrudan form sayfasına dön
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: iletisim.html');
    exit;
}

// POST verilerini al
$name     = $_POST['name']     ?? '';
$surname  = $_POST['surname']  ?? '';
$cinsiyet = $_POST['cinsiyet'] ?? '';
$password = $_POST['password'] ?? '';
$email    = $_POST['email']    ?? '';
$telefon  = $_POST['telefon']  ?? '';
$aciliyet = $_POST['aciliyet'] ?? '';
$konu     = $_POST['konu']     ?? '';
$mesaj    = $_POST['mesaj']    ?? '';
$sozlesme = isset($_POST['sozlesme']) ? 'Evet' : 'Hayır';

// Dosya bilgilerini al (multiple input)
$uploadedFiles = [];
if (!empty($_FILES['dosya']) && is_array($_FILES['dosya']['name'])) {
    foreach ($_FILES['dosya']['name'] as $i => $filename) {
        if ($_FILES['dosya']['error'][$i] === UPLOAD_ERR_OK) {
            $uploadedFiles[] = $filename;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gönderilen İletişim Bilgileri</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container py-5">
    <h1 class="mb-4">Gönderilen Veriler</h1>
    <table class="table table-bordered bg-white">
      <tbody>
        <tr>
          <th>Ad</th>
          <td><?= htmlspecialchars($name) ?></td>
        </tr>
        <tr>
          <th>Soyad</th>
          <td><?= htmlspecialchars($surname) ?></td>
        </tr>
        <tr>
          <th>Cinsiyet</th>
          <td><?= htmlspecialchars($cinsiyet) ?></td>
        </tr>
        <tr>
          <th>Şifre</th>
          <td><?= htmlspecialchars($password) ?></td>
        </tr>
        <tr>
          <th>Email</th>
          <td><?= htmlspecialchars($email) ?></td>
        </tr>
        <tr>
          <th>Telefon</th>
          <td><?= htmlspecialchars($telefon) ?></td>
        </tr>
        <tr>
          <th>Aciliyet</th>
          <td><?= htmlspecialchars($aciliyet) ?></td>
        </tr>
        <tr>
          <th>Konu</th>
          <td><?= htmlspecialchars($konu) ?></td>
        </tr>
        <tr>
          <th>Mesaj</th>
          <td><?= nl2br(htmlspecialchars($mesaj)) ?></td>
        </tr>
        <tr>
          <th>Sözleşme Kabulü</th>
          <td><?= $sozlesme ?></td>
        </tr>
        <tr>
          <th>Yüklenen Dosyalar</th>
          <td>
            <?php if (count($uploadedFiles) > 0): ?>
              <ul class="mb-0">
                <?php foreach ($uploadedFiles as $f): ?>
                  <li><?= htmlspecialchars($f) ?></li>
                <?php endforeach ?>
              </ul>
            <?php else: ?>
              <em>Dosya yüklenmedi.</em>
            <?php endif ?>
          </td>
        </tr>
      </tbody>
    </table>
    <a href="iletişim.html" class="btn btn-success">Geri Dön</a>
  </div>
</body>
</html>
