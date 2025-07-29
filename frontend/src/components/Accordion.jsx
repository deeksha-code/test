import { useState } from "react";

function Accordion() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        paddingTop: "30px",
      }}
    >
      <div>
        <>
          {/* <h3>Content1 &#9654; &#9660;</h3> */}
          {/* <h3>Content1 {isOpen ? '▼' : '▶'}</h3> */}
          <h3>Content1 <span onClick={()=>{setIsOpen((open)=>!open)}}>{isOpen?String.fromCharCode(9660) : String.fromCharCode(9654)}</span></h3>
          {isOpen?<>Hello of content1</>:null}
        </>
      </div>

      <div>
        <>
         <h3>Content2 <span onClick={()=>{setIsOpen((open)=>!open)}}>{isOpen?String.fromCharCode(9660) : String.fromCharCode(9654)}</span></h3>
          {isOpen?<>Hello of content2</>:null}
        </>
      </div>

      <div>
        <>
                   <h3>Content3 <span onClick={()=>{setIsOpen((open)=>!open)}}>{isOpen?String.fromCharCode(9660) : String.fromCharCode(9654)}</span></h3>
          {isOpen?<>Hello of content3</>:null}
        </>
      </div>

      <div>
        <>
                  <h3>Content4 <span onClick={()=>{setIsOpen((open)=>!open)}}>{isOpen?String.fromCharCode(9660) : String.fromCharCode(9654)}</span></h3>
          {isOpen?<>Hello of content4</>:null}
        </>
      </div>
    </div>
  );
}
export default Accordion;
