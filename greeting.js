function greet(name) {
    if(Array.isArray(name)){
        return greetTwoName(name);
    }
    if(!name || name === null || name === ""){
        return 'Hello, my friend.';
    }
    if(name === name.toUpperCase()){
        return `HELLO, ${name}!`;
    }
    return `Hello, ${name}.`;
}

function greetTwoName(name){
    if(name.length === 2){
        return `Hello, ${name[0]} and ${name[1]}.`
    }
    
}

module.exports = greet, greetTwoName