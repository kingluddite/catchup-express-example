// Dependencies
// 3rd party
const express = require('express');

// fake data
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: 'baby-yoda',
    name: 'Baby Yoda',
    role: 'Over powered',
    age: 1,
    forcePoints: 5000
  }
];

const app = express();
const PORT = 8000;

// let's me access req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', function(req, res) {
  res.send('Hello from Sellersville Pa');
})

// @route.    GET api/characters
// @desc.     Get all characters from star wars
// @access.   PUBLIC
app.get('/api/characters', function(req, res) {
  res.json(characters);
});

 // get specific character
 app.get('/api/characters/:character', function(req,res) {
   const chosen = req.params.character;

   for (let i = 0; i < characters.length; i++) {
     if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
     }
   }
 });

 app.post('/api/characters', function(req,res) {
    console.log(req);
    const newCharacter = req.body;

    characters.push(newCharacter);

    res.status(200).json(newCharacter);
    // res.send('test');
 })

 // TODO: Add page not found route
 //The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.status(404).send('Not found');
});

//  app.get('*', function(req, res) {
//   res.send('Page Not Found');
// });
// app.get('/baby-yoda', function (req, res) {
//   res.json(babyYoda);
// });
// Listener


app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
