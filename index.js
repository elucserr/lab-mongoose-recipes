const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data.js'); // Import of the data from './data.js' 

//ITERATION3
//We are importing an array of recipes form the data.js file. Using the Model.insertMany method, you should add that entire array to the database. After inserting the elements, print on the console the title of each recipe.

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

//ITEARATION2
//   In index.js, using the Model.create method, you should pass the info to create a new recipe. After the creation, you can use MongoDB Compass to check everything went ok. After inserting the recipe, console.log the title of the recipe.
// To run your code, remember you should use:
// $ node index.js

//Iteration 4 - Update recipe
//Now you should have six different recipes in the database, but there was a mistake in one of them. The Rigatoni alla Genovese does not take that long. You should update the duration field and set it to 100. After updating it, print a success message!

//Iteration 5 - Remove a recipe
//Oh oh! The Carrot Cake is no longer available, so we need to remove it from the database. Using the Model.deleteOne method, remove that recipe from the database and display a success message after doing it!

//Iteration 6 - Close the Database
//After doing all the task you should close the database. Otherwise, the connection will keep open. Be careful about the asynchronicity of all process; you should close it after everything is done! 😉