import { Routes, Route } from "react-router-dom";
import { Home } from "@/components/home/home";
import { Prueba } from "@/components/home/sections/prueba";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prueba" element={<Prueba />} />
    </Routes>
  );
}
