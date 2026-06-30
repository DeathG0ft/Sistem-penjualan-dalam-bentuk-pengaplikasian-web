document
.getElementById("forgotForm")
.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

alert(
"Link reset password berhasil dikirim ke\n\n"+email+
"\n\nSilakan cek email Anda."
);

window.location.href="login.html";

});