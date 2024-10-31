let totalPembayaran = 0;
 // Fungsi untuk menambahkan pemisah ribuan
 function formatRupiah(angka) {
 return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
 }
 document.getElementById('inputForm').addEventListener('submit', function(event) {
 event.preventDefault(); // Mencegah pengiriman form
 // Mengambil nilai dari input
 const namaProduk = document.getElementById('namaProduk').value;
 const hargaSatuan = parseFloat(document.getElementById('hargaSatuan').value);
 const jumlah = parseInt(document.getElementById('jumlah').value);
 // Menghitung Jumlah Harga
 const jumlahHarga = hargaSatuan * jumlah;
 // Membuat baris baru untuk tabel
 const tableBody = document.getElementById('dataTable').querySelector('tbody');
 const newRow = document.createElement('tr');
 // Menambahkan data ke baris
 newRow.innerHTML = `
 <td>${namaProduk}</td>
 <td>${formatRupiah(hargaSatuan.toFixed(0))}</td>
 <td>${jumlah}</td>
 <td>${formatRupiah(jumlahHarga.toFixed(0))}</td>
 `;
 // Menambahkan baris ke tabel
 tableBody.appendChild(newRow);
 // Menambahkan Jumlah Harga ke total
 totalPembayaran += jumlahHarga;
 document.getElementById('totalHarga').innerText = `Total Pembayaran: Rp
${formatRupiah(totalPembayaran.toFixed(0))}`;
 // Reset form setelah input
 document.getElementById('inputForm').reset();
 });