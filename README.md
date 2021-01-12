# Shopify Challenge
(I had to delete my old shopify-challenge repo and upload my project from my local version so that's why only 1 commit is showing)
This application was developed for the UX Developer Intern & Web Developer Intern Challenge - Summer 2021. This webpage can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

- Front-end web development built using React & Javascript
- Login functionality with Firebase Authentication & deployment with Firebase Hosting
- Data persists page refresh using localStorage

## Technical Requirements:

### Search Ability Demo and the Technical Requirements Fulfilled:

- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
  ![](https://github.com/asmxali/shopify-challenge/blob/master/gifs/search_demo.gif)

### Nomination Ability Demo and the Technical Requirements Fulfilled:

- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.
  ![](https://github.com/asmxali/shopify-challenge/blob/master/gifs/nomination_demo.gif)

### Login Functionaily

- User can be created and signed in once logged out
  ![](https://github.com/asmxali/shopify-challenge/blob/master/gifs/authetication_demo.gif)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
