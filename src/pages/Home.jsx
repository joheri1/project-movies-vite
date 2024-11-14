import ApiFetcherToken from "../data/ApiFetcherToken" // Import ApiFetcher component

function Home() {
  return (
    <div>
      <h1>Popular Movies</h1>
      {/* Use ApiFetcher to fetch and display the list of movies */}
      <ApiFetcherToken />
    </div>
  );
}

export default Home;