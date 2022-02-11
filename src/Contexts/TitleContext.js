import { createContext, useState } from "react";


const Title = createContext({
    val:"",
    Overlay:false,
    changeVal:(value)=>{},
    ToggleOverlay:()=>{},
});

export function TitleContextProvider(props){
    const [val,setVal] = useState('Home');
    const [Overlay, setOverlay] = useState(false);
    function changeVal(value){
        setVal(value);
    }
    function ToggleOverlay(){
        setOverlay(!Overlay);   
    }
    let myValues = {
        val:val,
        Overlay:Overlay,
        changeVal,
        ToggleOverlay,

    }
    return<Title.Provider value={myValues}>
        {props.children}
    </Title.Provider>
};

export default Title;