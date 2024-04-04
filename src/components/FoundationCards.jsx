import { useSelector } from "react-redux";
import FoundationCard from "./FoundationCard";

import { Carousel } from 'antd';
import { useEffect } from "react";
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



function FoundationCards(){
    const {foundations}=useSelector(state=>state.foundations);
    // useEffect(()=>{
        
        let arr=[];
        // console.log(foundations.length)
        // useEffect(()=>{
            for (let i=0;i<foundations.length; i+=4){
                // console.log(i);
                arr.push([i, i+4]);
                // arr.push(foundations.slice(i, i+4).map((foundation=>
            
                //     <FoundationCard key={foundation.id}   {...foundation}/>
                //    )));
        
            }
        // }, [])

    // console.log(arr)
    // }
    // ,[])


return (

      <div style={{display:'grid',gridTemplateColumns:'repeat(4,15vw)', gridAutoRows:'max-content',rowGap:50,columnGap:"7%",  justifyContent:'center', marginBottom:50}}>
{foundations.map(foundation=>

    <FoundationCard key={foundation.id} {...foundation}/>
     )} 
     </div>
    //  </Carousel>
  
)
}
export default FoundationCards;



    //  <Carousel  autoplay>

{/* 
    {arr.map(el=>
    <div key={el[0]} style={{display:'flex', justifyContent:'space-around'}}  >
{console.log(el)}
        {foundations.slice(el[0], el[1]).map(foundation=>{
     
      <FoundationCard key={foundation.id}   {...foundation}/>
        })}
      </div>)} */}