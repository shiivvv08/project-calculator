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

  function clearResult(){
     inputEle.value = ""
 }

  function calculateResult(){
    inputEle.value = eval(inputEle.value)
  }

  function appendValue(buttonValue){
     inputEle.value += buttonValue
  }