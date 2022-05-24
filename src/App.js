import logo from "./logo.svg";
import "./App.css";
import LightBox from "./Components/LightBox";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WordCounter from "./Components/WordCounter/WordCounter";
import Header from "./Components/WordCounter/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <WordCounter />
    </div>
  );
}

export default App;
