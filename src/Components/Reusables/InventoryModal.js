import { data } from "autoprefixer";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

function InventoryModal(props){
    const[msg,setMsg]=useState('');
    const BatchNoRef = useRef();
    const ProductRef = useRef();
    const QuantityRef = useRef();
    const BuyingPriceRef = useRef();

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        axios.get('https://parrot-girdle.cyclic.app/products').then((res)=>{
            setLoading(false);
            const myData = res.data;
            setData(myData);
        });
    },[]);
    
    function addBatch(e){
        
        
        e.preventDefault();
        let batch={
            batchNo:BatchNoRef.current.value,
            product:ProductRef.current.value,
            Quantity:QuantityRef.current.value,
            BuyingPrice:BuyingPriceRef.current.value,
        };
        axios.post('https://parrot-girdle.cyclic.app/batches',batch).then(res=>{
            setMsg("Customer added successfully!");
        }).catch(e=>{
            setMsg('Something Went Wrong. Try again letter.');

        })
        
        setTimeout(() => {
            setMsg('');
        }, 2000);

    }
    return<div className=" w-2/4 h-3/4 absolute z-30 border border-slate-700 rounded-2xl shadow-2xl ml-20 p-10">
        
       <div className="flex justify-between"> <h1 className=" text-slate-800 text-2xl font-extralight">New Inventory</h1><button onClick={props.onClose} className=' text-xl  font-extralight rounded-full pt-0'>X</button></div>
        <p className=" bg-pink-900 opacity-50 rounded-md">{msg}</p>
        <form onSubmit={addBatch} className=' border-b'>
            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='text' placeholder='Batch No' ref={BatchNoRef}/>
            <select className=" w-3/4 text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='text' placeholder='Product' ref={ProductRef}>
                {data.map(prods=>{
                    return <option value={prods._id}>{prods.prodName}</option>
                })}
            </select>

            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='number' placeholder='Quantity' ref={QuantityRef}/>
            <input className=" w-full text-lg rounded-md px-10 py-3 my-4 border border-slate-600 placeholder:text-slate-400 text-slate-800" type='email' placeholder='Buying Price' ref={BuyingPriceRef} />
            <button className=" w-1/3 border border-slate-900 py-2 rounded-md text-slate-100 bg-slate-900 my-2">Submit</button>
        </form>
        
    </div>
}

export default InventoryModal;