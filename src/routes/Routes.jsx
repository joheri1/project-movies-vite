import { Route } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound";
import { Home } from "../pages/Home";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = (
  <>
    {/* Route for the Home page*/}
    <Route path="/" element={<Home />} />

    {/* Route for "go back to home" for the Page not found page*/}
    <Route path="/back-to-home" element={<Home />} />

    {/* Route for Page not Found*/}
    <Route path="*" element={<PageNotFound />} />
    
    {/* A dynamic route for individual movie pages */}
    {/* The :movieTitle part is a dynamic parameter that will match the movie title in the URL */}
    <Route path="/movie/:movie" element={<MovieInfo />} />
  </>
);

export default routes;