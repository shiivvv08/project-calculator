const buttonsEle = document.querySelectorAll("button")
//  console.log(buttonsEle);

 const inputEle = document.getElementById("result")

 for( let i = 0; i < buttonsEle.length ; i++ ){
        buttonsEle[i].addEventListener("click" , ()=>{
            //console.log(buttonsEle[i].textContent);
             const buttonValue = buttonsEle[i].textContent
             if(buttonValue === "C"){
                 clearResult()
             }
             else if(buttonValue === "="){
                 calculateResult()
             }
             else{
                 appendValue(buttonValue)
             }
        })
 }

 function calculate() {
    let exp = document.getElementById("display").value;

    // Example: 5^2
    let parts = exp.split("^");

    if (parts.length === 2) {
        let base = Number(parts[0]);
        let power = Number(parts[1]);
        let result = Math.pow(base, power);
        document.getElementById("display").value = result;
    } else {
        document.getElementById("display").value = eval(exp);
    }
}


  function clearResult(){
     inputEle.value = ""
 }

  function calculateResult(){
    inputEle.value = eval(inputEle.value)
  }

  function appendValue(buttonValue){
     inputEle.value += buttonValue
  }
