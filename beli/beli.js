const HARGA = parseInt(document.body.dataset.harga, 10) || 250000;

const qtyInput = document.getElementById('qty');
const totalEl = document.getElementById('total');
const subEl = document.getElementById('sub');
const ukuranInput = document.getElementById('ukuran');
const payModal = new bootstrap.Modal(document.getElementById('payModal'));
const bodyContent = document.getElementById('bodyContent');
const successEl = document.querySelector('.success');
const doneBtn = document.getElementById('done');
const titleEl = document.getElementById('title');

let countdownTimer;

function rupiah(n) {
    return n.toLocaleString('id-ID');
}

function updateTotal() {
    const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    qtyInput.value = qty;

    const total = qty * HARGA;
    totalEl.textContent = rupiah(total);
    subEl.textContent = 'Rp ' + rupiah(total);
}

function getPaymentMethod() {
    const selected = document.querySelector('input[name="payment"]:checked');
    return selected ? selected.value : 'Transfer Bank';
}

function startCountdown() {
    clearInterval(countdownTimer);

    let seconds = 900;
    countdownTimer = setInterval(() => {
        const countdownEl = document.getElementById('countdown');
        if (!countdownEl) return;

        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        countdownEl.textContent =
            String(minutes).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

        if (seconds-- <= 0) {
            clearInterval(countdownTimer);
            countdownEl.textContent = 'Expired';
        }
    }, 1000);
}

function showPaymentContent(method) {
    successEl.style.display = 'none';
    bodyContent.style.display = 'block';
    doneBtn.style.display = 'inline-block';
    titleEl.textContent = method;

    if (method === 'QRIS') {
        bodyContent.innerHTML = `
            <div class="qris-wrap">
                <p class="text-muted mb-2">Scan kode QRIS di bawah ini</p>
                <img src="../assets/foto/KODEbayar.png" alt="Kode QRIS">
                <div class="pay-total">Total Rp ${totalEl.textContent}</div>
                <small class="text-muted">Selesaikan pembayaran sebelum waktu habis</small>
                <div id="countdown" class="mt-3">15:00</div>
            </div>
        `;
        startCountdown();
        return;
    }

    if (method === 'Transfer Bank') {
        bodyContent.innerHTML = `
            <div class="pay-info">
                <b>BCA</b>
                <span>1234567890</span><br>
                <span>a.n NEXORA</span>
            </div>
            <div class="pay-info">
                <b>Mandiri</b>
                <span>9876543210</span><br>
                <span>a.n NEXORA</span>
            </div>
            <div class="pay-total">Total Rp ${totalEl.textContent}</div>
        `;
        return;
    }

    if (method === 'E-Wallet') {
        bodyContent.innerHTML = `
            <div class="pay-info"><b>DANA</b><span>08123456789</span></div>
            <div class="pay-info"><b>OVO</b><span>08123456789</span></div>
            <div class="pay-info"><b>GoPay</b><span>08123456789</span></div>
            <div class="pay-total">Total Rp ${totalEl.textContent}</div>
        `;
        return;
    }

    bodyContent.innerHTML = `
        <div class="pay-info text-center">
            <i class="bi bi-truck" style="font-size: 32px; display: block; margin-bottom: 12px;"></i>
            <p>Pembayaran dilakukan saat barang diterima.</p>
            <span>Estimasi pengiriman 2–4 hari kerja.</span>
        </div>
        <div class="pay-total">Total Rp ${totalEl.textContent}</div>
    `;
}

// Size picker
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        ukuranInput.value = btn.dataset.size;
    });
});

// Quantity stepper
document.getElementById('qtyMinus').addEventListener('click', () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value, 10) - 1);
    updateTotal();
});

document.getElementById('qtyPlus').addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value, 10) + 1;
    updateTotal();
});

// Payment cards
document.querySelectorAll('.payment-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

qtyInput.addEventListener('input', updateTotal);
updateTotal();

document.getElementById('buyBtn').addEventListener('click', () => {
    showPaymentContent(getPaymentMethod());
    payModal.show();
});

doneBtn.addEventListener('click', () => {
    bodyContent.style.display = 'none';
    successEl.style.display = 'block';
    doneBtn.style.display = 'none';
});
