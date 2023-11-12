function greet(name) {
    if(!name || name === null || name === ""){
        return 'Hello, my friend.'
    }
    return `Hello, ${name}.`
}

module.exports = greet