//Alex Tindall
//Module 1 Assignment 1

//IPO CHART
console.group("IPO CHART");
    console.group("Inputs")
        console.log("principal");
        console.log("interest rate");
        console.log("length of loan");
        console.log("Results Button");
    console.groupEnd()
    console.group("Process")
        console.log("bring in element values");
        console.log("convert values to variables");
        console.log("do math on variables and reassign");
        console.log("have button receive click");
        console.log("perform monthly payment equation");
    console.groupEnd()
    console.group("Output")
        console.log("return results to monthlyPayment tag");
        console.log("display result for monthlyPayment tag");
    console.groupEnd
console.groupEnd()



function paymentButton() {

    //Pulling in and storing input element values as variables
    const principalValue = document.getElementById("principal").valueAsNumber;
    const interestRateValue = document.getElementById("interest").valueAsNumber;
    const loanLengthValue = document.getElementById("length").valueAsNumber;

    //Pulling in monthly payment as an element and storing it as a variable
    const resultsLoanEle = document.getElementById("monthlyPayment");

    //Converting variables to letters used by the equations 
    const r = ((interestRateValue / 100) / 12);
    const n = (loanLengthValue * 12);
    const p = principalValue;

    /*
    Doing the math using this equation:
        M = P(  ( r(1 + r)^n )  /  ((1 + r)^n – 1)  )
    */
    const resultsLoanValue = p * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));

    //Returning calculated value back to
    resultsLoanEle.value = ("$" + resultsLoanValue);

}

