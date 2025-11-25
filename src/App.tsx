import { Routes, Route} from "react-router-dom";
import Home from './components/Home'
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      {/* <FormComponent /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
