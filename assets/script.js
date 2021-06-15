
    
    function myFunction(num) {
    var gross = document.getElementById("grossIncome").value;
    var taxBreak = 12570;
    var natIns = 9500;
    var natInsHigher = 50270;
    var basicRate = 12571;
    var higherRate = 50270;
    var additionalRate = 150001;
    var maxNormalTax = 7539.8; //because tax works in bands, this is the highest level at 20% tax possible.
    var maxNormalInsurance = 4892.4; //same as previous, this is the max normal rate national insurance
    var net;
    var taxPaid;
    var natInsPaid;

    if (gross >= additionalRate){
        natInsPaid =((gross - natInsHigher) * .02) + maxNormalInsurance;
        taxPaid = ((gross -additionalRate) *.45) + ((gross - higherRate) * .40) + maxNormalTax;
        net = (gross -taxPaid -natInsPaid);
        console.log (natInsPaid, taxPaid, net, gross);
    }
    else if(gross >= higherRate && gross < additionalRate) {        
        natInsPaid = ((gross - natInsHigher) * .02) + maxNormalInsurance;
        taxPaid = ((gross - higherRate) * .40) + maxNormalTax;
        net = (gross -taxPaid -natInsPaid);
        console.log (natInsPaid, taxPaid, net, gross);
        
    } else if (gross >= basicRate && gross < higherRate) {
        natInsPaid = ((gross - natIns) * .12);
        taxPaid = ((gross - taxBreak) * .2);
        net = (gross - taxPaid - natInsPaid);
        console.log (natInsPaid, taxPaid, net, gross);

    } else if (gross >= natIns) {
        natInsPaid = ((gross - natIns) * .12);
        taxPaid=0;
        net = (gross - natInsPaid);
        console.log (natInsPaid, taxPaid, net, gross);

    } else if (gross < natIns) {
        net = gross;
        natInsPaid = 0;
        taxPaid= 0;
        console.log (natInsPaid, taxPaid, net, gross);
    }
    document.getElementById('grossIncomeEntered').innerHTML = '£ ' + gross;
    document.getElementById('taxOwed').innerHTML = '£ ' + taxPaid;
    document.getElementById('natInsOwed').innerHTML = '£ ' + natInsPaid;
    document.getElementById('netWage').innerHTML = '£ ' + net;
}

// click functionality for section 3
document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
    })