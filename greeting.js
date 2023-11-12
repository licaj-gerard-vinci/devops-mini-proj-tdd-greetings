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
    else if(name.length > 2){
        let str = `Hello, ${name[0]}, ${name[1]}`;
        for(let i = 2; i < name.length; i++){
            if(i === name.length - 1){
                str += ` and ${name[i]}`;
                break;
            }
            str += ` and ${name[i]}`;
        }
        str += '.';
        return str;
    }
}

module.exports = greet, greetTwoName