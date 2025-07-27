import React from 'react'
import Footer from '../Components/Footer/Footer'
import Mainn from './Mainn'
import NewCollection from '../Components/NewCollection/NewCollection'



const Women = ({ image, title, price, oldPrice }) => {
  return (
    <div>
        <Mainn />
        
        <h1>KIDS WEAR</h1>
    
        <NewCollection
        image="https://www.foreverkidz.in/cdn/shop/files/15.1.jpg?crop=center&height=2100&v=1746014654&width=1500"
        title="Repunzel purple dress"
        price="50"
        oldPrice="80"
        rating="4.5"
      />
       <NewCollection
        image="https://kidscuddles.com/cdn/shop/files/5d.jpg?v=1702101166&width=1445"
        title="Blue children suit"
        price="50"
        oldPrice="80"
        rating="4"
      />
       <NewCollection
        image="https://images.wholesalesalwar.com/2022y/May/Pink-Party-Wear-Net-Kids-Readymade-Dress-KESARIKIDS-31.jpg"
        title="pink party wear"
        price="50"
        oldPrice="90"
        rating="3.5"
      />
       <NewCollection
        image="https://www.mumkins.in/cdn/shop/files/boys-kurta-pajama-bs10ish01-sky-blue-1.jpg?v=1725517681&width=1080"
        title="sky blue flower print wear"
        price="90"
        oldPrice="110"
        rating="4.5"
      />
       <NewCollection
        image="https://www.foreverkidz.in/cdn/shop/files/Blushing_Pink_Party_Dress-5015016.jpg?crop=center&height=2100&v=1746014765&width=1500"
        title="Girls party dress"
        price="45"
        oldPrice="80"
        rating="5"
      />
       <NewCollection
        image="https://stanwellskids.in/cdn/shop/files/blue-_1.jpg?v=1701244218"
        title="Blue-frock"
        price="45"
        oldPrice="80"
        rating="4.0"
      />
       <NewCollection
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwd2vDTZXnalPS864jUP0-BGqUVpWK21hsg&s"
        title="party wear lehenga"
        price="60"
        oldPrice="87"
        rating="3.0"
      />
       <NewCollection
        image="https://static.wixstatic.com/media/4f249a_828aa1e3fcb8410a95698318859bce9e~mv2.jpg/v1/fill/w_560,h_835,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4f249a_828aa1e3fcb8410a95698318859bce9e~mv2.jpg"
        title="flower dress"
        price="70"
        oldPrice="90"
        rating="3.5"
      />
       <NewCollection
        image="https://www.libas.in/cdn/shop/files/1_4c57c998-1a9a-42ea-a937-31a2d9777988.jpg?v=1749791861&width=1080"
        title="Girls ethnic wear"
        price="60"
        oldPrice="80"
        rating="5"
      />
       <NewCollection
        image="https://fashion-wear.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-21-at-13.39.57-jpeg.webp"
        title="kids t-shirt"
        price="79"
        oldPrice="100"
        rating="4.5"
      />
      
       <Footer/>
    </div>
  )
}

export default Women

