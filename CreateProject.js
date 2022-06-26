//Requring node.js filesystem(fs)
var fileSystem = require('fs');
//Project foldername input with default name if nothing is passed in
var foldername = process.argv[2] || 'DefaultProject';
//File boilerplates
var indexF = fileSystem.readFileSync('index.html', {flag: 'r'});
var styleF = fileSystem.readFileSync('style.css', {flag: 'r'});
var appF = fileSystem.readFileSync('app.js', {flag: 'r'});;

class CreateProject {
    // Creating the folder and adding the boilerplate files
    constructor(foldername) {
        this.foldername = foldername;
        try { 
            fileSystem.mkdirSync(foldername);
            fileSystem.writeFileSync(`${foldername}/index.html`, indexF);
            fileSystem.writeFileSync(`${foldername}/styles.css`, styleF);
            fileSystem.writeFileSync(`${foldername}/app.js`, appF);
            console.log(`Project: ${foldername} was created ! Enjoy coding !`);
        } catch (error) {
            console.log(`Something went wrong: ${error}`);
        }
        }

    }
new CreateProject(foldername);
