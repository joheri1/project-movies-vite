import ApiFetcher from "../data/ApiFetcher" // Import ApiFetcher component

function Home() {
  return (
    <div>
      <h1>Popular Movies</h1>
      {/* Use ApiFetcher to fetch and display the list of movies */}
      <ApiFetcher />
    </div>
  );
}

export default Home;