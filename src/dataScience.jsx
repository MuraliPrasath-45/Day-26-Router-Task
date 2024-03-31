import React from "react";

function DataScience(){
    const data2=[{
        img :"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
        title:"Top 10 Data Science Tools in 2023",
        date:"November 1, 2023"
      },
      {
        img :"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
        title:"Useful Python Libraries & Tools for Data Science Beginners",
        date:"September 29, 2023"
      },
      {
        img :"https://www.tqmi.com/wp-content/uploads/2022/02/Data-Science-4.webp",
        title:"Best Way to Learn Data Science in 2023",
        date:"July 28, 2023"
      }]
      return(
        <>
        <h1>Data Science</h1>
        <div className="cards">
        {data2.map((val,inx)=>(
          <Tt key={inx}
          img={val.img}
          title={val.title}
          date={val.date}
         />
        ))}</div></>
    )
}
export default DataScience

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