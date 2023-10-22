import React from 'react'

const ReadMail = (props) => {
  return (
     
    <div className="email active dflex" > 

    <div className="left" >
        
    <div className="userImage">
     <p>F</p>
    </div>

    <div className="description">

     <div className="from dflex"> 
     <p>From: </p>
     <p> {props.from} </p>
     </div>

     <div className="subject dflex"> 
     <p>Subject: </p>
     <p> {props.subject} </p>
     </div>

     <div className="des dflex"> 
     <p> {props.desc}  </p>

     </div>

     <div className="date dflex"> 
     <p>26/02/2020 10:30am</p>
     <p> Favorite </p>
     </div>
     
    </div>
 

    </div>

    <div className="right" >
        <h1>Loreum Ipsum</h1>
        <p>26/02/2020 10:30AM</p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis obcaecati inventore odio explicabo praesentium quisquam nihil animi distinctio, quasi modi repellendus exercitationem fugit totam vitae quia aut ab provident.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dolor vel porro eos quo dignissimos accusamus atque reprehenderit esse dolores, maiores consectetur recusandae reiciendis, minus inventore ullam quasi. Sunt, illum.
        </p>

    </div>

   </div>

  )
}

export default ReadMail