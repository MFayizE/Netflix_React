import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={requests.fetchTopRated}/>
      <header className="App-header">
        <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}/>
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Top Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Top Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Top Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Top Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Top Documentaries" fetchUrl={requests.fetchDocumentaries} />


      </header>
    </div>
  );
}

export default App;
