import GlobalState from "./contexts/GlobalState";
import { GlobalStyle } from "./GlobalStyle.styled";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const context = GlobalState();

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle />
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
