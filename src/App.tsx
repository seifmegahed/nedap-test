import { BrowserRouter, Route, Routes } from "react-router-dom";
import GnomeCards from "./components/GnomeCards";
import GnomePage from "./components/GnomePage";

function HomePage() {
  return (
    <div className="w-screen min-h-screen h-fit font-inter text-gray-600 bg-gray-100">
      <div className="w-full p-5 text-5xl border-b ">Brastlewark</div>
      <GnomeCards />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="gnomes/:id" element={<GnomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
