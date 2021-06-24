const startPageTwo = () =>{
    document.getElementById("section-two").style.display = "flex";
    document.getElementById("section-one").style.display = "none";
    
}

const startPageThree = () =>{
    document.getElementById("section-three").style.display = "flex";
}

const calculateIncome = () => {
    document.getElementById("pageThreeButton").style.display = "block";

    let gross = document.getElementById("grossIncome").value;
    let natIns;
    let natInsBase = 9500;
    let maxNormalNatIns = 4892.4; //this is 50270 (after which national insurance drops to 2%) -9500, which is  40,770, then multiplied by 12%
    let taxPaid;
    let taxOne = 12570;
    let taxTwo = 50270;
    let TaxThree = 150001;
    let maxTaxOne = ((taxTwo - taxOne) * 0.2);
    let maxTaxtwo = ((TaxThree - taxTwo) * 0.4);
    let studentLoanOne = 19895;
    let studentLoanTwo = 27295;
    let studentLoanFour = 25000;
    let studentLoanPaid;
    let net;

    getNatIns = () => {
        if (gross > 50270) {
            natIns = ((gross - 50270) * .02) + (maxNormalNatIns);
        } else if (gross >= natInsBase && gross < 50270) {
            natIns = ((gross - natInsBase) * 0.09);
        } else {
            natIns = 0;
        }
    }

    getTax = () => {
        if (gross > TaxThree) {
            taxPaid = (((gross - TaxThree) * 0.45) + maxTaxOne + maxTaxtwo);
        } else if (gross > taxTwo && gross < TaxThree) {
            taxPaid = (((gross - taxTwo) * 0.4) + maxTaxOne);
        } else if (gross > taxOne && gross < taxTwo) {
            taxPaid = ((gross - taxOne) * 0.2);
        } else {
            taxPaid = 0;
        }
    }

    getStudentLoan = () => {
        let studentLoanChoice = document.getElementById("student-loan").value;
        if (studentLoanChoice=== '0'){
            studentLoanPaid = 0;
        } else if (studentLoanChoice ==='1' && gross > studentLoanOne){
            studentLoanPaid =((gross - studentLoanOne)*0.09);
        } else if (studentLoanChoice ==='2' && gross > studentLoanTwo){
            studentLoanPaid =((gross - studentLoanTwo)*0.09);
        } else if (studentLoanChoice ==='4' && gross > studentLoanFour){
            studentLoanPaid =((gross - studentLoanFour)*0.09);
        } else {studentLoanPaid = 0;}
    }

    getNetPay = () => {
        net = (gross - taxPaid - natIns - studentLoanPaid);
    }

    getNatIns();
    getTax();
    getStudentLoan();
    getNetPay();
    document.getElementById('grossIncomeEntered').innerHTML = '£ ' + gross;
    document.getElementById('taxOwed').innerHTML = '£ ' + taxPaid;
    document.getElementById('natInsOwed').innerHTML = '£ ' + natIns;
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}