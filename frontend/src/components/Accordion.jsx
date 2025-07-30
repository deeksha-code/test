import { useState } from "react";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const handleClick = (i) => {
    if (index === i) { //If we click on the same Item again
      setIsOpen((open) => !open);
    } else {//If we click on other items
      setIsOpen(true);
      setIndex(i);
    }
  };
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
          <h3>
            Content1{" "}
            <span style={{cursor:"pointer"}} onClick={() => handleClick(1)}>
              {isOpen && index === 1
                ? String.fromCharCode(9660)
                : String.fromCharCode(9654)}
            </span>
          </h3>
          {isOpen && index === 1 ? <>Hello of content1</> : null}
        </>
      </div>

      <div>
        <>
          <h3>
            Content2{" "}
            <span style={{cursor:"pointer"}} onClick={() => handleClick(2)}>
              {isOpen && index === 2
                ? String.fromCharCode(9660)
                : String.fromCharCode(9654)}
            </span>
          </h3>
          {isOpen && index == 2 ? <>Hello of content2</> : null}
        </>
      </div>

      <div>
        <>
          <h3>
            Content3{" "}
            <span style={{cursor:"pointer"}} onClick={() => handleClick(3)}>
              {isOpen && index === 3
                ? String.fromCharCode(9660)
                : String.fromCharCode(9654)}
            </span>
          </h3>
          {isOpen && index === 3 ? <>Hello of content3</> : null}
        </>
      </div>

      <div>
        <>
          <h3>
            Content4{" "}
            <span style={{cursor:"pointer"}} onClick={() => handleClick(4)}>
              {isOpen && index === 4
                ? String.fromCharCode(9660)
                : String.fromCharCode(9654)}
            </span>
          </h3>
          {isOpen && index === 4 ? <>Hello of content4</> : null}
        </>
      </div>
    </div>
  );
}
export default Accordion;
