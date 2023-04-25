import "./styles/styles.scss";
import Section1 from "./views/Section1";
import Section2 from "./views/Section2";
import Section3 from "./views/Section3";
import Section4 from "./views/Section4";
function App() {
  return (
    <div className="App">
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </div>
  );
}

export default App;
