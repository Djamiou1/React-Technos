import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {useLocalStorage} from "./hooks/useLocalStorage"
import Home from "./pages/Home";
import Menu from "./components/Menu";
import AddTechno from "./pages/AddTechno";
import "./css/app.css";
import TechnoList from "./pages/TechnoList";

function App() {
  const [technos, setTechnos] = useState([]);
  
  // stockage
   const STORAGE_KEY = 'technos';
   const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
     console.log('usEffect []');
     setTechnos(storedTechnos);
  }, [])

  useEffect(() => {
    console.log('usEffect with [technos]');
    setStoredTechnos(technos);
 }, [technos])

  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
  }

 function handleDeleteTechno(id){
  setTechnos(technos.filter((tech) => tech.technoid !== id))
 }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<AddTechno handleAddTechno={handleAddTechno} />}
        />
        <Route path="/technolist" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>
    </>
  );
}

export default App;
