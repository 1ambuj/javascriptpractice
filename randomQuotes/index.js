let quotes = document.getElementById("quotes")
const btn = document.getElementById("btn")
let intervalId;
async function fetchQuotes(){
    try{
        const response = await fetch("https://api.api-ninjas.com/v1/quotes",{
            method: "GET",
            headers:{
                "X-Api-Key": "jD7fR3kSxkfJgj/Wc3Eq1Q==jTUxmXJzOkACSjaZ"
            }
        })
        if(!response.ok){
            throw Error("respnse error:",response.status)
        }
       let data = await response.json()
    //    console.log(data)
       quotes.innerText = data[0].quote

    }catch(error){
        console.log(error)
    }
    
}
function getRandomColor(){
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    return `rgb(${red},${green},${blue})`
}
function randomQuotsAndColor(){
    fetchQuotes()
    btn.style.backgroundColor = getRandomColor()
    quotes.style.color = getRandomColor()
}

btn.addEventListener("click",()=>{
   if(intervalId){
    clearInterval(intervalId)
   }
   randomQuotsAndColor() 
     intervalId = setInterval(()=>{
        randomQuotsAndColor() 
    },1000)
})

