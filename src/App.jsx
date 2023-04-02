import Header from "./components/Header";
import "./styles/styles.scss";
import SectionOne from "./views/SectionOne";
import SectionTwo from "./views/SectionTwo";
function App() {
  return (
    <div className="App">
      <header>{/* <Header /> */}</header>
      <main>
        <SectionOne />
        <SectionTwo />
      </main>
    </div>
  );
}

export default App;
