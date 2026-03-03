addEventListener("DOMContentLoaded",function(){

document.querySelector("#addBtn").addEventListener("click",addUser)

})
//add the song to the database.. it has to be async function because we are calling data outside our server

async function addUser() {
    //create a song object based on the form that the user fills out. make it easy to send things back to backend
    const User ={
    username: document.querySelector("#UserName").value,
     password: document.querySelector("#Password").value,
   
    }
    const response = await  fetch("http://localhost:3000/api/user",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(User)
    })
    if(response.ok){
        const results = await response.json()
        alert("Added User with ID of " +results._id)

        //reset the form after done
        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHTML ="Cannot add User"
    }
}