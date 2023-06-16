import React, {Component} from 'react'
import styled from "styled-components"
import Product from '../components/Product'
import products from '../products.json'
export default class Products extends Component {
    render (){
        return (
        <ProductsWrapper>
            {
                products.map((product,index)=>(
                    <Product product={product} key={index}></Product>
                )) 
            }
         </ProductsWrapper>
          )
    }
   
}
const ProductsWrapper = styled.div`
text-align: center;
display: flex;`;
