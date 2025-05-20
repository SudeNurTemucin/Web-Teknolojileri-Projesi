  
//Şehrim sayfasındaki slider

// Sayfa yüklendiğinde çalışacak şekilde sarıyoruz:
document.addEventListener('DOMContentLoaded', function() {
  // Carousel ve caption kutusunu seç
  var carousel = document.getElementById('carouselExample');
  var captionBox = document.getElementById('slider-caption');

  // Açıklamayı güncelleyen fonksiyon
  function updateCaption() {
    var activeItem = carousel.querySelector('.carousel-item.active');
    var caption = activeItem.getAttribute('data-caption');
    captionBox.innerText = caption || '';
  }

  // Slayt geçişi bittiğinde açıklamayı güncelle
   carousel.addEventListener('slid.bs.carousel', updateCaption);

  // İlk yüklemede de bir kez çalıştır
  updateCaption();
});



// JavaScript (javaScript.js) validations
function validateFormJS() {
    let isValid = true;
    const errorElements = document.querySelectorAll('.text-danger');
    errorElements.forEach(e => e.textContent = ''); // Hata mesajlarını temizle

    // Ad validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('error-name').textContent = 'Ad zorunludur';
        isValid = false;
    }

    // Soyad validation
    const surname = document.getElementById('surname').value.trim();
    if (!surname) {
        document.getElementById('error-surname').textContent = 'Soyad zorunludur';
        isValid = false;
    }

    // Cinsiyet validation
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    if (!cinsiyet) {
        document.getElementById('error-cinsiyet').textContent = 'Cinsiyet seçimi zorunludur';
        isValid = false;
    }

    // Şifre validation
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('error-password').textContent = 'Şifre zorunludur';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('error-email').textContent = 'Email zorunludur';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('error-email').textContent = 'Geçersiz email formatı';
        isValid = false;
    }

    // Telefon validation
    const telefon = document.getElementById('telefon').value.trim();
    const telefonRegex = /^\d{11}$/; // 11 rakam kontrolü
    if (!telefon) {
        document.getElementById('error-telefon').textContent = 'Telefon zorunludur';
        isValid = false;
    } else if (!telefonRegex.test(telefon)) {
        document.getElementById('error-telefon').textContent = '11 haneli telefon numarası giriniz';
        isValid = false;
    }


    // Aciliyet validation
    const aciliyet = document.getElementById('aciliyet').value;
    if (!aciliyet) {
        document.getElementById('error-aciliyet').textContent = 'Aciliyet seçimi zorunludur';
        isValid = false;
    }

    // Konu validation
    const konu = document.getElementById('konu').value.trim();
    const konular = ['Öneri', 'Şikayet', 'Bilgi İsteği', 'Teknik Destek', 'Hesap Sorunu', 'Yeni Özellik Talebi', 'Diğer'];
    if (!konu) {
        document.getElementById('error-konu').textContent = 'Konu zorunludur';
        isValid = false;
    } else if (!konular.includes(konu)) {
        document.getElementById('error-konu').textContent = 'Geçersiz konu seçimi';
        isValid = false;
    }

    // Mesaj validation
    const mesaj = document.getElementById('mesaj').value.trim();
    if (!mesaj) {
        document.getElementById('error-mesaj').textContent = 'Mesaj zorunludur';
        isValid = false;
    }

    // Sözleşme validation
    const sozlesme = document.getElementById('sozlesme').checked;
    if (!sozlesme) {
        document.getElementById('error-sozlesme').textContent = 'Sözleşme kabul edilmeli';
        isValid = false;
    }

    return isValid;
}

// Vue.js Validations
const { createApp } = Vue;

createApp({
    data() {
        return {
            name: '',
            surname: '',
            cinsiyet: '',
            password: '',
            email: '',
            telefon: '',
            mesaj: '',
            hataMesaji: {
                name: '',
                surname: '',
                cinsiyet: '',
                password: '',
                email: '',
                telefon: '',
                aciliyet: '',
                konu: '',
                mesaj: '',
                sozlesme: ''
            }
        };
    },
    methods: {
        validateFormVue() {
            let isValid = true;
            this.clearErrors();

            // Ad validation
            if (!this.name.trim()) {
                this.hataMesaji.name = 'Ad zorunlu';
                isValid = false;
            }

            // Soyad validation
            if (!this.surname.trim()) {
                this.hataMesaji.surname = 'Soyad zorunlu';
                isValid = false;
            }

            // Cinsiyet validation
            if (!this.cinsiyet) {
                this.hataMesaji.cinsiyet = 'Cinsiyet seçimi zorunlu';
                isValid = false;
            }

            // Şifre validation
            if (!this.password) {
                this.hataMesaji.password = 'Şifre zorunlu';
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.email.trim()) {
                this.hataMesaji.email = 'Email zorunlu';
                isValid = false;
            } else if (!emailRegex.test(this.email)) {
                this.hataMesaji.email = 'Geçersiz email formatı';
                isValid = false;
            }

            // Telefon validation
            const telefonRegex = /^\d{11}$/;
            if (!this.telefon.trim()) {
                this.hataMesaji.telefon = 'Telefon zorunludur';
                isValid = false;
            } else if (!telefonRegex.test(this.telefon)) {
                this.hataMesaji.telefon = '11 haneli telefon numarası giriniz';
                isValid = false;
            }

            // Diğer Vue bağlantılı olmayan alanlar için JS ile kontrol
            const aciliyet = document.getElementById('aciliyet').value;
            if (!aciliyet) {
                this.hataMesaji.aciliyet = 'Aciliyet seçimi zorunlu';
                isValid = false;
            }

            const konu = document.getElementById('konu').value.trim();
            const konular = ['Öneri', 'Şikayet', 'Bilgi İsteği', 'Teknik Destek', 'Hesap Sorunu', 'Yeni Özellik Talebi', 'Diğer'];
            if (!konu) {
                this.hataMesaji.konu = 'Konu zorunlu';
                isValid = false;
            } else if (!konular.includes(konu)) {
                this.hataMesaji.konu = 'Geçersiz konu seçimi';
                isValid = false;
            }

            if (!this.mesaj.trim()) {
                this.hataMesaji.mesaj = 'Mesaj zorunlu';
                isValid = false;
            }

            const sozlesme = document.getElementById('sozlesme').checked;
            if (!sozlesme) {
                this.hataMesaji.sozlesme = 'Sözleşme kabul edilmelidir.';
                isValid = false;
            }

            return isValid;
        },
        clearErrors() {
            for (let key in this.hataMesaji) {
                this.hataMesaji[key] = '';
            }
        }
    }
}).mount('#vueApp');


