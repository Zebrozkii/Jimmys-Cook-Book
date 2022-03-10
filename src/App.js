
import './App.css';
import {RecipeList} from './components/recipe-list/recipe-list-component';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      recipes:[]
    };
  }
  componentDidMount(){
    fetch('./recipes.json')
    .then(response => response.json())
    .then(name => this.setState({recipes: name}));
  }
  render(){
    const {recipes}=this.state;
  return (
    <div className="App">
      <header className="App-header">
      <h1>Jimmys Cheap Cook Book</h1>
      </header>
      <RecipeList recipes = {recipes}/>
    </div>
  );
}
}

export default App;
