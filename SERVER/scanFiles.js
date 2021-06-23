const fs = require('fs').promises; // import promise module to support asyn

const Files = async(path) => {
  try {
    console.log('reading directory');
    const readDir = await fs.readdir(path);
    //console.log(typeof readDir);
    // console.log(readDir);
    readDir.map(async (filename) => {
      // console.log(f);
     // if(filename.toString() === 'testFile.js'){
        console.log(`Reading ${filename} content...\n`);
        const fileBuffer = await fs.readFile(filename);
        const fileContent = fileBuffer.toString();
        const newData = [...fileContent.split('\n')];
        const failureRule1 = /(const|let|var)\s\w*\s=\S*;/g; // no space after =
        const failureRule2 = /(const|let|var)\s\w*\s=\S*/g; // no space and semicolon
        const successRule = /(const|let|var)\s\w*\s=\s\S*;/g; // everything is okay

        newData.filter((value, index) =>{
          if(value.search(failureRule1) === 0) console.log(`File: ${ filename}\n Line number: ${index} \n STYLE GUIDE: Space after assignment(=) rule violations \n`);
          if(value.search(failureRule1) === 0) console.log(`File: ${filename}\n Line number: ${index} \n STYLE GUIDE: Space & semicolon missing rule violations\n`);
          if(value.search(successRule) === 0) console.log(`File: ${filename}\n Line number: ${index} \n HOLA!!: No violations occured in the file\n`);

        });
        console.log('\n search opertion ended....\n');
        
    });
    
  } catch (error) {
    console.log('Am error occured while reading dir'+ error);
    
  }
};

Files('./'); // call function
