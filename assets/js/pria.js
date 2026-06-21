document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. PREMIUM GLASSMORPHISM NAVBAR EFFECT
    // ==========================================
    const navbar = document.querySelector(".navbar-custom");
    
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 30) {
                navbar.style.padding = "14px 4%";
                navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)";
                navbar.style.background = "rgba(255, 255, 255, 0.92)";
                navbar.style.backdropFilter = "blur(15px)";
                navbar.style.webkitBackdropFilter = "blur(15px)"; // Support Safari
            } else {
                navbar.style.padding = "20px 4%";
                navbar.style.boxShadow = "none";
                navbar.style.background = "#ffffff";
                navbar.style.backdropFilter = "none";
                navbar.style.webkitBackdropFilter = "none";
            }
        });
    }

    // ==========================================
    // 2. INTERACTIVE EXPANDABLE SEARCH BAR
    // ==========================================
    const searchInput = document.querySelector(".search-wrapper input");
    
    if (searchInput) {
        searchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const keyword = searchInput.value.trim();
                if (keyword !== "") {
                    // Animasi feedback singkat saat submit pencarian
                    searchInput.style.opacity = "0.5";
                    setTimeout(() => {
                        searchInput.style.opacity = "1";
                        alert(`Mencari koleksi pria untuk: "${keyword}"`);
                    }, 300);
                }
            }
        });
    }

    // ==========================================
    // 3. LIVE WISHLIST TOGGLE (MICRO-INTERACTION)
    // ==========================================
    const wishlistButtons = document.querySelectorAll(".wishlist-badge");
    
    wishlistButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Mencegah reload halaman
            const icon = this.querySelector("i");
            
            // Efek pop-up animasi saat diklik
            this.style.transform = "scale(0.8)";
            
            setTimeout(() => {
                this.style.transform = "scale(1)";
                // Toggle icon class antara hati kosong dan hati penuh
                if (icon.classList.contains("bi-heart")) {
                    icon.classList.remove("bi-heart");
                    icon.classList.add("bi-heart-fill");
                    icon.style.color = "#dc3545"; // Berubah warna merah premium
                } else {
                    icon.classList.remove("bi-heart-fill");
                    icon.classList.add("bi-heart");
                    icon.style.color = ""; // Kembali ke default
                }
            }, 150);
        });
    });

    // ==========================================
    // 4. REAL-TIME FILTER SIMULATION
    // ==========================================
    const checkboxes = document.querySelectorAll(".custom-check .form-check-input");
    const selectSort = document.querySelector(".custom-select");
    const resetBtn = document.querySelector(".reset-filter-btn");

    function updateFilters() {
        let activeCategories = [];
        checkboxes.forEach(box => {
            if (box.checked) {
                // Mengambil label teks di sebelah checkbox sebagai parameter data
                const label = box.nextElementSibling.textContent;
                activeCategories.push(label);
            }
        });

        console.log("--- Filter Aktual NEXORA ---");
        console.log("Kategori Terpilih:", activeCategories.length > 0 ? activeCategories : "Semua Produk");
        if(selectSort) console.log("Urutan:", selectSort.options[selectSort.selectedIndex].text);
    }

    // Event listener untuk setiap checkbox filter
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateFilters);
    });

    // Event listener untuk dropdown urutkan harga
    if (selectSort) {
        selectSort.addEventListener("change", updateFilters);
    }

    // Fungsi tombol 'Hapus Semua' filter
    if (resetBtn) {
        resetBtn.addEventListener("click", function (e) {
            e.preventDefault();
            checkboxes.forEach(box => box.checked = false);
            if (selectSort) selectSort.selectedIndex = 0;
            updateFilters();
        });
    }
});