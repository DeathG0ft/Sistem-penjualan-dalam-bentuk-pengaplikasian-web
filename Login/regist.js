document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Notifikasi sukses
    alert("Registrasi Berhasil! Data Anda telah tersimpan. Silakan login.");

    // Redirect ke halaman login
    window.location.href = "login.html"; 
});