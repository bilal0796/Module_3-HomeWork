// const dataWithAsync = async () => {  
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');  
//     let data = await response.json()    
//     return data
// }


// dataWithAsync().then(data => {
//     const ul=document.getElementById("events")
//     data.forEach(element => {
//         const li=document.createElement("li")
//         li.classList.add("list-group-item","d-flex", "justify-content-between")
//         li.innerHTML=`<span>${element.email}</span> <span class="badge badge-dark">${element.website}</span>`
//         ul.appendChild(li)
//     });
// })

window.onload = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (response.ok){
            const events = await response.json()
            const ul = document.getElementById("events")
            events.forEach(element => {
                const li = document.createElement("li")
                li.classList.add("list.group-items")
                li.innerHTML = `${element.name}${element.email}${element.website}`
                ul.appendChild(li)
            });
        }
    } catch(e){
        alert(e)
    }
}