import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Header />
      <div class="container-fluid">
        <section class="mt-3 p-3">
          <div class="d-flex justify-content-center">
            <Todos />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
