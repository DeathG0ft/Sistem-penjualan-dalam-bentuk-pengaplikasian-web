//PROFILE
document.addEventListener("DOMContentLoaded", function(){

    const btnAlamat =
        document.getElementById("btnAlamat");

    const btnEdit =
        document.getElementById("btnEdit");

    btnAlamat.addEventListener("click", function(){

        alert("Menu tambah alamat akan dibuka.");

    });

    btnEdit.addEventListener("click", function(e){

        e.preventDefault();

        alert("Menu edit profil akan dibuka.");

    });

});


//WALLET
const topupBtn = document.querySelector(".wallet-card .btn-dark-custom");

if(topupBtn){
    topupBtn.addEventListener("click", () => {
        alert("Fitur Top Up Wallet akan segera tersedia.");
    });
}

//LACAK PESANAN
const trackBtn = document.getElementById("trackBtn");

if(trackBtn){
    trackBtn.addEventListener("click", function(){

        const nomor =
            document.getElementById("orderNumber").value;

        if(nomor === ""){
            alert("Masukkan nomor pesanan terlebih dahulu.");
            return;
        }

        alert("Mencari pesanan: " + nomor);
    });
}

//LACAK PESANAN
document.querySelectorAll(".review-item").forEach(item => {

    item.addEventListener("click", () => {
        console.log("Review dipilih");
    });

});