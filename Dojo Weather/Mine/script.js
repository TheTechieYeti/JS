console.log ("page loaded")

// var city = document.querySelectorAll ("#Burbank, #Chicago, #Dallas") 
// console.log(city)

// // function weatherreport(params) {
// //     alert ("Weather report is loading now...")
// // }

// city.onclick = log.console (city)


function loading(params) {
    console.log ("This is WOrking")
    alert ("Weather report is loading now...")
    
}

function removenotice() {
    console.log ("This too is working")
    document.getElementById("cookies").remove()
}
var Ctemps = Array.from(document.querySelectorAll(".ugg")).map(x => x.innerText)

// console.log(Ctemps);
var farray = []
function C2F () {
    for(var i=0; i<8; i++) {
        f = Math.round(9 / 5 * Ctemps[i] + 32);
        // console.log (f);
        farray.push(f);
        // console.log(farray);
    }
    return farray;    
}
var Ftemps = C2F()
console.log (Ftemps)

function convert(element){
    console.log (element.value);
    if (element.value == "°F"){
        console.log ("working");
        var x = document.querySelectorAll("ugg");
        for(var i=0; i<8; i++){
            console.log (x[i].innerText);
            x[i].innerText = Ftemps[i];
            
        }
    
    }
}        
        // document.querySelectorAll(".ugg").innerText = Ctemps
