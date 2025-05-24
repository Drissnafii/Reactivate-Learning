import "./App.css";
import Quiz from "./components/quiz";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">🧠 React Quiz Master</h1>
        <p className="app-subtitle">Test your knowledge and learn something new!</p>
      </div>
      <Quiz />  
    </div>
  );
}

export default App;