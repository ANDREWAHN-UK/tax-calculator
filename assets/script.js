
const startPageOne = () => {
    document.getElementById("section-one").style.display = "flex";
    document.getElementById("section-two").style.display = "none";
    document.getElementById("section-three").style.display = "none";
}

const startPageTwo = () => {
    document.getElementById("section-two").style.display = "flex";
    document.getElementById("section-one").style.display = "none";
    document.getElementById("section-three").style.display = "none";
}

const startPageThree = () => {
    document.getElementById("section-three").style.display = "flex";
    document.getElementById("section-one").style.display = "none";
    document.getElementById("section-two").style.display = "none";
}

const calculateIncome = () => {
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
    let maxScotTwo = ((scotThree -scotTwo) * 0.2);
    let maxScotThree = ((scotFour - scotThree) * 0.21);
    let maxScotFour = ((scotFive - scotFour) * 0.41);

    // variables for wages
    let gross;
    let inputGross = document.getElementById("grossIncome").value;
    let frequency = document.getElementById("gross-income-frequency").value;   
    let natIns;
    let natInsBase = 9568;
    let maxNormalNatIns = ((taxTwo - natInsBase)*.12);
    let taxPaid;
    // student loan
    let studentLoanOne = 19895;
    let studentLoanTwo = 27295;
    let studentLoanFour = 25000;
    let studentLoanPaid;
    let net;

    getGross = () => {
        if (frequency === "week") {
            gross = (inputGross*48);
        } else if (frequency === "fortnight"){
            gross = (inputGross*24);
        } else if (frequency === "month") {
            gross = (inputGross *12)
        } else {
            gross = inputGross ;
        }

    }
    getNatIns = () => {
        if (gross >= 50270) {
            natIns = ((gross - 50270) * .02) + (maxNormalNatIns);
        } else if (gross > natInsBase && gross < 50270) {
            natIns = ((gross - natInsBase) * 0.12);
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
        if (gross > TaxThree) {
            taxPaid = (((gross - TaxThree) * 0.45) + maxTaxOne + maxTaxTwo);
        } else if (gross >= taxTwo && gross < TaxThree) {
            taxPaid = (((gross - taxTwo) * 0.4) + maxTaxOne);
        } else if (gross > taxOne && gross < taxTwo) {
            taxPaid = ((gross - taxOne) * 0.2);
        } else {
            taxPaid = 0;
        }
    }


    getScotTax = () => {
        if (gross > scotFive) {
            taxPaid = (((gross - scotFive) * 0.46) + maxScotOne + maxScotTwo + maxScotThree + maxScotFour);
        } else if (gross >= scotFour && gross < scotFive) {
            taxPaid = (((gross - scotFour) * 0.41) + maxScotOne + maxScotTwo + maxScotThree);
        } else if (gross >= scotThree && gross < scotFour){
            taxPaid = (((gross - scotThree) * 0.21) + maxScotOne + maxScotTwo);
        } else if (gross >= scotTwo && gross < scotThree){
            taxPaid = (((gross - scotTwo) * 0.2) + maxScotOne);
        } else if (gross >= scotOne && gross < scotTwo){
            taxPaid = (((gross - scotOne) * 0.19));
        } else {
            taxPaid = 0;
        }
    }


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



// click functionality for section 3
document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})



// Get the modals
let modal1 = document.getElementById("ModalOne");
let modal2 = document.getElementById("ModalTwo");
let modal3 = document.getElementById("ModalThree");

// Get the buttons that open the modals sequentially
let modalTwoPrevButton = document.getElementById("modalTwoPrevButton");
let modal1button = document.getElementById("modalOneButton");
let modal2button = document.getElementById("modalTwoButton");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];
let span3 = document.getElementsByClassName("close")[2];

// this makes so that when the website loads the modal displays, but it won't be visible until page 2 is activated by the button on page1
window.addEventListener('load', (event) => {
    modal1.style.display = "block";
});
// When the user clicks on the buttons, open the modals in sequence

const startModalOne = () => {
    modal1.style.display = "block";
}

const startModalTwo = () => {
    modal2.style.display = "block";
}

const closeModalTwo = () => {
    modal2.style.display = "none";
}

const startModalThree = () => {
    modal3.style.display = "block";
}

const closeModalThree = () => {
    modal3.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}
span2.onclick = function () {
    modal1.style.display = "none";
    modal2.style.display = "none";
}
span3.onclick = function () {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal1.style.display = "none";
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    }
}

