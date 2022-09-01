let carddiv=document.getElementById("card_div");

let imgArray=["https://api.time.com/wp-content/uploads/2020/08/rafal-milach-bianka-nwolisa-poland-protest-1.jpg",
"https://static.dw.com/image/56971144_102.jpg","https://i0.wp.com/www.brookings.edu/wp-content/uploads/2017/08/Andre-Perry-headshot-2.jpeg?crop=0px%2C0px%2C2000px%2C2000px&quality=1"
,"https://static01.nyt.com/images/2020/05/12/opinion/12Stone2/12Stone2-mediumSquareAt3X.jpg"]

let namesArray=["Mary Patricia","Jennifer Barbara","James Robert","David William"]


function printPcard(){
    for(let i=0;i<imgArray.length;i++){
        carddiv.innerHTML+=`<div class="card d-flex align-items-center row col-12 col-lg-6  mt-5" style="width: 15rem;">
        <img src=${imgArray[i]} class="card-img-top" style="width:200px;" alt="...">
        <div class="card-body">
        <h5 class="card-title">${namesArray[i]}</h5>
          <p class="card-text">of Americans with partial or total ancestry from sub-Saharan Africa.[3][4] The term "African American" generally denotes descendants of enslaved Africans who are from the United States.[5][6][7] While some Black immigrants or their children may also come to identify as African-American, the majority of first generation immigrants do not, preferring to identify with their nation of origin.[8][9]

          African Americans constitute the second larg</p>
        </div>
      </div>`
    }
}
printPcard()