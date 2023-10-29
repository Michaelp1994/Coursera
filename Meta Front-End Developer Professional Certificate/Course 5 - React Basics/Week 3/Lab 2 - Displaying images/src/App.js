import logoSrc from "./assets/logo.png"

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img src={ logoSrc } alt="Little Lemon Logo" height="200"  />
    </div>
  );
}

export default App;
