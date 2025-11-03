import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./pages/NotFound.tsx";
import Index from "./pages/Index.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
