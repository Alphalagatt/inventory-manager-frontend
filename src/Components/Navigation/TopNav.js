import { useContext } from "react";
import Title from "../../Contexts/TitleContext";

function TopNav(){
    const titleCTX = useContext(Title);
    return<header className="flex justify-around p-5">
        <h1 className=" text-5xl">
            {titleCTX.val}</h1>
        <h3 className=" text-lg mt-2">lagattalpha@gmail.com</h3>
    </header>
}

export default TopNav;