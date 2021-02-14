import projectData from "./project-data";
import "./App.css";
import Header from "./Header";
import Projects from "./Projects";

function App() {
  console.log(projectData);
  return (
    <div className="App">
      <Header />
      <Projects projectData={projectData} />
    </div>
  );
}

export default App;
