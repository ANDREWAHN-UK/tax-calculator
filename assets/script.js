var taxBreak = 12570;
var natIns = 9500;
var basicRate = 12571;
var higherRate = 50270;
var additionalRate = 150001;

var net;

function calcNet(grossIncome) {
    (document.getElementById('grossIncome').value);
    if (grossIncome > additionalRate) {
        net = grossIncome - (((grossIncome - additionalRate) * .45) + ((grossIncome - higherRate) * .40) + ((grossIncome - basicRate) * .20) + ((grossIncome - natIns) * .12));
    } else if (grossIncome < additionalRate && grossIncome >= higherRate) {
        net = grossIncome - (((grossIncome - higherRate) * .40) + ((grossIncome - basicRate) * .20) + ((grossIncome - natIns) * .12));
    } else if (grossIncome < higherRate && grossIncome >= basicRate) {
        net = grossIncome - (((grossIncome - basicRate) * .20) + ((grossIncome - natIns) * .12));
    } else if (grossIncome < basicRate && grossIncome >= natIns) {
        net = grossIncome - (((grossIncome - natIns) * .12));
    } else if (grossIncome < natIns) {
        net = grossIncome;
    }

}

function myfunction() {
   var grossIncome= (document.getElementById('grossIncome').value);
    console.log(grossIncome);
}