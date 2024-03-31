import React from "react";

function CyberSecurity(){
    const data4=[{
        img :"https://www.proschoolonline.com/wp-content/uploads/2021/02/Cyber-Security-768x461.webp",
        title:"Top 10 Ethical Hacking Books for Beginner to Advanced",
        date:"November 21, 2022"
      },
      {
        img :"https://easydmarc.com/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/05/What-is-Password-Attack-in-Cyber-Security_.jpg.webp",
        title:"8 Different Types of Cybersecurity and Threats Involved",
        date:"November 9, 2022"
      },
      {
        img :"https://www.wrk.com/media/images/sales-cyber-security.2e16d0ba.fill-1600x900.format-webp.webp",
        title:"How Is Cyber Security Important To Our Lives?",
        date:"November 10, 2020"
      }]
      return(
        <>
        <h1>Cyber Security</h1>
        <div className="cards">
        {data4.map((val,inx)=>(
          <Tt key={inx}
          img={val.img}
          title={val.title}
          date={val.date}
         />
        ))}</div></>
    )
}
export default CyberSecurity

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