import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/main/content/Content";
import { ContextProvider } from "./context/context";
function App() {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
      <Content />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
