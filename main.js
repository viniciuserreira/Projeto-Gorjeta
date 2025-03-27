let bill = 0
let tipPercentage = 0
let numberOfpeople = 0
let buttonSelected = null

function receiveBillValue(){
    Bill = document.querySelector("#bill").ValueAsNumber
}

function receiveNumberOfpeopleValue(){
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercentageValue(value){
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    let customTipInput = document.querySelector("#custom-tip")
    
    if(customTipInput.value !== ""){
        customTipInput.value = ""
    }

   tipPercentage = value / 100
    console.log(tipPercentage)

   buttonSelected = document.querySelector(`#button-${value}`)
   buttonSelected.classList.add("button-selected")
}

function receiveCustomTipPercentageValue(){
    if (buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }

    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
}