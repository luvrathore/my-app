import { Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import sample1 from './assets/sample1.mp4';
import ListPage from './practiceComponents/ListPage';
import VideoPage from './practiceComponents/VideoPage';
import PageNotFound from './practiceComponents/PageNotFound';

function App() {
  return (
    <div class="page">
    <video class="video" autoplay loop muted controls>
      <source src={sample1} type="video/mp4"/>
    </video>
    <info id="info">
      <p>Video Name</p>
      <p>Sports Name</p>
      <p>Drill</p>
      <Switch>
      <Route exact path="/" component={ListPage } />
      <Route path="/user" component={PageNotFound} />
      </Switch>  
    <boption>
    </boption>
    </info>
    </div>
  );
}

export default App;
