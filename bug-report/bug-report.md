## Pokedex - bug report

### These are the issues that need to be fixed:

1. The IDs of the pokemons do not change or increment when clicked on the 'NEXT' button to see another twenty pokemons in the Pokemons List section.

![](./screenshots/pokedex-1.PNG) 
![](./screenshots/pokedex-2.PNG)

2. The above is an aftermath of another issue: when clicked on a specific pokemon from the Pokemons List section (it does not matter from which page it is clicked on: 10, 23 or 47, the issue is the same) to get into the pokemon's details card, it redirects to a different pokemon that is not corresponding with an image and name of the pokemon from the page it was clicked on but shows a pokemon that has a number from a list as an actual ID number.

![](./screenshots/pokedex-3.PNG) 
![](./screenshots/pokemon-details.PNG)

3. Issue with an "Add to Favourite" button that is on the page with pokemon's details card: namely, when clicked on the button to add a pokemon to favourites, the button is disabled (and a message on a button changes to indicate that it was already added to favourites) in order to prevent a user from adding the same pokemon again but when you go back to the Pokemons List section and click on the same pokemon to get redirected to the details of this pokemon, the button is enabled again instead of staying disabled.

![](./screenshots/fav-button-1.PNG) 
![](./screenshots/fav-button-2.PNG)

### The above issues - No 1 and 2 - have been fixed in the following way:

 - By taking the ID of each pokemon out of the pokeApi when fetching the data from the props that were passed in the PokemonsList component, and the useState hook was used to get this value from this fetch and the value received was outputted in the JSX template and in the Link component. It is instead of using the value of an index that caused this issue.