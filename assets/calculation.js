  
 /*this function gets the gross income, calculates national insurance and tax owed, and from these 
determines the net WebGLActiveInfo, then displays all of this to the results page */

function calculateIncome() {
    // hides the modals
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    
 // selects country for tax purposes
 let country = document.getElementById("country").value;
 // non scot tax
 let taxOne = 12570;
 let taxTwo = 50270;
 let TaxThree = 150001;
 let maxTaxOne = ((taxTwo - taxOne) * 0.2);
 let maxTaxTwo = ((TaxThree - taxTwo) * 0.4);

  // scot tax
  let scotOne = taxOne;
  let scotTwo = 14667;
  let scotThree = 25296;
  let scotFour = 43662;
  let scotFive = 150000;
  let maxScotOne = ((scotTwo - scotOne) * 0.19);
  let maxScotTwo = ((scotThree - scotTwo) * 0.2);
  let maxScotThree = ((scotFour - scotThree) * 0.21);
  let maxScotFour = ((scotFive - scotFour) * 0.41);

  // variables for wages
  let gross;
  let inputGross = document.getElementById("grossIncome").value;
  let frequency = document.getElementById("gross-income-frequency").value;
  let natIns;
  let natInsBase = 9568;
  let maxNormalNatIns = ((taxTwo - natInsBase) * 0.12);
  let taxPaid;

  // student loan
  let studentLoanOne = 19895;
  let studentLoanTwo = 27295;
  let studentLoanFour = 25000;
  let studentLoanPaid;
  let net;

    // this takes the user input and turns it into an annual gross
    getGross = () => {
        if (frequency === "week") {
            gross = (inputGross * 48);
        } else if (frequency === "fortnight") {
            gross = (inputGross * 24);
        } else if (frequency === "month") {
            gross = (inputGross * 12);
        } else {
            gross = inputGross;
        }
    };

    // this determines the users' national insurance based on their wages
    getNatIns = () => {
        if (gross >= 50270) {
            natIns = ((gross - 50270) * 0.02) + (maxNormalNatIns);
        } else if (gross > natInsBase && gross < 50270) {
            natIns = ((gross - natInsBase) * 0.12);
        } else {
            natIns = 0;
        };
    }

    // this determines if the user pays scottish tax or not
    chooseTax = () => {
        if (country === 'Scotland') {
            getScotTax();
        } else {
            getTax();
        }
    };

    // this works out non scot tax
    getTax = () => {
        if (gross > TaxThree) {
            taxPaid = (((gross - TaxThree) * 0.45) + maxTaxOne + maxTaxTwo);
        } else if (gross >= taxTwo && gross < TaxThree) {
            taxPaid = (((gross - taxTwo) * 0.4) + maxTaxOne);
        } else if (gross > taxOne && gross < taxTwo) {
            taxPaid = ((gross - taxOne) * 0.2);
        } else {
            taxPaid = 0;
        }
    };

    // this works out scottish tax
    getScotTax = () => {
        if (gross > scotFive) {
            taxPaid = (((gross - scotFive) * 0.46) + maxScotOne + maxScotTwo + maxScotThree + maxScotFour);
        } else if (gross >= scotFour && gross < scotFive) {
            taxPaid = (((gross - scotFour) * 0.41) + maxScotOne + maxScotTwo + maxScotThree);
        } else if (gross >= scotThree && gross < scotFour) {
            taxPaid = (((gross - scotThree) * 0.21) + maxScotOne + maxScotTwo);
        } else if (gross >= scotTwo && gross < scotThree) {
            taxPaid = (((gross - scotTwo) * 0.2) + maxScotOne);
        } else if (gross >= scotOne && gross < scotTwo) {
            taxPaid = (((gross - scotOne) * 0.19));
        } else {
            taxPaid = 0;
        }
    };

    // this works out how much student loan the user is to pay
    getStudentLoan = () => {
        let studentLoanChoice = document.getElementById("student-loan").value;
        if (studentLoanChoice === '0') {
            studentLoanPaid = 0;
        } else if (studentLoanChoice === '1' && gross > studentLoanOne) {
            studentLoanPaid = ((gross - studentLoanOne) * 0.09);
        } else if (studentLoanChoice === '2' && gross > studentLoanTwo) {
            studentLoanPaid = ((gross - studentLoanTwo) * 0.09);
        } else if (studentLoanChoice === '4' && gross > studentLoanFour) {
            studentLoanPaid = ((gross - studentLoanFour) * 0.09);
        } else {
            studentLoanPaid = 0;
        }
    };

    // this takes the previous inputs and determines the net wage
    getNetPay = () => {
        net = (gross - taxPaid - natIns - studentLoanPaid);
    }

    // these call the relevant functions, ending with determining the net wages
    getGross();
    getNatIns();
    chooseTax();
    getStudentLoan();
    getNetPay();

    // the following post the results of the calculations to the html results page
    document.getElementById('countryOfResidence').innerHTML = document.getElementById('country').value;
    document.getElementById('grossIncomeEntered').innerHTML = '£ ' + gross;
    document.getElementById('taxOwed').innerHTML = '£ ' + taxPaid.toFixed(2);
    document.getElementById('natInsOwed').innerHTML = '£ ' + natIns.toFixed(2);
    document.getElementById('netWage').innerHTML = '£ ' + net.toFixed(2);
    document.getElementById('studentLoanOwed').innerHTML = '£ ' + studentLoanPaid.toFixed(2);
}