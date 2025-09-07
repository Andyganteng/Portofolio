document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Jika elemen masuk ke layar, tambahkan kelas untuk memutar animasi
          entry.target.classList.add("is-visible");
        } else {
          // Jika elemen keluar dari layar, hapus kelas agar animasi bisa diulang
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.1, // Animasi akan terpicu saat 10% dari elemen terlihat
    }
  );

  const elementsToAnimate = document.querySelectorAll(".fade-in");
  elementsToAnimate.forEach((el) => observer.observe(el));

  // Fungsi untuk menampilkan notifikasi kustom
  function showNotification(message, type = 'success') {
    const notification = document.getElementById('custom-notification');
    const notificationText = document.getElementById('notification-text');

    notificationText.textContent = message;
    notification.classList.remove('success', 'error'); // Hapus kelas sebelumnya
    notification.classList.add(type); // Tambah kelas tipe (success/error)

    notification.classList.add('show');

    // Sembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }

  // Event listener untuk formulir kontak
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();
    var isValid = true;

    if (name === "") {
      showNotification('Nama harus diisi.', 'error');
      isValid = false;
    } else if (email === "") {
      showNotification('Email harus diisi.', 'error');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showNotification('Masukkan alamat email yang valid.', 'error');
      isValid = false;
    } else if (message === "") {
      showNotification('Pesan tidak boleh kosong.', 'error');
      isValid = false;
    }

    if (isValid) {
      showNotification('Terima kasih! Pesan Anda telah terkirim.', 'success');
      $("#contactForm")[0].reset();
    }
  });

  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  // Event listener untuk modal portofolio
  $(".portfolio-item").on("click", function () {
    var title = $(this).data("title");
    var image = $(this).data("image");
    var description = $(this).data("description");

    $("#projectModalLabel").text(title);
    $("#modal-img").attr("src", image);
    $("#modal-desc").text(description);
  });

  // Event listener untuk smooth scroll
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800
      );
    }
  });
});
