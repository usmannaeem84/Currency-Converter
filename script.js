const dropDown = document.querySelectorAll(".convert select")
const result = document.querySelector(".result")
const ExchangeBtn = document.querySelector(".restart")
let Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"



for (const select of dropDown) {
    for (let code in countryList) {
        const options = document.createElement("option")
        options.value = code
        options.innerHTML = code

        select.append(options)

if (select.name==="from" && code==="USD") {
    options.selected="selected"
}
if (select.name==="to" && code==="PKR") {
    options.selected="selected"
}

    }
    

    select.addEventListener("change", (evt) => {
        ChangingFlag(evt.target)
    })
}


function ChangingFlag(element) {


    const Elementvalue = element.value
    let Imgsrc = element.parentElement.querySelector("img")

    Imgsrc.src = `https://flagsapi.com/${countryList[Elementvalue]}/flat/64.png`
    NewSrc = Imgsrc
  
}

async function Convert(e){
    
    const ToValue = document.querySelector(".To select")
    const FromValue = document.querySelector(".From select")

const URL =  `${Base_URL}/${FromValue.value.toLowerCase()}/${ToValue.value.toLowerCase()}.json`

let response = await fetch(URL)
let data = await response.json()
rate = data[ToValue.value.toLowerCase()] 
console.log(rate);

let Inputvalue  =  document.querySelector("input").value

result.style.display="block"
if(Inputvalue<=1  || Inputvalue===""){
    result.style.color="red"
    result.innerHTML="Enter a value greater than 1 "
}
else if(isNaN(Inputvalue)){
    result.style.color="red"
    result.innerHTML="Enter a value in Numbers "

}
else{
    result.style.color="black"
    result.innerHTML=`<span>${Inputvalue}</span> ${FromValue.value} is equal to <span>${(Inputvalue*rate).toFixed(2)}</span> ${ToValue.value}`
}


}


ExchangeBtn.addEventListener("click",Convert)