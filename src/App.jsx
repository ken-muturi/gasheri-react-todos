import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Hospital from "./components/Hospital";

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <section className="mt-3 p-3">
          <div className="d-flex justify-content-center">
            <Hospital />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
