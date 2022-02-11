import axios from "axios";
import { useRef, useState } from "react";

function CustomerModal(props){
    const[msg,setMsg]=useState('');
    const CustNameRef = useRef();
    const CustEmailRef = useRef();
    
    function addCust(e){
        e.preventDefault();
        const customer = {
            CustName:CustNameRef.current.value,
            CustEmail:CustEmailRef.current.value,
        }
        axios.post('https://parrot-girdle.cyclic.app/customers',customer).then(res=>{
            setMsg("Customer added successfully!");
            CustNameRef.current.value='';
            CustEmailRef.current.value='';
        }).catch(e=>{
            setMsg('Something Went Wrong. Try again letter.');

        })

        setTimeout(() => {
            setMsg('');
        }, 2000);

    }
    return<div className=" w-2/4 h-2/4 absolute z-30 border border-slate-700 rounded-2xl shadow-2xl ml-20 p-10">
        
       <div className="flex justify-between"> <h1 className=" text-slate-800 text-2xl font-extralight">New Customer</h1><button onClick={props.onClose} className=' text-xl  font-extralight rounded-full pt-0'>X</button></div>
        <p className=" bg-pink-900 opacity-50 rounded-md">{msg}</p>
        <form onSubmit={addCust} className=' border-b'>
            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='text' placeholder='Customer Name' ref={CustNameRef}/>
            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='email' placeholder='Customer Email Address' ref={CustEmailRef} />
            <button className=" w-1/3 border border-slate-900 py-2 rounded-md text-slate-100 bg-slate-900 my-2">Submit</button>
        </form>
        
    </div>
}

export default CustomerModal;