import './App.css';
import {action,Comedy,Romance,orginals,Horror,Documentaries,TopRated,Trending} from './urls'
import Banner from './Components/Banner/Banner';
import MovieRow from './Components/MovieRow/MovieRow';
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <MovieRow url={Trending} title='Trending' isLargeRow />
      <MovieRow url={orginals} title='Neflix Orginals'/>
      <MovieRow url={TopRated} title='Top Rated'/>
      <MovieRow url={action} title='Action'/>
      <MovieRow url={Comedy} title='Comedy'/>
      <MovieRow url={Romance} title='Romance'/>
      <MovieRow url={Horror} title='Horror'/>
      <MovieRow url={Documentaries} title='Documentaries'/>
    </div>
  );
}

export default App;
