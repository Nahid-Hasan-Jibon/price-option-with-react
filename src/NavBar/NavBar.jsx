import { list } from "postcss";
import React, {useState } from "react";
import Link from "../Components/link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
    const [open , setOpen] =useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (

    <nav>
        <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            {
                open===true?<IoIosClose />:<RiMenu2Fill/>
            }
        
        </div>
        <ul className="md:flex ">
        {
            routes.map(route=><Link key={route.id }route={route}></Link> )
        }
        </ul>
    </nav>
   
  );
};

export default NavBar;
