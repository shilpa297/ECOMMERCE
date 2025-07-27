import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import './Shop.css'
import Offer from '../Components/Offer/Offer'
import NewCollection from '../Components/NewCollection/NewCollection'
import  NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

function Shop() {
  return (
    <div>
        <Hero/>
        
         
        <div className="popular-wrappe">
        
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>WOMENS WEAR</h1>
        <div className="popular-wrapper">
        <Popular 
        image="https://img.faballey.com/images/Product/IPL00255Z/d3.jpg"
        title="Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse"
        price="60"
        oldPrice="100.5"
      />
      <Popular
        image="https://m.media-amazon.com/images/I/5132v5b1+bL._UY1100_.jpg"
        title="Red Printed Summer Blouse"
        price="45"
        oldPrice="80"
      />
      <Popular
        image="https://www.lavanyathelabel.com/cdn/shop/files/LBCL101KS238_1.jpg?v=1740035570"
        title="lehanga blue"
        price="45"
        oldPrice="80"
      />
      <Popular
        image="https://shopzters.com/cdn/shop/files/SHOPZTERSPRODUCTRESIZE-01_6ea8ade0-5eba-47c3-9eec-61be8969a4b0_1080x.png.jpg?v=1706696752npm start"
        title="croptop"
        price="45"
        oldPrice="80"
      />
      </div>
      </div>
      <Offer/>
       <h1 style={{ textAlign: "center", marginTop: "20px" }}>NEW COLLECTIONS</h1>
      <div className="popular-wrapper">
      <NewCollection 
        image="https://img.faballey.com/images/Product/IPL00255Z/d3.jpg"
        title="Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse"
        price="60"
        oldPrice="100.5"
        rating="4.5"
      />
      <NewCollection
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_V_iyfYaJU1gdx9_lww5b5x57r_VvfrhbQ&s"
        title="Green long frock"
        price="89"
        oldPrice="100"
        rating="3"
      />
      <NewCollection
        image="https://img.faballey.com/images/Product/XKS03765F/d3.jpg"
        title="yellow long kurta"
        price="80"
        oldPrice="190"
        rating="7"
      />
      <NewCollection
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_SgvIQxZBrZmZyNEsibzO7KQBwEIH3XWxg&s"
        title="shirt with blue flowers"
        price="50"
        oldPrice="78"
        rating="4"
      />
      <NewCollection
        image="https://m.media-amazon.com/images/I/41k8b5UDbML._UY1100_.jpg"
        title="plain violet shirt"
        price="50"
        oldPrice="100"
        rating="3"
      />
      <NewCollection
        image="https://liandli.in/cdn/shop/files/LICD118_5_-min_800x.jpg?v=1695182482"
        title="blue frock"
        price="29"
        oldPrice="55"
        rating="5"
      />
      <NewCollection
        image="https://stimg.b-cdn.net/images/800/data/2022y/April/Festival-Wear-Cream-Fancy-Party-Wear-Readymade-Kids-Lehenga-Choli-7771.jpg"
        title="crop-top"
        price="80"
        oldPrice="90"
        rating="4.5"
      />
      <NewCollection
        image="https://www.mumkins.in/cdn/shop/files/boys-kurta-pajama-bs10ish01-sky-blue-1.jpg?v=1725517681&width=1080"
        title="blue kurta"
        price="60"
        oldPrice="100.5"
        rating="4.0"
      />
      <NewCollection
        image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/DECEMBER/24/HKlO8WbV_b39c38424cc347a4a16fa29ca79b2455.jpg"
        title="blue traditional wear"
        price="45"
        oldPrice="100.5"
        rating="4.0"
      />
      <NewCollection
        image="https://6edesign.com/wp-content/uploads/2024/03/party-outfits-for-men4.jpg.webp"
        title="white and black checks mens wear shirt"
        price="60"
        oldPrice="100.5"
        rating="3.0"
      />
      
      </div>
      <NewsLetter/>
      <Footer/>
      
      
    </div>
  )
}

export default Shop
