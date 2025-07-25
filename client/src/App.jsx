import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./components/manager/Manager";
import AddFurniture from "./components/furniture/AddFurniture";
import AllFurniture from "./components/furniture/AllFurniture";
import LoadingScreen from "./components/Loading";
import NotFound from "./components/NotFound";
import AllImport from "./components/import/AllImport";
import ModifyImport from "./components/import/ModifyImport";
import AddImport from "./components/import/RecordImport";
import UpdateFurniture from "./components/furniture/UpdateFurniture";
import AllExport from "./components/export/AllExport";
import ModifyExport from "./components/export/ModifyExport";
import AddExport from "./components/export/RecordExport";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/home" element={<Homepage/>} />
      <Route path="/load" element={<LoadingScreen/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/manager" element={<Dashboard/>} />

      {/* furnitures routes */}
      <Route path="/furniture" element={<AddFurniture/>} />
      <Route path="/all-furniture" element={<AllFurniture/>} />     
      <Route path="/furniture/edit/:id" element={<UpdateFurniture/>} />  

      {/* import routes */}
      <Route path="/import" element={<AllImport/>} />  
      <Route path="/import/modify/:id" element={<ModifyImport/>} />
      <Route path="/import/record" element={<AddImport/>} />  

      {/* export routes */}
      <Route path="/export" element={<AllExport/>} />  
      <Route path="/export/modify/:id" element={<ModifyExport/>} />
      <Route path="/export/add" element={<AddExport/>} />  
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
