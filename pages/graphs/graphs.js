
// console.log(coinForGraph())

// Math.floor(Math.random() * (max - min) ) + min
// async function getApi(){
//     try {return await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false")
//     .then(res=>res.json()) 
//     } catch (error) {
        
//     }
// }
// getApi()

// async function printToConsole(){
//    getApi()
//    .then(res=>console.log(res))    
// }
// printToConsole()


// let result = await getApi();
// let dataArray=[]
// let someArray=[]
// result.forEach(invest=>dataArray.push(invest.current_price))
// result.forEach(invest=>someArray.push(invest.name))
// console.log(dataArray,someArray)
// function printGraphsApi(){
//   for(var i=0; i<someArray.length; i++){
//   var options = {
//     series: [{
//       name: "Desktops",
//       data: dataArray[i]
//   }],
//     chart: {
//     height: 350,
//     width:650,
//     type: 'bar',
//     zoom: {
//       enabled: false
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'straight'
//   },
//   title: {
//     text: 'Product Trends by Month',
//     align: 'left'
//   },
//   grid: {
//     row: {
//       colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//       opacity: 0.5
//     },
//   },
//   xaxis: {
//     categories: someArray[i],
//   }
//   };
  
//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();}
// }
// printGraphsApi()




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30433c4425msh2304ddbdff6f1cbp103fc8jsndbae350d41e0',
		'X-RapidAPI-Host': 'real-estate12.p.rapidapi.com'
	}
};

fetch('https://real-estate12.p.rapidapi.com/listings/sale?state=CA&city=Los%20Angeles&page=1&sort=relevant&type=single-family%2Cmulti-family', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


