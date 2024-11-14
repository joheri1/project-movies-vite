import ApiFetcherToken from "../data/ApiFetcherToken" // Import ApiFetcherToken component
import ApiFetcherKey from "../data/ApiFetcherKey" // Import AApiFetcherKey component

function Home() {
  return (
    <div>
      <h1>Popular Movies</h1>
      {/* Use ApiFetcher to fetch and display the list of movies */}
      <ApiFetcherToken />
      <ApiFetcherKey />
    </div>
  );
}

export default Home;