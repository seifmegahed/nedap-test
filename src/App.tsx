import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import GnomeCards from "./components/GnomeCards";
import GnomePage from "./components/GnomePage";
import { useEffect, useState } from "react";
import { GnomeDataType } from "./GlobalTypes";

function App() {
  const [data, setData] = useState<GnomeDataType[]>();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nedap/healthcare-mobile-public/main/data.json"
    )
      .then((res) => res.json())
      .then((_data) => setData(_data?.Brastlewark));
  }, []);
  if (data === undefined) return <>Waiting for data...</>;
  return (
    <div className="w-screen min-h-screen h-fit font-inter text-gray-600 bg-gray-200 flex flex-col items-center">
      <div
        className="w-full px-12 py-5 text-5xl border-b bg-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        Brastlewark
      </div>
      <div className="w-full max-w-screen-xl">
        <Routes>
          <Route path="/" element={<GnomeCards />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="gnomes/:id" element={<GnomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
