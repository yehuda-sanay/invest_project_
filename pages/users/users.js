let users_div=document.getElementById("tbody")
async function getUsersApi(){
    try {return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/users")
        .then(Response=>Response.json())
        
    } catch (error) {
        
    }
    finally{users_div.innerHTML=""}
}
getUsersApi()

async function printConsoleUsers(){
    getUsersApi()
    .then(res=>console.log(res))
}
printConsoleUsers()

async function printUsersTable(){
    users_div.innerHTML=`<img id="users_img" src="https://bobcoin.eco/wp-content/themes/bobcoin/images//bobcoin-bob-coin.gif">`
    let usersArray=await getUsersApi()
    usersArray.forEach(user => {users_div.innerHTML+=
    `<tr>
      <th scope="row">${user.name.first} ${user.name.last}</th>
      <td>${user.age}</td>
      <td>${user.phone}</td>
      <td id="email_td">${user.email}</td>
    </tr>
 `
    });
}
printUsersTable()


// stucks
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd5d1d13bc5msh609987dbcaebff1p1101bajsna79bd9f729f0',
// 		'X-RapidAPI-Host': 'investing4.p.rapidapi.com'
// 	}
// };

// fetch('https://investing4.p.rapidapi.com/main/popular-markets', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));