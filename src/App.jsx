import "./App.css";
import { Navbar } from "./components";
import { Router } from "./routes/Router";

function App() {
  return (
    <div className="mr-xxl ml-xxl">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
