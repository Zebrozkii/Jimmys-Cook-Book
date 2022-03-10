import React from 'react';
import { Recipe } from '../recipes/secondComponent';
import './recipe-list-component.style.css';

export const RecipeList = props => (
  <div className="recipe-list">
  {props.recipes.map(recipe => (
    <Recipe key={recipe.id} recipe={recipe}/>
  ))}
  </div>
);