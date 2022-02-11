import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Title from "../../Contexts/TitleContext";
import ProductsModal from "../Reusables/ProductsModal";

function Products(){
    const [modal,setModal] = useState(false);
    const [loading,setLoading] = useState(true);
    const [data,setData]=useState([]);
    const titleCTX = useContext(Title);
    const [msg,setMsg] = useState('');
    useEffect(()=>{
    axios.get('https://parrot-girdle.cyclic.app/products').then((res)=>{
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
    axios.delete(`https://parrot-girdle.cyclic.app/products/${id}`).then(res=>{
        setMsg('Customer deleted Successfully!!');
    }).catch(e=>{
        setMsg('something went Wrong please try again later');
    })
}

if(loading){
    return<div>Loading.....</div>
}else{


    return<div className=" p-10">
        <div>
            <button onClick={showModal}>New Product</button>
        </div>
        <p>{msg}</p>
        <div className="">
            {data.map(prod=>{
                return<div className=" flex justify-evenly my-4">
                    <div>{prod.prodId}</div>
                    <div>{prod.prodName}</div>
                    <div>{prod.sellingPrice}</div>
                    <div>
                        <button className="border border-pink-900 text-pink-200 bg-pink-900 px-3 rounded-md" onClick={(e)=>{del(prod._id); return e}}>Delete</button>
                    </div>
                    </div>
            })}
        </div>
        {modal && <ProductsModal onClose={showModal}/>}
    </div>
}
}

export default Products;