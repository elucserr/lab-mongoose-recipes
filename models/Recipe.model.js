const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  level: String,
  ingredients: Array;
  cuisine: String,
  dishTypeimage: String,
  image: String,
  duration: Number,
  creator: String,
  ceated: Date
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

//ITERATION1
// title - type String. It should be required and unique.
// level - type String. Only can be one of the following values: Easy Peasy - Amateur Chef - UltraPro Chef (remember the ENUM 😉)
// ingredients - type Array.
// cuisine - type String. Should be required.
// dishType - type String. Possible values: Breakfast - Dish - Snack - Drink - Dessert - Other.
// image - type String. Default value: https://images.media-allrecipes.com/images/75131.jpg.
// duration - type Number. Min value should be 0.
// creator - type String
// created - type Date. By default today.


//https://mongoosejs.com/docs/api.html#model-js