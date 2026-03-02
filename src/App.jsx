import ClockHeading from "./components/ClockHeading";
import ClockSlogon from "./components/ClockSlogon";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogon></ClockSlogon>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;
