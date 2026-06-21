document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. PREMIUM GLASSMORPHISM NAVBAR SCROLL
    // ==========================================
    const navbar = document.querySelector(".navbar-custom");
    
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 30) {
                navbar.style.padding = "14px 4%";
                navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)";
                navbar.style.background = "rgba(255, 255, 255, 0.92)";
                navbar.style.backdropFilter = "blur(15px)";
                navbar.style.webkitBackdropFilter = "blur(15px)"; 
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
    // 2. SEARCH EVENT INTERACTION
    // ==========================================
    const searchInput = document.querySelector(".search-wrapper input");
    
    if (searchInput) {
        searchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const keyword = searchInput.value.trim();
                if (keyword !== "") {
                    alert(`Mencari perlengkapan cabang olahraga: "${keyword}"`);
                }
            }
        });
    }

    // ==========================================
    // 3. LIVE WISHLIST ACCELERATION
    // ==========================================
    const wishlistButtons = document.querySelectorAll(".wishlist-badge");
    
    wishlistButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); 
            const icon = this.querySelector("i");
            
            this.style.transform = "scale(0.8)";
            
            setTimeout(() => {
                this.style.transform = "scale(1)";
                if (icon.classList.contains("bi-heart")) {
                    icon.classList.remove("bi-heart");
                    icon.classList.add("bi-heart-fill");
                    icon.style.color = "#dc3545"; 
                } else {
                    icon.classList.remove("bi-heart-fill");
                    icon.classList.add("bi-heart");
                    icon.style.color = ""; 
                }
            }, 150);
        });
    });

    // ==========================================
    // 4. REAL-TIME SPORTS CATEGORY FILTER & SORT
    // ==========================================
    const productGrid = document.getElementById("productGrid");
    const products = Array.from(document.querySelectorAll("#productGrid .col"));
    const catRunning = document.getElementById("catRunning");
    const catFootball = document.getElementById("catFootball");
    const catTraining = document.getElementById("catTraining");
    const selectSort = document.querySelector(".custom-select");
    const resetBtn = document.querySelector(".reset-filter-btn");
    const countText = document.getElementById("product-count");

    const originalOrder = [...products];

    function updateProducts() {
        const showRunning = catRunning.checked;
        const showFootball = catFootball.checked;
        const showTraining = catTraining.checked;

        const noFilter = !showRunning && !showFootball && !showTraining;

        let visibleProducts = products.filter(product => {
            const cat = product.getAttribute("data-category");
            if (noFilter) return true;
            if (showRunning && cat === "running") return true;
            if (showFootball && cat === "football") return true;
            if (showTraining && cat === "training") return true;
            return false;
        });

        products.forEach(p => p.style.display = "none");
        visibleProducts.forEach(p => p.style.display = "block");

        const sortValue = selectSort.value;
        if (sortValue === "1") {
            visibleProducts.sort((a, b) => parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price")));
        } else if (sortValue === "2") {
            visibleProducts.sort((a, b) => parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price")));
        } else {
            visibleProducts = originalOrder.filter(p => visibleProducts.includes(p));
        }

        visibleProducts.forEach(product => productGrid.appendChild(product));

        if (countText) {
            countText.innerText = `Menampilkan ${visibleProducts.length} Perlengkapan Olahraga Pilihan`;
        }
    }

    [catRunning, catFootball, catTraining].forEach(checkbox => {
        if (checkbox) checkbox.addEventListener("change", updateProducts);
    });

    if (selectSort) {
        selectSort.addEventListener("change", updateProducts);
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (catRunning) catRunning.checked = false;
            if (catFootball) catFootball.checked = false;
            if (catTraining) catTraining.checked = false;
            if (selectSort) selectSort.value = "default";
            updateProducts();
        });
    }
});