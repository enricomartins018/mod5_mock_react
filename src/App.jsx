import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Collection from "./components/Collection/Collection";
import Title from "./components/Title/Title";
import Share from "./components/Share/Share";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Title texto="Sua seleção especial" />
      <Collection />
      <Title texto="Compartilhe a novidade" />
      <Share />
      <Footer />
    </div>
  );
}

export default App;
