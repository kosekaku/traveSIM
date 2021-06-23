const http  = require('http');

//const PORT = process.env.PORT;
const omdbapiId = 'tt3896198';
const omdbapiKey = 'a17a6f3b';
const omdbapiUrl = `http://www.omdbapi.com/?i=${omdbapiId}&apikey=${omdbapiKey}`;

http.createServer((req, res) => {
  try {
  console.log('node htpp server created');
  console.log(req.url);
  if(req.url === '/') {
    res.write('On main url......');
    res.end();
  }else if (req.url ==='/movies'){
    http.get(omdbapiUrl, (response) => {
    console.log(response.statusMessage);
    let rawData = '';
    response.on('data', (chunk) => { rawData += chunk; });
    response.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
    res.end(); // call automatically anyway
    
})
}
  else{
    res.write('Invalid url for the api');
    console.log('invalid url for the api')
    res.end();
  }   
  } catch (error) {
   console.log(error);
    
  }
}).listen(3000);

