const dataWithAsync = async () => {  
    let response = await fetch('https://jsonplaceholder.typicode.com/users');  
    let data = await response.json()    
    return data
}


dataWithAsync().then(data => console.log(data))