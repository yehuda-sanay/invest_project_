const API="https://api.openweathermap.org/data/2.5/weather?q=TEL-AVIV&appid="
const myAPI="16bca9b85e8c9009fb3cfb9a48b7f37d"
let weather=document.getElementById("wether");
async function getWethrApi(){
    try {
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=TEL-AVIV&appid=85470bd4ed69b1bdaae5b623c875c6d7`)
        .then(Response=>Response.json()
        )
        
    } 
    catch (error) {
        
    }
}
getWethrApi()

// let weatherApi=getWethrApi()

// console.log(weatherApi);

function print(){
   getWethrApi().then((res)=>{for (const key in res) {
    const temp=Math.floor(res.main.temp).toString().slice(0,2);
    weather.innerHTML=(`${temp} °C`)
   }})
}
print()


// .then(res=>res.weather.forEach(element => { weather.innerHTML=element.description
        
// }))
// main.temp