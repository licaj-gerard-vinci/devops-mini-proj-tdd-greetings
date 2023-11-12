function greet(name) {
    if(!name || name === null || name === ""){
        return 'Hello, my friend.'
    }
    if(name === name.toUpperCase()){
        return `HELLO, ${name}!`
    }
    return `Hello, ${name}.`
}

module.exports = greet