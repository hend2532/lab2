import logo from "./logo.svg";
import "./App.css";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import ToggleButton from "./Task5";

function App() {
  const skills = ["html", "css", "js", "react"];
  return (
    <div className="App">
      <Task1 />
      <hr/>
      <Task2 />
      <hr/>
      <Task3
        fname="hend"
        lname="hany"
        track="frontend"
        age={21}
        school={true}
        skills={skills}
      >
        <span>task3 props</span>
      </Task3>
      <hr />
      <Task4 fname="hend" hour={120} track="frontend" leader="Eng:mohamed">
        <span>task4 props</span>
      </Task4>
      <hr />
      <ToggleButton />
    </div>
  );
}

export default App;
