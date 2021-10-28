//Promises
function fetching(){
fetch("https://striveschool-api.herokuapp.com/books")
.then((data) => {
        return data.json()
    })
.then((body)=>{
    const row = document.querySelector(".row")
    for(let loop = 0; loop < body.length; loop++){
        const obj = body[loop]
        
        const col = document.createElement("div")
        col.className ="col-3"
        col.innerHTML = `
        <div class="card" style="background.color:black;">
            <img src=${obj.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${obj.title}</h5>
                <div>
                <p>${obj.category}</p>
                <p>$${obj.price}</p>
                </div>
                <a href="#" onclick="additems()" class="btn btn-dark">add to cart</a>
            </div>
        </div>
        `
        row.appendChild(col)
    }
})
.catch((error)=>console.log("Error catched",error))
}

function additems(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}
//Callback functions
        // function greet(input){
        //     console.log("Hello",input)  
        // }
        // function saythename(s){
        //     console.log("Welcome",s)
        // }
        // function dosomething(name,callback){
        //     //console.log(name)
        //     const str=name
        //     callback(str)
        // }
        // dosomething("Bilal",greet)
        // dosomething("Bilal",saythename)
