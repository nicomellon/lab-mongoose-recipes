const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI =
  "mongodb+srv://nico:NydPTjv8voDT7lEN@cluster0.d3xqw.mongodb.net/RecipesLab?retryWrites=true&w=majority";

const createRecipe = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
    // new recipe
    /* const newRecipe = {
      title: "Tortilla de patata",
      level: "Amateur Chef",
      ingredients: ["Potatoes", "Onions", "Eggs"],
      cuisine: "Mediterranean",
      dishType: "main_course",
      image:
        "https://lh3.googleusercontent.com/proxy/tMOcxIlsnaO3WmXJtoKTIj6kDF0JIkZ-BihuejQkrN72I4ltI2Map9lISu4KcIz3lr7Fxgcyvs8rr2yHt6haPK5jJOOAUU9KKeMoRnsj5Gk20Z2OXvNC0FyUapFEwljdxfD90ILLhH51-1AMp-eYaffIBg",
      duration: 40,
      creator: "España",
      created: "03/25/1798",
    };
    console.log(newRecipe);
    await Recipe.create(newRecipe); */
    // multiplte recipes from data
    // await Recipe.insertMany(data);
    /* await Recipe.findOneAndUpdate(
      {
        title: "Rigatoni alla Genovese",
      },
      {
        duration: 100,
      }
    ); */
    await Recipe.deleteOne({
      title: "Carrot Cake",
    });
    //disconnect
    mongoose.disconnect();
    console.log("disconnected");
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
};

createRecipe();
