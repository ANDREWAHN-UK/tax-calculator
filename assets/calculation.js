function calculateIncome() {

   let country = document.getElementById("country").value;

        const engTax = {
            taxOne: 12570,
            taxTwo: 50270,
            TaxThree: 150001,
            maxTaxOne: ((this.taxTwo - this.taxOne) * 0.2),
            maxTaxTwo: ((this.TaxThree - this.taxTwo) * 0.4),
        }

        const scotTax = {
            scotOne: 12570,
            scotTwo: 14667,
            scotThree: 25296,
            scotFour: 43662,
            scotFive: 150000,
            maxScotOne: ((this.scotTwo - this.scotOne) * 0.19),
            maxScotTwo: ((this.scotThree - this.scotTwo) * 0.2),
            maxScotThree: ((this.scotFour - this.scotThree) * 0.21),
            maxScotFour: ((this.scotFive - this.scotFour) * 0.41),
        }

        const wages = {           
            natInsBase: 9568,
            maxNormalNatIns: ((engTax.taxTwo - this.natInsBase) * .12), 
        }          

        const studentLoan = {
            studentLoanOne: 19895,
            studentLoanTwo: 27295,
            studentLoanFour: 25000,            
        }

let inputGross = document.getElementById("grossIncome").value;
let frequency = document.getElementById("gross-income-frequency").value; 
let gross;
let natIns;
let taxPaid;
let studentLoanPaid;
let net;
        
        getGross = () => {
            if (frequency === "week") {
                gross = (inputGross*48);
            } else if (frequency === "fortnight"){
                gross = (inputGross*24);
            } else if (frequency === "month") {
                gross = (inputGross*12)
            } else {
                gross = inputGross;
            }
        }

        
    getNatIns = () => {
        if (gross >= 50270) {
            natIns = ((gross - 50270) * .02) + (wages.maxNormalNatIns);
        } else if (gross > wages.natInsBase && gross < 50270) {
            natIns = ((gross - wages.natInsBase) * 0.12);
        } else {
            natIns = 0;
        }
    }

    chooseTax = () => {
        if (country === 'Scotland') {
            getScotTax();
        } else {
            getTax();
        }
    }

    getTax = () => {
        if (gross > engTax.TaxThree) {
            taxPaid = (((gross - engTax.TaxThree) * 0.45) + engTax.maxTaxOne + engTax.maxTaxTwo);
        } else if (gross >= engTax.taxTwo && gross < engTax.TaxThree) {
            taxPaid = (((gross - engTax.taxTwo) * 0.4) + engTax.maxTaxOne);
        } else if (gross > engTax.taxOne && gross < engTax.taxTwo) {
            taxPaid = ((gross - engTax.taxOne) * 0.2);
        } else {
            taxPaid = 0;
        }
    }


    getScotTax = () => {
        if (gross > scotTax.scotFive) {
            taxPaid = (((gross - scotTax.scotFive) * 0.46) + scotTax.maxScotOne + scotTax.maxScotTwo + scotTax.maxScotThree + scotTax.maxScotFour);
        } else if (gross >= scotTax.scotFour && gross < scotTax.scotFive) {
            taxPaid = (((gross - scotTax.scotFour) * 0.41) + scotTax.maxScotOne + scotTax.maxScotTwo + scotTax.maxScotThree);
        } else if (gross >= scotTax.scotThree && gross < scotTax.scotFour){
            taxPaid = (((gross - scotTax.scotThree) * 0.21) + scotTax.maxScotOne + scotTax.maxScotTwo);
        } else if (gross >= scotTax.scotTwo && gross < scotTax.scotThree){
            taxPaid = (((gross - scotTax.scotTwo) * 0.2) + scotTax.maxScotOne);
        } else if (gross >= scotTax.scotOne && gross < scotTax.scotTwo){
            taxPaid = (((gross - scotTax.scotOne) * 0.19));
        } else {
            taxPaid = 0;
        }
    }

    getStudentLoan = () => {
        let studentLoanChoice = document.getElementById("student-loan").value;
        if (studentLoanChoice === '0') {
            studentLoanPaid = 0;
        } else if (studentLoanChoice === '1' && gross > studentLoan.studentLoanOne) {
            studentLoanPaid = ((gross - studentLoan.studentLoanOne) * 0.09);
        } else if (studentLoanChoice === '2' && gross > studentLoan.studentLoanTwo) {
            studentLoanPaid = ((gross - studentLoan.studentLoanTwo) * 0.09);
        } else if (studentLoanChoice === '4' && gross > studentLoan.studentLoanFour) {
            studentLoanPaid = ((gross - studentLoan.studentLoanFour) * 0.09);
        } else {
            studentLoanPaid = 0;
        }
    }

    getNetPay = () => {
        net = (gross - taxPaid - natIns - studentLoanPaid);
    }

    getGross();
    getNatIns();
    chooseTax();
    getStudentLoan();
    getNetPay();
    document.getElementById('countryOfResidence').innerHTML = document.getElementById('country').value;
    document.getElementById('grossIncomeEntered').innerHTML = '£ ' + gross;
    document.getElementById('taxOwed').innerHTML = '£ ' + taxPaid.toFixed(2);
    document.getElementById('natInsOwed').innerHTML = '£ ' + natIns.toFixed(2);
    document.getElementById('netWage').innerHTML = '£ ' + net.toFixed(2);
    document.getElementById('studentLoanOwed').innerHTML = '£ ' + studentLoanPaid.toFixed(2);


}