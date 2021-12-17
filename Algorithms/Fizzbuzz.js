function fizzbuzz(){
    console.log("hi")
    for(var i=1;i<=100;i++){
        if(i%15==0){
            console.log("FizzBuzz")
        }
        else{
            if(i%3==0){
                console.log("Fizz")
            }
            if(i%5==0){
                console.log("Buzz")
            }
        }
        
    }
}
fizzbuzz()
