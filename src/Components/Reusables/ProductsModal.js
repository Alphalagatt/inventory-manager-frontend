import axios from "axios";
import { useRef, useState } from "react";

function ProductsModal(props){
    const[msg,setMsg]=useState('');
    const ProdIDRef = useRef();
    const ProdNameRef = useRef();
    const ProdDescRef = useRef();
    const SellingPriceRef = useRef();
    
    function addProd(e){
        e.preventDefault();
        const prod={
            prodId:ProdIDRef.current.value,
            prodName:ProdNameRef.current.value,
            prodDesc:ProdDescRef.current.value,
            sellingPrice:SellingPriceRef.current.value,
        };
        axios.post('https://parrot-girdle.cyclic.app/products',prod).then(res=>{
            setMsg("product added successfully!");
        }).catch(e=>{
            setMsg('Something Went Wrong. Try again letter.'+e.message);

        })

        setTimeout(() => {
            setMsg('');
        }, 5000);

    }
    return<div className=" w-2/4 h-2/4 absolute z-30 border border-slate-700 rounded-2xl shadow-2xl ml-20 p-10">
        
       <div className="flex justify-between"> <h1 className=" text-slate-800 text-2xl font-extralight">New Product</h1><button onClick={props.onClose} className=' text-xl  font-extralight rounded-full pt-0'>X</button></div>
        <p className=" bg-pink-900 opacity-50 rounded-md">{msg}</p>
        <form onSubmit={addProd} className=' border-b'>
            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='text' placeholder='Product ID' ref={ProdIDRef}/>
            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='text' placeholder='ProductName' ref={ProdNameRef} />
            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='text' placeholder='Product Description' ref={ProdDescRef}/>
            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='number' placeholder='Selling Price' ref={SellingPriceRef} />
            <button className=" w-1/3 border border-slate-900 py-2 rounded-md text-slate-100 bg-slate-900 my-2">Submit</button>
        </form>
        
    </div>
}

export default ProductsModal;