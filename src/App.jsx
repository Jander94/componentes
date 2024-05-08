import "./App.css";
import InputSimples from "./components/inputSimples/InputSimples";

function App() {
  return (
    <div>
      <InputSimples
        required={true}
        label="Logradouro: "
        height="30px"
        width="300px"
      />
    </div>
  );
}

export default App;
