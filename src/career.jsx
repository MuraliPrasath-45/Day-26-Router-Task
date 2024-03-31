import React from "react";

function Career(){
    const data3=[ {
        img :"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-based-Company-Vs-Service-based-Company.webp",
        title:"Product-based Company Vs Service-based Company: Which is Best Choice?",
        date:"November 2, 2023"
      },
      {
        img :"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Machine-Learning-Engineers.webp",
        title:"Top 5 Product-Based Companies for Machine Learning Engineers",
        date:"October 11, 2023"
      },
      {
        img :"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters.webp",
        title:"Everything You Should Know About ChatGPT & Why It Matters?",
        date:"September 29, 2023"
      }]
      return(
        <>
        <h1>Career</h1>
        <div className="cards">
        {data3.map((val,inx)=>(
          <Tt key={inx}
          img={val.img}
          title={val.title}
          date={val.date}
         />
        ))}</div></>
    )
}
export default Career

function Tt({img,title,date}){
    return(
        <div className="card">
            <img src={img} alt="" />
            <h3 >{title}</h3>
            <p id="para">hello world</p>
            <a href="" id="rm">READ MORE</a>
            <hr/>
            <p id="date">{date}</p>
        </div>
    )
}