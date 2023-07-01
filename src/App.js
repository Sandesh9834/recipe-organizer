import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RecipeCards } from './components/RecipeCards';
import RecipePage from './pages/RecipePage';
import RecipeDetails from './pages/CardDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RecipePage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;


