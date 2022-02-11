import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Title from "../../Contexts/TitleContext";
import CustomerModal from "../Reusables/CustomerModal";

function Customers(){
    const [modal,setModal] = useState(false);
    const [loading,setLoading] = useState(true);
    const [data,setData]=useState([]);
    const titleCTX = useContext(Title);
    const [msg,setMsg] = useState('');
    useEffect(()=>{
    axios.get('https://parrot-girdle.cyclic.app/customers').then((res)=>{
        setLoading(false);
        const myData = res.data;
        setData(myData);
    });
    
},[]);

function showModal() {
    setModal(!modal);
    titleCTX.ToggleOverlay();
}
function del(id){
    axios.delete(`https://parrot-girdle.cyclic.app/customers/${id}`).then(res=>{
        setMsg('Customer deleted Successfully!!');
    }).catch(e=>{
        setMsg('something went Wrong please try again later'+e.message);
    })
}

if(loading){
    return<div>Loading.....</div>
}else{


    return<div className=" p-10">
        <div>
            <button onClick={showModal}>New Customer</button>
        </div>
        <p>{msg}</p>
        <div className="">
            {data.map(cust=>{
                return<div className=" flex justify-evenly my-4">
                    <div>{cust._id}</div>
                    <div>{cust.CustName}</div>
                    <div>{cust.CustEmail}</div>
                    <div>
                        <button className="border border-pink-900 text-pink-200 bg-pink-900 px-3 rounded-md" onClick={(e)=>{del(cust._id); return e}}>Delete</button>
                    </div>
                    </div>
            })}
        </div>
        {modal && <CustomerModal onClose={showModal}/>}
    </div>
}
}

export default Customers;