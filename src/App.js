import { Switch, Route } from "react-router-dom";
import Projetos from "./Pages/Projetos/Projetos";
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/projetos" component={Projetos} exact />
    </Switch>
  );
}

export default App;
