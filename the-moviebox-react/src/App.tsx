import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Navbar />
      </main>
      <Footer />
    </>
  );
}

export default App;
