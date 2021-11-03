// window.onload = async() => {
//     try {
//         const response = await fetch("https://striveschool-api.herokuapp.com/api/product/")
//         if (response.ok){
//             const events = await response.json()
//             const ul = document.getElementById("events")
//             events.forEach(element => {
//                 const li = document.createElement("li")
//                 li.classList.add("list.group-items")
//                 li.innerHTML = `${element.name}${element.email}${element.website}`
//                 ul.appendChild(li)
//             });
//         }
//     } catch(e){
//         alert(e)
//     }
// }
window.onload = async(event) => {
    const url='https://striveschool-api.herokuapp.com/api/product/'
    event.preventDefault()
    const myobj = {
        // _id: "5d318e1a8541744830bef139", //SERVER GENERATED
      name: "app test 1",  //REQUIRED
      description: "somthing longer", //REQUIRED
      brand: "nokia", //REQUIRED
      imageUrl: "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
      price: 100, //REQUIRED
      userId: "admin", //SERVER GENERATED
      createdAt: "2019-07-19T09:32:10.535Z", //SERVER GENERATED
      updatedAt: "2019-07-19T09:32:10.535Z", //SERVER GENERATED
      __v: 0 //SERVER GENERATED
    }
   
    try {
        const response = await fetch(url, {
            method:"POST",
            body:JSON.stringify(myobj),
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGFhZGFhY2FhMjAwMTU1MmExNjciLCJpYXQiOjE2MzU5NDUxMzQsImV4cCI6MTYzNzE1NDczNH0.L6pQxuTYtYGAxo_qndjc1yaul60lu0W4p3hQ96XEwXI",
            "Content-Type":"application/json",     
        }
            })
            if(response.ok){
                // let i = []
                console.log(await(response.json()))
                // i= await response.json()
                // // console.log(i.brand)
                // let ul = document.getElementById("events")
                // let li = document.createElement("li")
                // li.classList.add("list.group-items")
                // li.innerHTML = `${i.brand}`
                // ul.appendChild(li)
            }
        
    } catch(e){
        alert(e)
    }
}