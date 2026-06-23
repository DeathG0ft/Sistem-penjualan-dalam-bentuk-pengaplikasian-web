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


//ULASAN
document.querySelectorAll(".review-item").forEach(item => {

    item.addEventListener("click", () => {
        console.log("Review dipilih");
    });

});

//KARTU SAYA
const btnTambahKartu =
document.getElementById("btnTambahKartu");

if(btnTambahKartu){

    btnTambahKartu.addEventListener("click", () => {

        alert("Fitur tambah kartu akan segera tersedia.");

    });

}

//PREFERENSI EMAIL
const saveEmailPref =
document.getElementById("saveEmailPref");

if(saveEmailPref){

    saveEmailPref.addEventListener("click", () => {

        alert("Preferensi email berhasil disimpan.");

    });

}

//WISHLIST
const removeButtons =
document.querySelectorAll(".btn-remove");

removeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const item =
        button.closest(".wishlist-item");

        item.remove();

        alert("Produk dihapus dari wishlist.");

    });

});

//DELETE AKUN
const deleteBtn =
document.getElementById("deleteAccountBtn");

if(deleteBtn){

    deleteBtn.addEventListener("click", () => {

        const confirmDelete =
        document.getElementById("confirmDelete");

        if(!confirmDelete.checked){

            alert(
                "Silakan centang konfirmasi terlebih dahulu."
            );

            return;
        }

        const result = confirm(
            "Apakah Anda yakin ingin menghapus akun ini?"
        );

        if(result){

            alert(
                "Permohonan penghapusan akun telah dikirim."
            );

        }

    });

}