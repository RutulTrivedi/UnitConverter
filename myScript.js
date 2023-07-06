var select = document.querySelectorAll('.currency'),
currencyInput = document.getElementById('currencyInput'),
currencyOutput = document.getElementById('currencyOutput');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    //alert(`10 GBP = ${data.rates.USD} USD`);
    for(i = 0;i < entries.length;i++){
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });

  function converter(){
    var inputcurr = currencyInput.value;
    if(select[0].value != select[1].value){
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${inputcurr}&from=${select[0].value}&to=${select[1].value}`)
        .then((val) => val.json())
        .then((val) => {
            currencyOutput.value = Object.values(val.rates)[0];
        });
    }
    else{
        alert(`Please choose different currencies.`);
    }
  }

function onlyNumberWithDecimal(evt) {
    try {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;

        return true;
    }
    catch (err) {
        alert(err.Description);
    }
}

function onlyNumberWithDecimalForTemp(evt) {
    try {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 45 && charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;

        return true;
    }
    catch (err) {
        alert(err.Description);
    }
}

function celConverter(num){
    var temp = parseFloat(num);
    document.getElementById("tempF").value = (((temp*9)/5)+32).toFixed(2);
    document.getElementById("tempK").value = (Number(temp) + 273.15).toFixed(2);
}

function fahrConverter(num){
    var temp = parseFloat(num);
    document.getElementById("tempC").value = (((temp-32)*5)/9).toFixed(2);
    document.getElementById("tempK").value = (((Number(temp)-32)*5)/9 + 273.15).toFixed(2);
}

function kelConverter(num){
    var temp = parseFloat(num);
    document.getElementById("tempC").value = (temp - 273.15.toFixed(2));
    document.getElementById("tempF").value = ((((Number(temp)-273.15)*9)/5)+32).toFixed(2);
}

function kmConverter(num){
    var temp = parseFloat(num);
    document.getElementById("lenM").value = (temp * 1000).toFixed(4);
    document.getElementById("lenCm").value = (temp * 100000).toFixed(4);
    document.getElementById("lenMile").value = (temp * 0.621371).toFixed(4);
    document.getElementById("lenYard").value = (temp * 1093.61).toFixed(4);
    document.getElementById("lenInch").value = (temp * 39370.1).toFixed(4);
    document.getElementById("lenFeet").value = (temp * 3280.84).toFixed(4);
}

function mConverter(num){
    var temp = parseFloat(num);
    document.getElementById("lenKm").value = (temp / 1000).toFixed(4);
    document.getElementById("lenCm").value = (temp * 100).toFixed(4);
    document.getElementById("lenMile").value = (temp * 0.000621371).toFixed(4);
    document.getElementById("lenYard").value = (temp * 1.09361).toFixed(4);
    document.getElementById("lenInch").value = (temp * 39.3701).toFixed(4);
    document.getElementById("lenFeet").value = (temp * 3.28084).toFixed(4);
}

function cmConverter(num){
    var temp = parseFloat(num);
    document.getElementById("lenKm").value = (temp / 100000).toFixed(4);
    document.getElementById("lenM").value = (temp / 100).toFixed(4);
    document.getElementById("lenMile").value = (temp * 0.00000621371).toFixed(4);
    document.getElementById("lenYard").value = (temp * 0.0109361).toFixed(4);
    document.getElementById("lenInch").value = (temp * 0.393701).toFixed(4);
    document.getElementById("lenFeet").value = (temp * 0.0328084).toFixed(4);
}

function mileConverter(num){
    var temp = parseFloat(num);
    document.getElementById("lenKm").value = (temp * 1.60934).toFixed(4);
    document.getElementById("lenM").value = (temp * 1609.34).toFixed(4);
    document.getElementById("lenCm").value = (temp * 160934).toFixed(4);
    document.getElementById("lenYard").value = (temp * 1760).toFixed(4);
    document.getElementById("lenInch").value = (temp * 63360).toFixed(4);
    document.getElementById("lenFeet").value = (temp * 5280).toFixed(4);
}

function yardConverter(num){
    var temp = parseFloat(num);
    document.getElementById("lenKm").value = (temp * 0.0009144).toFixed(4);
    document.getElementById("lenM").value = (temp * 0.9144).toFixed(4);
    document.getElementById("lenCm").value = (temp * 91.44).toFixed(4);
    document.getElementById("lenMile").value = (temp * 0.000568182).toFixed(4);
    document.getElementById("lenInch").value = (temp * 36).toFixed(4);
    document.getElementById("lenFeet").value = (temp * 3).toFixed(4);
}

function inchConverter(num){
    var temp = parseFloat(num);
    document.getElementById("lenKm").value = (temp * 0.0000254).toFixed(4);
    document.getElementById("lenM").value = (temp * 0.0254).toFixed(4);
    document.getElementById("lenCm").value = (temp * 2.54).toFixed(4);
    document.getElementById("lenMile").value = (temp * 0.000015783).toFixed(4);
    document.getElementById("lenYard").value = (temp * 0.02777808).toFixed(4);
    document.getElementById("lenFeet").value = (temp * 0.08333424).toFixed(4);
}

function feetConverter(num){
    var temp = parseFloat(num);
    document.getElementById("lenKm").value = (temp * 0.0003048).toFixed(4);
    document.getElementById("lenM").value = (temp * 0.3048).toFixed(4);
    document.getElementById("lenCm").value = (temp * 30.48).toFixed(4);
    document.getElementById("lenMile").value = (temp * 0.000189394).toFixed(4);
    document.getElementById("lenInch").value = (temp * 12.00000384).toFixed(4);
    document.getElementById("lenYard").value = (temp * 0.333333334).toFixed(4);
}

function kgConverter(num){
    var temp = parseFloat(num);
    document.getElementById("weiGm").value = (temp * 1000).toFixed(4);
    document.getElementById("weiPound").value = (temp * 2.20462).toFixed(4);
    document.getElementById("weiOunce").value = (temp * 35.274).toFixed(4);
}

function gmConverter(num){
    var temp = parseFloat(num);
    document.getElementById("weiKg").value = (temp * 0.001).toFixed(4);
    document.getElementById("weiPound").value = (temp * 0.00220462).toFixed(4);
    document.getElementById("weiOunce").value = (temp * 0.03527392).toFixed(4);
}

function poundConverter(num){
    var temp = parseFloat(num);
    document.getElementById("weiKg").value = (temp * 0.453592).toFixed(4);
    document.getElementById("weiGm").value = (temp * 453.5920000001679).toFixed(4);
    document.getElementById("weiOunce").value = (temp * 15.999986948640000151).toFixed(4);
}

function ounceConverter(num){
    var temp = parseFloat(num);
    document.getElementById("weiKg").value = (temp * 0.0283495).toFixed(4);
    document.getElementById("weiGm").value = (temp * 28.3495).toFixed(4);
    document.getElementById("weiPound").value = (temp * 0.0625).toFixed(4);
}

function kmphConverter(num){
    var temp = parseFloat(num);
    document.getElementById("speedMps").value = ((temp*5)/18).toFixed(2);
}

function mpsConverter(num){
    var temp = parseFloat(num);
    document.getElementById("speedKmph").value = ((temp*18)/5).toFixed(2);
}

function sqkmConverter(num){
    var temp = parseFloat(num);
    document.getElementById("areaSqm").value = (temp * 1000000).toFixed(4);
    document.getElementById("areaSqmiles").value = (temp * 0.386102).toFixed(4);
    document.getElementById("areaSqyds").value = (temp * 1195989.555).toFixed(4);
    document.getElementById("areaSqft").value = (temp * 10763905.996).toFixed(4);
}

function sqmConverter(num){
    var temp = parseFloat(num);
    document.getElementById("areaSqkm").value = (temp / 1000000).toFixed(4);
    document.getElementById("areaSqmiles").value = (temp * 0.000000386102).toFixed(4);
    document.getElementById("areaSqyds").value = (temp * 1.19599).toFixed(4);
    document.getElementById("areaSqft").value = (temp * 10.76391).toFixed(4);
}

function sqmileConverter(num){
    var temp = parseFloat(num);
    document.getElementById("areaSqkm").value = (temp * 2.58999).toFixed(4);
    document.getElementById("areaSqm").value = (temp * 2589990.001027).toFixed(4);
    document.getElementById("areaSqyds").value = (temp * 3097602.261247).toFixed(4);
    document.getElementById("areaSqft").value = (temp * 27878420.35122).toFixed(4);
}

function sqydConverter(num){
    var temp = parseFloat(num);
    document.getElementById("areaSqm").value = (temp * 0.83613).toFixed(4);
    document.getElementById("areaSqmiles").value = (temp * 0.000000322831598657).toFixed(4);
    document.getElementById("areaSqkm").value = (temp * 0.000000083613).toFixed(4);
    document.getElementById("areaSqft").value = (temp * 9).toFixed(4);
}

function sqftConverter(num){
    var temp = parseFloat(num);
    document.getElementById("areaSqm").value = (temp * 0.092902947097).toFixed(4);
    document.getElementById("areaSqmiles").value = (temp * 0.00000003587002841).toFixed(4);
    document.getElementById("areaSqyds").value = (temp * 0.111111).toFixed(4);
    document.getElementById("areaSqkm").value = (temp * 0.00000009290294709700000402).toFixed(4);
}