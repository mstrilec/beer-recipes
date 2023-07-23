# Beer Recipes App

## Demo: [Link](https://mstrilec.github.io/beer-recipes/)

This is a simple React app that displays a list of beer recipes fetched from the Punk API (https://api.punkapi.com/v2/beers). Users can scroll through the list, view individual recipes, select multiple recipes, and delete the selected ones.

## Technologies Used

- React.js
- Zustand (https://github.com/pmndrs/zustand)

## How to Use

1. Clone the repository to your local machine.
2. Run `npm install` to install the project dependencies.
3. Run `npm start` to start the development server and open the app in your browser.

## Features

- Fetch a list of beer recipes from the Punk API on initial load.
- Display 15 recipes on the page at a time, with lazy scroll functionality.
- Implement multiple selection of recipes by right-clicking on a recipe card. A "Delete" button appears when at least one recipe is selected.
- Remove selected recipes from the list with the "Delete" button (always display 15 recipes).
- Click on a recipe card with the left mouse button to view the single recipe page.
- Load more recipes automatically when there are no more recipes to display.

## API Endpoint

- The app fetches data from the Punk API endpoint: `https://api.punkapi.com/v2/beers?page=n`, where `n` is the page number.
