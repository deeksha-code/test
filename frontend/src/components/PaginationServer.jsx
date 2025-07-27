import { useEffect, useState } from "react";
import axios from "axios"

function PaginationServer() {
  const dataPerPage = 13;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // const data = await fetch("https://dummyjson.com/products?limit=200");
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:5000/items?page=${currentPage}&limit=${dataPerPage}`
      );
      console.log(response);
      // setCurrentPage(response.data.currentPage);
      setData(response.data.items);
      setTotalItems(response.data.totalItems)
      setTotalPages(response.data.totalPages)
    }

    fetchData();
  }, [currentPage]);

  const handlePrevious = () => {
    console.log("entered handle previous function");
    if (currentPage === 1) return;
    setCurrentPage((page) => page - 1);
  };
  const handleNext = () => {
    console.log("entered handle next function");
    if (currentPage === totalPages) return;
    setCurrentPage((page) => page + 1);
  };
  const handlePageChange = (value) => {
    console.log("entered handle page change function");
    setCurrentPage(value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          paddingTop: "20px",
        }}
      >
        {data.map((data, i) => {
          return <div key={i}>{data.name}</div>;
        })}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          paddingTop: "30px",
        }}
      >
        <button onClick={handlePrevious}>Previous</button>
        {[...Array(totalPages).keys()].map((i) => {
          //  return ((i+1)===currentPage)?<button key={i+1} onClick={()=>handlePageChange(i+1)} style={{backgroundColor:"red"}}>{i+1}</button>:<button key={i+1} onClick={()=>handlePageChange(i+1)}>{i+1}</button>}
          return (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              style={{ backgroundColor: currentPage === i + 1 ? "red" : "" }}
            >
              {i + 1}
            </button>
          );
        })}
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
export default PaginationServer;
