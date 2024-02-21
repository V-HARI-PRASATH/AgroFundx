import React from "react";
import { Rating } from "@mui/material";
import './Product.css';

function Product(props)
{
    return(
    <div className="product">
        <img src={props.url}></img>
        <div className="protext">
            <h2>{props.name}</h2>
            <h2>${props.rate}</h2>
            <p> <Rating name="read-only" value={props.rating} precision={0.5} readOnly />   {props.rating}</p>
        </div>
    </div>)
}
export default Product;