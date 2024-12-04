// ini file js

document.getElementById('hitung-bmi').addEventListener('click', function() {
    // Mengambil nilai input
    const beratBadan = parseFloat(document.getElementById('berat-badan-input').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggi-badan-input').value);
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin-input"]:checked');
    const usia = parseInt(document.getElementById('usia-input').value);

    // Validasi input
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || !jenisKelamin || isNaN(usia)) {
        alert('Mohon Isi Semua Form Yang Kosong !');
        return;
    }

    // Konversi tinggi badan dari cm ke meter
    const tinggiBadanMeter = tinggiBadan / 100;

    // Menghitung BMI
    const bmi = beratBadan / (tinggiBadanMeter * tinggiBadanMeter);

    // Show hasil
    const resultCalculation = document.getElementById('result-calculation');
    const infoResult = document.getElementById('info-result');
    const nilaiText = document.getElementById('nilai-text');

    resultCalculation.textContent = bmi.toFixed(2);
    
    // Menentukan status berat badan berdasarkan BMI
    let status = "";
    if (bmi < 18.5) {
        status = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal (ideal)";
    } else if (bmi >= 24,9 && bmi < 30) {
        status = "Kelebihan berat badan";
    } else {
        status = "Kegemukan (Obesitas)";
    }

    infoResult.textContent = `Anda memiliki : ${status}`;

    // Show status BMI
    nilaiText.textContent = `Nilai BMI:`;

});

// Fungsi untuk reset form
resetBtn.addEventListener('click', function() {
    document.getElementById('result-calculation').textContent = '0';
    document.getElementById('info-result').textContent = 'Anda memiliki :';
});