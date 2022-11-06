const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Input your tex:\n');
stdin.on('data', data => {
    const dataString = data.toString();
    if(dataString.trim() === 'exit'){
        bye();
    }
    output.write(dataString);  
});

function bye() {
    stdout.write('Bye!');
    process.exit();
}
process.on('SIGINT', bye);
