import { Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/NotFound404";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
