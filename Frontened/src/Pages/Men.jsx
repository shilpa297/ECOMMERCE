import React from 'react'
import Footer from '../Components/Footer/Footer'
import Mainn from './Mainn'
import NewCollection from '../Components/NewCollection/NewCollection'



const Men = ({ image, title, price, oldPrice }) => {
  return (
    <div>
        <Mainn />
        
        <h1>MENS WEAR</h1>
    
        <NewCollection
        image="https://blog.g3fashion.com/wp-content/uploads/2021/06/mens-casual-wear.jpg"
        title="blue jacket"
        price="45"
        oldPrice="80"
        rating="4.0"
      />
       <NewCollection
        image="https://dressland.co.in/wp-content/uploads/2022/09/photo-1617137968427-85924c800a22.jpeg"
        title="blue suit"
        price="50"
        oldPrice="80"
        rating="3.0"
      />
       <NewCollection
        image="https://www.sainly.com/cdn/shop/files/men_selegantweddingsuit-2023-08-09T093303.489.png?v=1691553974"
        title="white formal shirt"
        price="50"
        oldPrice="90"
        rating="3.0"
      />
       <NewCollection
        image="https://adserve.iws.in/amp-demo/img/mens-denim1.jpg"
        title="blue checks shirt"
        price="90"
        oldPrice="110"
        rating="4.5"
      />
       <NewCollection
        image="https://img0.junaroad.com/uiproducts/17777107/zoom_0-1622893938.jpg"
        title="blue white t-shirt"
        price="45"
        oldPrice="80"
        rating="3.5"
      />
       <NewCollection
        image="https://www.jeyachandran.com/cdn/shop/files/shirts.png?crop=center&height=2048&v=1726579491&width=2048"
        title="blue-white ckecks shirt"
        price="45"
        oldPrice="80"
        rating="3.5"
      />
       <NewCollection
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiN1jXo-me2doSA98zEtN1RqbrWofHECGIw&s"
        title="blue black checks shirt"
        price="60"
        oldPrice="87"
        rating="3.5"
      />
       <NewCollection
        image="https://images.meesho.com/images/products/435746222/7ijie_512.webp"
        title="Dark-blue formal shirt"
        price="70"
        oldPrice="90"
        rating="5"
      />
       <NewCollection
        image="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/formal_wear_for_men.jpg?v=1677132850"
        title="purple formal shirt"
        price="60"
        oldPrice="80"
        rating="4.5"
      />
       <NewCollection
        image="https://img.faballey.com/images/Product/XMS03166A/d3.jpg"
        title="blue kurta"
        price="79"
        oldPrice="100"
        rating="4.0"
      />
      
       <Footer/>
    </div>
  )
}

export default Men