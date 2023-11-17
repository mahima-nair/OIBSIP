const celsiusField=document.querySelector("#celsius");
const inputVal=document.querySelector("#input-value");
const inputTempType=document.querySelector("#input-temp-type")
const tempType=document.querySelector("#convert-temp-type");
const convertbtn=document.querySelector("#convert-btn");

//window loading reset
window.addEventListener("load",() => {
    inputVal.value="0" ;

})

convertbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    convertTemp();
    })


function convertTemp(){
    let inputValue=inputVal.value;
 
        if(inputTempType.value==="Celsius"){
            if(tempType.value==="Fahrenheit"){
                const celsiusTofareheit= (9/5)*(inputValue)+32;
                celsiusField.innerHTML=`${celsiusTofareheit.toFixed(3)} &deg; F`;
        
            }
            else if(tempType.value==="Kelvin"){
                const celsiusTokelvin=parseFloat(inputValue)+273.15;
                celsiusField.innerHTML=`${celsiusTokelvin.toFixed(3)} K`;
            }
            else if(tempType.value==="Celsius"){
                celsiusField.innerHTML=`${inputValue} &deg; C`;
            }


        }
        else if(inputTempType.value==="Fahrenheit"){
            if(tempType.value==="Fahrenheit"){
                celsiusField.innerHTML=`${inputValue} &deg; F`;
        
            }
            else if(tempType.value==="Kelvin"){
                const farTokelvin=(inputValue - 32) / 1.8 + 273.15;
                celsiusField.innerHTML=`${farTokelvin.toFixed(3)} K`;
            }
            else if(tempType.value==="Celsius"){
                const FahrenheitToCelsius= (inputValue-32)*(5/9);
                celsiusField.innerHTML=`${FahrenheitToCelsius.toFixed(3)} &deg;C`;
            }


        }
        else if(inputTempType.value==="Kelvin"){
            if(tempType.value==="Fahrenheit"){
                const kelTofar=(inputValue - 273.15) * 9/5 + 32;
                celsiusField.innerHTML=`${kelTofar.toFixed(3)} &deg; F`;
        
            }
            else if(tempType.value==="Kelvin"){
                const farTokelvin=(inputValue - 32) / 1.8 + 273.15;
                celsiusField.innerHTML=`${inputValue} K`;
            }
            else if(tempType.value==="Celsius"){
                const kelvinToCelsius= (inputValue)-273.14;
                celsiusField.innerHTML=`${kelvinToCelsius.toFixed(3)} &deg;C`;
            }


        }

   
}




















// //loading feature
// convertbtn.innerHTML="<span><i class='fa fa-spinner fa-spin'></i>Converting...</span>";
// setTimeout(()=>{
//     convertbtn.innerHTML="<span>Convert</span>";},1000)