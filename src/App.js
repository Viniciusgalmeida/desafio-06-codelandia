import GlobalStyle from "./GlobalStyle";
import BannerLoki from "./components/Banner/Index";
import Menu from "./components/Menu/Index";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BannerLoki />
      <Menu />
    </div>
  );
}

export default App;
