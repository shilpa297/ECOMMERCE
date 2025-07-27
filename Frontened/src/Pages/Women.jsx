import React from 'react'
import Footer from '../Components/Footer/Footer'
import Mainn from './Mainn'
import NewCollection from '../Components/NewCollection/NewCollection'



const Women = ({ image, title, price, oldPrice }) => {
  return (
    <div>
        <Mainn />
        
        <h1>WOMENS WEAR</h1>
    
        <NewCollection
        image="https://www.bullionknot.com/cdn/shop/files/04_optimized_500_54eff23b-2b8a-4456-abcc-54d3b946c04c.jpg"
        title="blue chudidar"
        price="50"
        oldPrice="80"
        rating="4.5"
      />
       <NewCollection
        image="https://images.meesho.com/images/products/428091579/jwebr_512.webp"
        title="navy blue womens wear"
        price="50"
        oldPrice="80"
        rating="3.0"
      />
       <NewCollection
        image="https://www.lavanyathelabel.com/cdn/shop/files/01_LBL101KS352_6_1200x.jpg?v=1740035461"
        title="Red lehenga"
        price="50"
        oldPrice="90"
        rating="3.5"
      />
       <NewCollection
        image="https://suvidhafashion.com/cdn/shop/files/15-07Website01.jpg?v=1689669106&width=600"
        title="purple night wear"
        price="90"
        oldPrice="110"
        rating="4"
      />
       <NewCollection
        image="https://mahezon.in/cdn/shop/files/IMG-20240227-WA0314_800x1026_crop_center@2x.jpg?v=1710939117"
        title="meroon etnic wear"
        price="45"
        oldPrice="80"
        rating="3.5"
      />
       <NewCollection
        image="https://www.jiomart.com/images/product/original/rvd31dgusl/sancia-women-georgette-ethnic-top-palazzo-ethnic-jacket-set-kurta-set-for-women-ethnic-wear-set-for-women-casual-indian-wear-teal-l-product-images-rvd31dgusl-0-202310251853.jpg?im=Resize=(500,630)"
        title="green-lehenga"
        price="45"
        oldPrice="80"
        rating="4.5"
      />
       <NewCollection
        image="https://royalanarkali.com/wp-content/uploads/2021/08/maisha-womens-wear-cream-color-heavy-net-embroidered-stone-work-sharara-suit.jpg"
        title="cream full lehenga"
        price="60"
        oldPrice="87"
        rating="4.5"
      />
       <NewCollection
        image="https://m.media-amazon.com/images/I/61-MlTeQ1lL._UY1100_.jpg"
        title="white full lehenga"
        price="70"
        oldPrice="90"
        rating="5"
      />
       <NewCollection
        image="https://images.meesho.com/images/products/386329438/1bjhj_512.webp"
        title="violet western wear"
        price="60"
        oldPrice="80"
        rating="4.5"
      />
       <NewCollection
        image="https://www.theambitioncollective.in/cdn/shop/files/Myclo7464.jpg?v=1697112306"
        title="business white formal"
        price="79"
        oldPrice="100"
        rating="3.5"
      />
      
       <Footer/>
    </div>
  )
}

export default Women
