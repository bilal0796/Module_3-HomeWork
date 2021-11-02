const dataWithAsync = async () => {  
    let response = await fetch('https://jsonplaceholder.typicode.com/users');  
    let data = await response.json()    
    return data
}
let hello = async () => { return "Hello" };

hello().then((data) => console.log(data))     // Hello