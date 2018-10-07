import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
      title: '',
      ingredients: '',
      thumbnail: '',
    };
  }

  componentDidMount(){
    this.loadRecipeItems();
  };

  loadRecipeItems(){
    this.recipes.forEach(element => {
      const {title, ingredients, thumbnail} = element;
    });
    this.setState({title, ingredients, thumbnail});
  };

  searchRecipe(){
    
  }

  render() {
    const {title, ingredients, thumbnail} = this.state;
    console.log(title, ingredients, thumbnail);
    return (
      <div className="App">
        <Navbar onChange = {this.searchRecipe()} />
        <div className="container mt-10">
          <div className="row">
            <RecipeItem  title = {title} ingredients = {ingredients} thumbnail = {thumbnail} />
            <RecipeItem  title = {title} ingredients = {ingredients} thumbnail = {thumbnail} />
            <RecipeItem  title = {title} ingredients = {ingredients} thumbnail = {thumbnail} />
            <RecipeItem  title = {title} ingredients = {ingredients} thumbnail = {thumbnail} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
