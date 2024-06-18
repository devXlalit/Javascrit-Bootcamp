const animal = {
    lion: {
        sound: "roar",
        speed: 30,
        age: 12,
        sleep: function(fname){
            return "hello "+fname    
        }
    }
}

console.log(animal.lion.sound);
const res = animal.lion.sleep("Lalit")
console.log(res);



const x = function(){
    return "Hello"
}

const variable = x();
console.log(variable);