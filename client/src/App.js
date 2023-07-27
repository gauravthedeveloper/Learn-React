import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="HEllo" age={21} />
    </div>
  );
}
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
};

export default App;
