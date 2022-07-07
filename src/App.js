import Body from "./Componennts/Body";
import './Componennts/assets/Styles/global.scss';
import Title from "./Componennts/Title";
import BodySecondBlock from "./Componennts/Body Second/BodyBlock";
import Nav from './Componennts/nav/index';

function App() {
  return (
    <div className="App">
      <Nav />
      <Title />
      <Body />\
      <BodySecondBlock />
    </div>
  );
}

export default App;
