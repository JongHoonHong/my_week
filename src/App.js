import "./App.css";
import { Route } from "react-router-dom";

import Home from "./Home";
import LeaveScore from "./LeaveScore";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/LeaveScore/:day" exact>
        <LeaveScore />
      </Route>
    </div>
  );
}

export default App;
