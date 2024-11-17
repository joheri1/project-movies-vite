import ApiFetcherKey from "../data/ApiFetcherKey"; // Import ApiFetcherKey component
import Footer from "../components/Footer";
import MovieList from "../pages/MovieList"; // Import MovieList component

function Home() {
  return (
    <div className="homepage">
      <h1>Popular Christmas Movies</h1>
      <ApiFetcherKey
        render={(movies) => <MovieList movies={movies} />}
      />
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Home;
