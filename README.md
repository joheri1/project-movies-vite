<h1 align="center">
  <a href="">
    <img src="/src/assets/movies.svg" alt="Project Banner Image">
  </a>
</h1>

# Movie Site Project

This app displays the most popular movies from The Movie Database (TMDB). Data is fetched from the TMDB API (https://developer.themoviedb.org/) to dynamically show popular movies and their details. The site is built with React, using React components to structure the app, and React Router to navigate between different pages.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

This project uses npm (Node Package Manager) to handle its dependencies and run the development server.

```bash
npm i && code . && npm run dev
```
Before deployment:

```bash
npm run build
```

### Useful sources 
- [Article about the Environment variable that I used for my API token](https://medium.com/@bhaskarkumar.india/leveraging-vites-environment-variables-for-secure-api-key-management-dd533849a5b8)

### The Problem
1. Deploying to Netlify.  
In this project, I stored the API token used to fetch data from TMDB in a .env file for security reasons, and the file is added to .gitignore to prevent it from being pushed to GitHub. When deploying the app on Netlify, environment variables from .env files are not automatically transferred, so the data from the TMDB database couldn't be fetched.   To resolve this, the API token was manually added to Netlify's environment variables under Site Configureation > Environment variables > Environment variables. The API token is available in production without being exposeds in the code.

### View it live
[Project Movie Router](https://project-movie-router.netlify.app/)

