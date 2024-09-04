import React ,{useState}from 'react'
import Card from './Card';
import s1 from '../assets/s1.png'
// import '../css/Card.module.css'

export default function Ride() {

  // const [focusedIndex, setFocusedIndex] = useState(null);

  // const handleSizeClick = (index) => {
  //   setFocusedIndex(index);};
  const RideData=[
        {image:s1, 
        size1:'Drum', 
        size2:'Disc', 
        size3:'Standard', 
        product:'Petrol Two Wheeler', 
        productName:'Access 125', 
        price:'₹120/hr', 
        desc:'Embrace the urban streets with a perfect blend of elegance and performance. From seamless commuting to dynamic city explorations, the Access 125 offers a comfortable ride that redefines your daily journeys.' 
      },
      {
        image:s1, 
        size1:'Drum', 
        size2:'Disc', 
        size3:'Standard', 
        product:'Petrol Two Wheeler', 
        productName:'Access 125', 
        price:'₹120/hr', 
        desc:'Embrace the urban streets with a perfect blend of elegance and performance. From seamless commuting to dynamic city explorations, the Access 125 offers a comfortable ride that redefines your daily journeys.' 
      }
  ];

  return (
    <div>
      <div className="wrap">
      {RideData.map((card, index) => (
                    <Card key={index} image={card.image} size1={card.size1} size2={card.size2} size3={card.size3} product={card.product} productName={card.productName} price={card.price} desc={card.desc} />
                ))}
        </div>
    </div>
  )
}
