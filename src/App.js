import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import FindDoctors from "./Pages/FindDoctors/FindDoctors/FindDoctors";
import FindMedical from "./Pages/FindMedical/FindMedical/FindMedical";
import Navbar from "./Pages/Header/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <FindDoctors>
              <FindDoctors></FindDoctors>
            </FindDoctors>
          </Route>
          <Route path="/medical">
            <FindMedical></FindMedical>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
