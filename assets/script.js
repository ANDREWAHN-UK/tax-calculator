

var taxBreak = 12570;
var natIns = 9500;
var basicRate = 12571;
var higherRate = 50270;
var additionalRate = 150001;

var net;

function calcNet(amount){
    (document.getElementById('grossIncome'));
    if (amount > additionalRate){
        net = grossIncome -(((amount-additionalRate)*.45) + ((amount-higherRate)*.40) + ((amount-basicRate)*.20) + ((amount-natIns)*.12));
    } else if (amount < additionalRate &&  amount >= higherRate){
        net = grossIncome -(((amount-higherRate)*.40) + ((amount-basicRate)*.20) + ((amount-natIns)*.12));
    } else if (amount < higherRate && amount >= basicRate){
        net = grossIncome -( ((amount-basicRate)*.20) + ((amount-natIns)*.12));
    } else if (amount < basicRate && amount >= natIns){
        net = grossIncome -(((amount-natIns)*.12));
    } else if (amount < natIns){
        net = grossIncome;
    }

}