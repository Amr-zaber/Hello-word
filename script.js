document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mengambil nilai input
    const namaProduk = document.getElementById('namaProduk').value;
    const hargaSatuan = parseFloat(document.getElementById('hargaSatuan').value);
    const jumlah = parseInt(document.getElementById('jumlah').value);
    
    // Menghitung jumlah harga
    const jumlahHarga = hargaSatuan * jumlah;
    
    // Membuat baris baru
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${namaProduk}</td>
        <td>Rp ${hargaSatuan.toLocaleString()}</td>
        <td>${jumlah}</td>
        <td>Rp ${jumlahHarga.toLocaleString()}</td>
    `;
    
    // Menambahkan baris ke tabel
    document.querySelector('#dataTable tbody').appendChild(newRow);
    
    // Menghitung total harga
    updateTotal();
    
    // Reset form
    this.reset();
    
    // Efek suara cute (opsional)
    playKawaiiSound();
});

function updateTotal() {
    const rows = document.querySelectorAll('#dataTable tbody tr');
    let total = 0;
    
    rows.forEach(row => {
        const hargaText = row.cells[3].textContent;
        const harga = parseFloat(hargaText.replace('Rp ', '').replace(/,/g, ''));
        total += harga;
    });
    
    document.getElementById('totalHarga').textContent = 
        `Total Pembayaran: Rp ${total.toLocaleString()}`;

// Fungsi untuk memainkan efek suara (opsional)
document.getElementById('playButton').addEventListener('click', playKawaiiSound);}