import React, {Component} from "react";
import { styled } from "styled-components";
import products from './Products'
import Product from "../components/Product";

export default class ProductDetails extends Component{
    render(){
        const name = this.props.match.params.name;
        const toRender = products.filter((products) =>
        products.name===name)[0]
        return(
            <ProductsWrapper>
                {toRender ? (<Product product={toRender}></Product>) : (<p>Product not found</p>)}
        </ProductsWrapper>
        )
    }
}
