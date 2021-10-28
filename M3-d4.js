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
        <div class="card">
            <img src=${obj.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        row.appendChild(col)
    }
})
.catch((error)=>console.log("Error catched",error))
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
