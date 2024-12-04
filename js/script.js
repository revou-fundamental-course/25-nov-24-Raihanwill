const btn = document.getElementById('hitung');

btn.addEventListener('click', function(){

    let tinggi = document.querySelector('#tinggi-badan-input').value;
    let berat = document.querySelector('#berat-badan-input').value;

    if(tinggi == '' || berat == ''){
        alert('Tolong isi kolom yang kosong');
        return;
    }

    //BMI = berat in KG / (tinggi in M * tinggi in M)

    tinggi = tinggi / 100

    let BMI = (berat / (tinggi * tinggi));

    BMI = BMI.toFixed(2);

    console.log('BMI')

    document.querySelector("#result").innerHTML= BMI;

});