import Header from "./components/Header";
import "./styles/styles.scss";
import SectionOne from "./views/SectionOne";
import SectionTwo from "./views/SectionTwo";
import SectionThree from "./views/SectionThree";
function App() {
  return (
    <div className="App">
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </div>
  );
}

export default App;
