//Promises

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
        <div class="card" >
            <img src=${obj.img} class="card-img-top" alt="...">
            <div class="card-body">
                
            <h5 class="title">${obj.title}</h5>
                <div>
                <p>${obj.category}</p>
                <p>$${obj.price}</p>
                </div>
                <a href="#"  class="btn btn-dark">add to cart</a>
            </div>
        </div>
        `
        row.appendChild(col)
    }
})
.then(b=>{
    let addbutton = document.querySelectorAll("a.btn")
    
    addbutton.forEach(btn=>{
        btn.addEventListener('click' , function (e){
            let titlearray=[]
            let selectedtitle = btn.parentNode.querySelector("h5") //holdtitle
            let tbodyRef = document.getElementById('myTable')
            // Insert a row at the end of table
            let newRow = tbodyRef.insertRow();
            // Insert a cell at the end of the row
            let newCell1 = newRow.insertCell();
            let newCell2 = newRow.insertCell();
            let newCell3 = newRow.insertCell();
            let newCell4 = newRow.insertCell();
            // Append a text node to the cell
            let newText1 = document.createTextNode(selectedtitle);
            newCell1.appendChild(newText1);
            let newText2 = document.createTextNode('new row');
            newCell2.appendChild(newText2);
            let newText3 = document.createTextNode('new row');
            newCell3.appendChild(newText3);
            let newText4 = document.createTextNode('new row');
            newCell4.appendChild(newText4);
            
            
            
            
            let selectedcard = btn.parentNode
            selectedcard.classList.add("bg-secondary")
            titlearray.push(selectedtitle)
            
            console.log(titlearray)
            
        } )
    }
    )

})
.catch((error)=>console.log("Error catched",error))

// function additems() {
//     let tbodyRef = document.getElementById('myTable')
//     // Insert a row at the end of table
//     let newRow = tbodyRef.insertRow();
//     // Insert a cell at the end of the row
//     let newCell1 = newRow.insertCell();
//     let newCell2 = newRow.insertCell();
//     let newCell3 = newRow.insertCell();
//     let newCell4 = newRow.insertCell();
//     // Append a text node to the cell
//     let newText1 = document.createTextNode('new row');
//     newCell1.appendChild(newText1);
//     let newText2 = document.createTextNode('new row');
//     newCell2.appendChild(newText2);
//     let newText3 = document.createTextNode('new row');
//     newCell3.appendChild(newText3);
//     let newText4 = document.createTextNode('new row');
//     newCell4.appendChild(newText4);
// }

  
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