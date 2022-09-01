let realestate_div=document.getElementById("container")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30433c4425msh2304ddbdff6f1cbp103fc8jsndbae350d41e0',
		'X-RapidAPI-Host': 'real-estate12.p.rapidapi.com'
	}
};
async function getRealEstateApi(){
try {return await fetch('https://real-estate12.p.rapidapi.com/listings/sale?state=CA&city=Los%20Angeles&page=1&sort=relevant&type=single-family%2Cmulti-family', options)
.then(response => response.json())

    
} catch (error) {
    
} 
finally{}

}
getRealEstateApi()

async function printToConsole(){
    getRealEstateApi()
    .then(response => console.log(response))
}
printToConsole()



async function printRealeStateCards(){
    let result=await getRealEstateApi()
    result.properties.forEach((element)=>{realestate_div.innerHTML+=`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${element.primary_photo.href}">
    <div class="card-body">
      <h5 class="card-title">status:${element.status}</h5>
      <p class="card-text">state :${element.location.address.state}</p>
      <p class="card-text">city :${element.location.address.city}</p>
      <p class="card-text">rooms :${element.description.beds}</p>
      <p class="card-text">price :${element.list_price}$</p>
      <a href="https://www.realtor.com/realestateandhomes-detail/${element.permalink}" class="btn btn-primary">buy</a>
      
      
    </div>
  </div>`})
}
printRealeStateCards()




const picArray=["https://ap.rdcpix.com/d8a64e046577ebe669ce0f07c6ae5c3bl-m1997180764od-w480_h360_x2.webp",
"https://ap.rdcpix.com/85da0d4cdb823a0a75e4ae0da98c5ed5l-m1394173703od-w480_h360_x2.webp",
"https://ap.rdcpix.com/f192e45169028162cf3a2dcb3d4f1db9l-m2916774325od-w480_h360_x2.webp",
"https://ap.rdcpix.com/3fd20e2044bf6eefeb099e3fe169e85al-m3512870237od-w480_h360_x2.webp"
,"https://ap.rdcpix.com/914f58f71baeb83df0a362421d6822a8l-m2677852540od-w480_h360_x2.webp",
"https://ap.rdcpix.com/064bf4e88f1739df81d17c03c4508a6el-m4293962337od-w480_h360_x2.webp",
"https://ap.rdcpix.com/c282c28434ed32f049d0c04a42694157l-m3704647509od-w480_h360_x2.webp",
"https://ap.rdcpix.com/4c4d5ba17c3c8c0857455539297675e4l-m2756762860od-w480_h360_x2.webp",
"https://ap.rdcpix.com/7c253f02a3a3448c8020f34a5e0055b8l-m1244603771od-w480_h360_x2.webp",
"https://ap.rdcpix.com/dfb8aa6108fe98fd39d9d8864e0f7563l-m3397201394od-w480_h360_x2.webp",
"https://ap.rdcpix.com/6d3c9bff02655f85c887600854877fd6l-m707077243od-w480_h360_x2.webp",
"https://ap.rdcpix.com/6be5153e072baff3fed9ec5e42df47e3l-m1518862292od-w480_h360_x2.webp"];
const priceArray=["999,999","18,995,000","11,995,000","1,699,000","19,950,000","1,095,000","1,170,000","3,299,000","1,480,000","620,000","1,595,000","899,888"];
const stateArray=["California","California","California","California","California","California","California","California","California","California","California","California"];
const cityArray=["Los Angeles","Los Angeles","Los Angeles","Los Angeles","Los Angeles","Clio","Westminster","Laguna Niguel","El Monte","Rocklin","Berkeley","Rancho Cucamonga"];
const addressArray=["19824 Blythe St","10480 W Sunset Blvd","417 N Kenter Ave","1474 W Avenue 43","22 Oakmont Dr","78 Bluff Vw","9871 Cheshire Ave","1 Morning Wood Dr","3112 Adelia Ave","2311 Stefanie Ct","1843 Sonoma Ave","7227 Gainsborough Ct"];
const bedArray=["4","8","6","5","8","4","4","3","5","3","3","4"]
const sqftArray=["5,214","13,000","7,420","5,006","12,800","3,675","2,766","2,725","4,058","1,523","1,804","2,516"]
const linkArray=["https://www.realtor.com/realestateandhomes-detail/19824-Blythe-St_Winnetka_CA_91306_M12296-12047?property_id=1229612047&from=ab_mixed_view_card",
"https://www.realtor.com/realestateandhomes-detail/10480-W-Sunset-Blvd_Los-Angeles_CA_90077_M13061-12026?property_id=1306112026&from=ab_mixed_view_card",
"https://www.realtor.com/realestateandhomes-detail/417-N-Kenter-Ave_Los-Angeles_CA_90049_M26536-85773?property_id=2653685773&from=ab_mixed_view_card",
"https://www.realtor.com/realestateandhomes-detail/1474-W-Avenue-43_Los-Angeles_CA_90065_M13512-10114?property_id=1351210114&from=ab_mixed_view_card",
"https://www.realtor.com/realestateandhomes-detail/22-Oakmont-Dr_Los-Angeles_CA_90049_M11084-79361?property_id=1108479361&from=ab_mixed_view_card",
"https://www.realtor.com/realestateandhomes-detail/78-Bluff-Vw_Clio_CA_96106_M97231-70397?ex=2946532849",
"https://www.realtor.com/realestateandhomes-detail/9871-Cheshire-Ave_Westminster_CA_92683_M21119-78403?ex=2946529581",
"https://www.realtor.com/realestateandhomes-detail/1-Morning-Wood-Dr_Laguna-Niguel_CA_92677_M21131-72136?ex=2946529587",
"https://www.realtor.com/realestateandhomes-detail/3112-Adelia-Ave_El-Monte_CA_91733_M24556-26031?ex=2946529584"
,"https://www.realtor.com/realestateandhomes-detail/2311-Stefanie-Ct_Rocklin_CA_95765_M10441-66751?ex=2946529210",
"https://www.realtor.com/realestateandhomes-detail/1843-Sonoma-Ave_Berkeley_CA_94707_M11796-35086?ex=2946528888",
"https://www.realtor.com/realestateandhomes-detail/7227-Gainsborough-Ct_Rancho-Cucamonga_CA_91739_M11336-21124?ex=2946532062"];

function print(){
  for(let i=0; i<picArray.length;i++){
    realestate_div.innerHTML+=`<div class="card col-lg-3" style="width: 18rem;">
    <img class="card-img-top" src="${picArray[i]}">
    <div class="card-body">
      <h5 class="card-title">state: ${stateArray[i]}</h5>
      <p class="card-text">city : ${cityArray[i]}</p>
      <p class="card-text">address : ${addressArray[i]}</p>
      <h6 class="card-text">price : ${priceArray[i]}$</h6>
      <p class="card-text">bed : ${bedArray[i]}</p>
      <p class="card-text">sqrt : ${sqftArray[i]}</p>
      
      <a href=${linkArray[i]} target="blank" class="btn btn-primary">buy</a>
      
      
    </div>
  </div>`
  }
} print()

// let serch=document.getElementById("serch");
function serchRealState(){
  realestate_div.innerHTML="";
  for(let i=0; i<picArray.length;i++){
    if(cityArray[i]==serch.value){
    realestate_div.innerHTML+=`<div class="container card col-lg-3 d-flex justify-content-center" style="width: 18rem;">
    <img class="card-img-top" src="${picArray[i]}">
    <div class="card-body">
      <h5 class="card-title">state: ${stateArray[i]}</h5>
      <p class="card-text">city : ${cityArray[i]}</p>
      <p class="card-text">address : ${addressArray[i]}</p>
      <h6 class="card-text">price : ${priceArray[i]}$</h6>
      <p class="card-text">bed : ${bedArray[i]}</p>
      <p class="card-text">sqrt : ${sqftArray[i]}</p>
      
      <a href=${linkArray[i]} target="blank" class="btn btn-primary">buy</a>
      
      
    </div>
  </div>`}
  }}

  document.getElementById("buttonSer").addEventListener("click", serchRealState);

