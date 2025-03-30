let quotes = document.getElementById("quotes")
const btn = document.getElementById("btn")
async function fetchQuotes(){
    try{
        const response = await fetch("https://api.api-ninjas.com/v1/quotes",{
            method: "GET",
            headers:{
                "X-Api-Key": "jD7fR3kSxkfJgj/Wc3Eq1Q==jTUxmXJzOkACSjaZ"
            }
        })
        if(!response.ok){
            console.log("respnse error:",response.status)
        }
       let data = await response.json()
    //    console.log(data)
       quotes.innerText = data[0].quote

    }catch(error){
        console.log(error)
    }
    
}
btn.addEventListener("click",fetchQuotes)
fetchQuotes()
