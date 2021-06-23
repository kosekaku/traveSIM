# A Project- nodejs, react challenge
A repo combining challenges from react and nodejs,

> # Usage
>
To install and use this app.  
you  must have node js installed in your machine.

No extra dependencies are required except those that comes with nodejs.

> ## Installing the the Project
````
git clone 'git@github.com:kosekaku/traveSIM.git'
````
>> ### Node js -> omdbapi- fetching movies
A simple __zero__ extenal dependencies node js app that fetches movies from the omdb api.  

````
cd the repo name && cd SERVER
node app.js
````

**NOTE**: omdbapi requires you to signin and get an api key,  
I have put my own test api user id and key, feel free to generate your id and key on the [omdbapi website](http://www.omdbapi.com "go to the api key section")

>> ### Node js -> file scanner
A node js command line tool that scans files.  
It then validate the files against a style guide []
````
cd the repo name && cd SERVER
node scanFIles.js
````
>>> Testing

Create some files with sample data like how your would decalare a javascript variable ie  

Valid options
***
````
const name = kose;
let age = 10;
.............
````
Invalid options
***
````
const name =kose; // no space after assignment
const height = 18 // no semicolon
var weight =50 // no semicolon & space
let age = 10;
// ..........
````

Note that the script will only scan files in the current directory

>> ### React Js -> 
A react app

>>> #### Installations | running the app
````
cd UI && node app.js
````

> ## Build with
>- Node js - backend task
>- React js - frontend task 

> ## License
[MIT](http://somelinks "usage license")

> ## Authors
>- Kose
