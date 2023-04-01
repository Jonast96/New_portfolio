import Header from "./components/Header";
import "./styles/styles.scss";
import SectionOne from "./views/SectionOne";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <SectionOne />
      </main>
    </div>
  );
}

export default App;
