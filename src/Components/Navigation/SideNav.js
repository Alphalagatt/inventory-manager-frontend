import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Title from "../../Contexts/TitleContext";

function SideNav(){
    const titleCTX = useContext(Title);
    let myRef = useRef();
    function changeName(){
        titleCTX.changeVal(myRef.current.value);
    }
    return<nav className=" bg-slate-900 w-1/6 h-screen">
        <div className=" text-slate-200 text-xl font-extrabold font text-center p-3 space-y-5 cursor-pointer">
        <h1><Link to='/'>Inventory Manager</Link></h1></div>
        <ul className=" text-slate-200 ml-10 space-y-5 text-xl text-right">
            <li onClick={val=>{titleCTX.changeVal('Products'); return val;}} className="hover:bg-slate-600 p-4 active:bg-slate-200 active:text-slate-900"><Link to='/products'>Products</Link></li>
            <li onClick={val=>{titleCTX.changeVal('Inventory'); return val;}} className="hover:bg-slate-600 p-4"><Link to='/inventory'>Inventory</Link></li>
            <li onClick={val=>{titleCTX.changeVal('Sales'); return val;}} className="hover:bg-slate-600 p-4"><Link to='/sales'>Sales</Link></li>
            <li onClick={val=>{titleCTX.changeVal('End Of Day'); return val;}} className="hover:bg-slate-600 p-4"><Link to='/endofday'>End Of Day</Link></li>
            <li onClick={val=>{titleCTX.changeVal('Customers'); return val;}} className="hover:bg-slate-600 p-4"><Link to='/customers'>Customers</Link></li>
        </ul>
    </nav>
}

export default SideNav;