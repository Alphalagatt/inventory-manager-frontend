import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Customers from './Components/Pages/Customers';
import Inventory from './Components/Pages/Inventory';
import Products from './Components/Pages/Products';
import Sales from "./Components/Pages/Sales";
import EndOfDaySum from './Components/Pages/EndOfDaySum';
import SideNav from "./Components/Navigation/SideNav";
import TopNav from "./Components/Navigation/TopNav";
import Title, { TitleContextProvider } from "./Contexts/TitleContext";
import Overlay from "./Components/Reusables/Overlay";
import { useContext } from "react";

function App() {
  const titleCTX = useContext(Title);
  return <div className="flex">
    <TitleContextProvider>
    <SideNav/>
    <div className=" bg-slate-200 w-5/6">
      <TopNav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
      <Route path="/sales" element={<Sales/>}/>
      <Route path="/endofday" element={<EndOfDaySum/>}/>
      <Route path="/customers" element={<Customers/>}/>
    </Routes>
    </div>
    { titleCTX.Overlay && <Overlay/>}
    </TitleContextProvider>
  </div>
}

export default App;
