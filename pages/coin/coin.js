let coindiv= document.getElementById("mycoin")
// let chartdiv=document.getElementById("chart_div")
async function getApi(){
    try {return await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res=>res.json()) 
    } catch (error) {
        
    }
}
getApi()

async function printToConsole(){
   getApi()
   .then(res=>console.log(res))    
}
printToConsole()


let result = await getApi();
console.log("1" ,result)
async function printCard() {
    result.forEach((invest) =>{coindiv.innerHTML += `
    
    <div class="card col-lg-3 col-md-5 col-sm-12 my-2 m-1 style="width: 18rem;">
    <img class="card-img-top" style="height:200px; width:150px;"  src="${invest.image}">
    <div class=" card-body">
    <h5 class="card-title">name: ${invest.name}</h5>
    <p class="card-text">price: ${invest.current_price}$</p>
    <p class="card-text">max price: ${invest.ath}$</p>
    <a href="https://il.investing.com/crypto/${invest.id}" target="blank" class="btn btn-primary" style="width: 10vw">buy</a>
  </div>
</div>
</div>

        `;
  })
}
printCard()


function printSearchCoin(){
  coindiv.innerHTML=""
  result.forEach((invest) =>{
    if(invest.name==serch.value){
    coindiv.innerHTML += `
    
    <div class="container card col-lg-3 d-flex justify-content-center my-2 m-1 style="width: 18rem;">
    <img class="card-img-top" style="height:200px; width:150px;"  src="${invest.image}">
    <div class=" card-body">
    <h5 class="card-title">name: ${invest.name}</h5>
    <p class="card-text">price: ${invest.current_price}$</p>
    <p class="card-text">max price: ${invest.ath}$</p>
    <a href="https://il.investing.com/crypto/${invest.id}" target="blank" class="btn btn-primary" style="width: 10vw">buy</a>
  </div>
</div>
</div>

        `;
  }})
}
document.getElementById("buttonSer").addEventListener("click", printSearchCoin);





