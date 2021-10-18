import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import FindDoctors from "./Pages/FindDoctors/FindDoctors/FindDoctors";
import FindMedical from "./Pages/FindMedical/FindMedical/FindMedical";

import Navbar from "./Pages/Header/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <FindDoctors></FindDoctors>
          </Route>
          <Route path="/medical">
            <FindMedical></FindMedical>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
