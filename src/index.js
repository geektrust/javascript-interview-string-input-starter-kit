const handle = require('./solution');
/*
* This is the main entry point for the program. It will parse the input for you.
* You don't need to change this.
*/
function main() {
    const input = process.argv.slice(2)
    if (input.length === 0) {
        throw new Error("no command line arguments passed")
    }
    var output = handle(input[0])
    console.log(output)
}

main()