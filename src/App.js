import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import PokemonDetails from "./components/PokemonDetails";
import { Favourites } from "./views/favourites/favourites";
import { Home } from "./views/home/home";
import { Pokemons } from "./views/pokemons/pokemons";


/* Routing is not complete, please add missing part of the router to make it work properly

Take a look at list of imported components!!!

HINT: Missing routes are
* /pokemons
* /favourites
* /

If you get stuck here refer to first pages of react-router documentation. I literally copied code from their tutorial

* Later you'll have to comeback here to add additional route for /pokemons/:id but you'll know it when you get there
*/

function App() {
  return (
    <Router>
      <main className="App bg-red-100" style={{minHeight: '100vh'}}>
        <div className="w-6/12 pt-4 mx-auto">
            <div>
              <Navbar />
                <div className="content">
                  <Switch>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route exact path="/pokemons">
                      <Pokemons/>
                    </Route>
                    <Route path="/pokemons/:index">
                      <PokemonDetails/>
                    </Route>
                    <Route path="/favourites">
                      <Favourites/>
                    </Route>
                  </Switch>
                </div>
            </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
