import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import './Products.css';
import { Link } from "react-router-dom";
import axios from "axios";

function Products()
{
    const [products,setProducts]=useState();

    useEffect(
        ()=>{
            const fun=async ()=>{
            const token=localStorage.getItem('jwtToken');
            console.log(token);
            try{
                const response=await axios.get("http://localhost:8080/api/v1/auth/getproducts",{
                    headers:{
                        "Authorization": `Bearer ${token}`,
                    },
                });
                console.log(response.data[0].name);
                setProducts(response.data.map((prod)=><Link to={"/product/"+prod.id}><Product name={prod.name} rating={prod.rating} rate={prod.amount} url={prod.url}/></Link>));
            }
            catch(error)
            {
                console.error(error.message);
            }
        }
        fun();
    }
    ,[]
    )
    return(
        <div className="products">
            <div className="allprod">
                {products}
            </div>
        </div>
    )
}
export default Products;