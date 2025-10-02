// Ganti mode form
document.querySelectorAll('input[name="mode"]').forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'lagu') {
      document.getElementById('form-lagu').classList.remove('hidden');
      document.getElementById('form-kerekan').classList.add('hidden');
    } else {
      document.getElementById('form-lagu').classList.add('hidden');
      document.getElementById('form-kerekan').classList.remove('hidden');
    }
  });
});

// Rumus 1 (pakai durasi lagu)
function hitungLagu() {
  const Tt = parseFloat(document.getElementById('tt-lagu').value);
  const Tk = parseFloat(document.getElementById('tk-lagu').value);
  const Lb = parseFloat(document.getElementById('lb-lagu').value);
  const W = parseFloat(document.getElementById('w-lagu').value);

  if (isNaN(Tt) || isNaN(Tk) || isNaN(Lb) || isNaN(W)) {
    alert("Isi semua kolom!");
    return;
  }

  const panjangPerDetik = (Tt - Tk - Lb) / W;
  document.getElementById('hasil-lagu').innerText =
    `Tarikan per detik: ${panjangPerDetik.toFixed(2)} cm`;
}

// Rumus 2 (pakai lebar kerekan)
function hitungKerekan() {
  const Tt = parseFloat(document.getElementById('tt-kerekan').value);
  const Tk = parseFloat(document.getElementById('tk-kerekan').value);
  const Lb = parseFloat(document.getElementById('lb-kerekan').value);
  const Lk = parseFloat(document.getElementById('lk-kerekan').value);

  if (isNaN(Tt) || isNaN(Tk) || isNaN(Lb) || isNaN(Lk)) {
    alert("Isi semua kolom!");
    return;
  }

  const jumlahKerekan = (Tt - Tk - Lb) / Lk;
  document.getElementById('hasil-kerekan').innerText =
    `Jumlah kerekan: ${jumlahKerekan.toFixed(0)} kali`;
}
