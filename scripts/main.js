const menuButton = document.querySelector("#menu")
const menuNav = document.querySelector("nav")

menuButton.addEventListener("click", function(){
    menuNav.classList.toggle("open")
    menuButton.classList.toggle("open")
})

function MakeEvent(name, people, date, details){
    const event = document.createElement("div");
    event.innerHTML = "<h3>" + name + "</h3><h4>" + date + "</h4><p>" + details + "</p><h4>" + people + "</h4>";
    document.querySelector('.events').appendChild(event);
}

MakeEvent("Jousting", "Jimbus", "05/11/2022", "Join us for the world famous jousting!")
MakeEvent("Burgon Feast", "Jimbus and Sadam", "Dec 12", "We will be feasting burgons, please come baoss!")