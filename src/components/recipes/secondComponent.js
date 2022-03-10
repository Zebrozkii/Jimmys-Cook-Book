import './secondComponentstyles.css';
import React from 'react';

export const Recipe = props => (
    <div className="recipe-container">
    <h2>{props.recipe.name}</h2>
    </div>
)
