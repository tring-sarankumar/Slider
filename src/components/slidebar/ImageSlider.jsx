import React, { useState } from 'react';
import './ImageSlider.css';

import { BsFillCaretLeftFill,BsFillCaretRightFill} from 'react-icons/bs';
import {  Link } from "react-router-dom";

function ImageSlider() {
  
  const imgs=[
    {id:0,value:"https://bitnetinfotech.com/wp-content/uploads/2022/08/Frameworks-for-React-JS.jpg", url:"/React"},
    {id:1,value:"https://miro.medium.com/max/1400/1*xdo0UBpyszvD7-7EH4TkIA.png", url:"/Node"},
    {id:2,value:"https://miro.medium.com/max/1400/1*XP-mZOrIqX7OsFInN2ngRQ.png", url:"/Express"},
    {id:3,value:"https://redux.js.org/img/redux-logo-landscape.png", url:"/Redux"},
    {id:4,value:"https://149841302.v2.pressablecdn.com/wp-content/uploads/2022/02/tailwindcss-templates.png", url:"/TailWind"},
    {id:5,value:"https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.png", url:"/PostgreSql"},
    {id:6,value:"https://res.cloudinary.com/practicaldev/image/fetch/s--g1u_jxZy--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4unrrweuaj1wyh25npgt.jpeg", url:"/NextJs"},
    {id:7,value:"https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png", url:"/TypeScript"},
  
  ]
  const [wordData,setWordData]=useState(imgs[0]);

  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }

  return (
    <div className="main">


      <div class="arr">
      

      <button onClick={
        () =>{
          const wordSlider=imgs[(wordData.id-1)<=-1 ? imgs.length-1 : wordData.id-1];
          setWordData(wordSlider)
        }
      }><BsFillCaretLeftFill size={40} /></button>

      <Link to={wordData.url}>
        <img src={wordData.value} height="300" width="100%" alt='img' /> 
      </Link>

      <button onClick={
        () =>{
          const wordSlider=imgs[(wordData.id+1)>=imgs.length ? 0:wordData.id+1];
          setWordData(wordSlider)
        }
      }><BsFillCaretRightFill size={40} /></button>
      </div>



      <div className='flex_row'>

        {imgs.map((data,i)=>
        <div className="thumbnail"  >
          <img className={wordData.id===i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" alt='img'/>
        </div>
        )}

      </div>
    </div>
  );
}

export default ImageSlider;
