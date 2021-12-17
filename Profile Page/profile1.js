console.log ("page loaded")

var requestque = document.querySelector(".connectionbubble") 
var connections = document.querySelector("#connectionscount")

function deny(id) {
    var todd = document.querySelector(id)
    console.log (todd, requestque)
    todd.remove()
    requestque.innerHTML --
}

function accept(id) {
    var todd = document.querySelector(id)
    console.log (todd, requestque)
    todd.remove()
    requestque.innerHTML --
    connections.innerHTML ++
    console.log (connections)

}

function changename(id) {
    var newname = document.querySelector(id)
    console.log (id)
    newname.innerHTML = "any other name"
}