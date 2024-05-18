document.querySelector("button").addEventListener("click", () =>{
    let yourName = document.querySelector("#yourName").value;
    let partnersName = document.querySelector("#partnersName").value;

    if(yourName === ''){
        alert("enter your name");
    }
    if(partnersName === ""){
        alert("Enter you partner's name");
    }else{
        let number = parseInt(Math.random()*100);
        document.querySelector("p").innerHTML = yourName + " and " + partnersName + " love percentage = " + number + "%"
    }
})