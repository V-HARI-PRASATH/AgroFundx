import React, { useEffect, useState } from "react";
import Product from "../Components/Product.js"
import './Eachproduct.css';
import Custbtn from "../Components/Custbtn.js";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Eachproduct()
{
    const params=useParams();
    const [product,setProducts]=useState({name:"",rating:"",rate:"",url:""});
    useEffect(
        ()=>{
            async function func()
            {
                const token=localStorage.getItem('jwtToken');
                const url="http://localhost:8080/api/v1/auth/getproduct/"+params.id;
                try{
                    const response=await axios.get(url,{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                    setProducts(response.data);
                }
                catch(error)
                {
                    console.error(error.message);
                }
            }
            func();
        },[]
    )
    return(
        <div className="eachproduct">
            <div className="productinfo">
                <Product name={product.name} rating={product.rating} rate={product.amount} url={product.url}/>
                <Custbtn lable="Buy"/>
                <Custbtn lable="Add To Cart"/>
            </div>
        </div>
    )
}

export default Eachproduct;