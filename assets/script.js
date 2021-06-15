function calcNet(num) {
    let gross = document.getElementById("grossIncome").value;
    let taxBreak = 12570;
    let natIns = 9500;
    let natInsHigher = 50270;
    let basicRate = 12571;
    let higherRate = 50270;
    let additionalRate = 150001;
    let maxNormalTax = 7539.8; //because tax works in bands, this is the highest level at 20% tax possible.
    let maxNormalInsurance = 4892.4; //same as previous, this is the max normal rate national insurance

    let studentLoanChoice = document.getElementById("student-loan").value;
    let studentLoanOne = 19895;
    let studentLoanTwo = 27295;
    let studentLoanFour = 25000;
    let studentLoanPaid;

    let net;
    let taxPaid;
    let natInsPaid;


    switch (studentLoanChoice) {
        case '0':
            studentLoanPaid =  0;
            console.log('choice 0', studentLoanPaid);
            break
        case '1':
            studentLoanPaid = ((gross - studentLoanOne)*0.09);
            console.log('choice 1', studentLoanPaid);
            break
        case '2':
            studentLoanPaid =  ((gross - studentLoanTwo)*0.09);
            console.log('choice 2', studentLoanPaid);
            break
        case '4':
            studentLoanPaid = ((gross - studentLoanFour)*0.09)
            console.log('choice 4', studentLoanPaid);
            break
    }
 


    if (gross >= additionalRate) {
        natInsPaid = ((gross - natInsHigher) * .02) + maxNormalInsurance;
        taxPaid = ((gross - additionalRate) * .45) + ((gross - higherRate) * .40) + maxNormalTax;
        net = (gross - taxPaid - natInsPaid -studentLoanPaid);

    } else if (gross >= higherRate && gross < additionalRate) {
        natInsPaid = ((gross - natInsHigher) * .02) + maxNormalInsurance;
        taxPaid = ((gross - higherRate) * .40) + maxNormalTax;
        net = (gross - taxPaid - natInsPaid -studentLoanPaid);


    } else if (gross >= basicRate && gross < higherRate && gross >=studentLoanTwo) {
        natInsPaid = ((gross - natIns) * .12);
        taxPaid = ((gross - taxBreak) * .2);
        net = (gross - taxPaid - natInsPaid - studentLoanPaid);

    } else if (gross >= basicRate && gross < higherRate ) {
        natInsPaid = ((gross - natIns) * .12);
        taxPaid = ((gross - taxBreak) * .2);
        net = (gross - taxPaid - natInsPaid - studentLoanPaid);


    } else if (gross >= natIns) {
        natInsPaid = ((gross - natIns) * .12);
        taxPaid = 0;
        studentLoanPaid =0;
        net = (gross - natInsPaid -studentLoanPaid );


    } else if (gross < natIns) {
        net = gross;
        natInsPaid = 0;
        taxPaid = 0;
    }

    document.getElementById('grossIncomeEntered').innerHTML = '£ ' + gross;
    document.getElementById('taxOwed').innerHTML = '£ ' + taxPaid;
    document.getElementById('natInsOwed').innerHTML = '£ ' + natInsPaid;
    document.getElementById('netWage').innerHTML = '£ ' + net;
    document.getElementById('studentLoanOwed').innerHTML = '£ ' + studentLoanPaid;


}

// click functionality for section 3
document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})