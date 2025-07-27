import { useEffect, useState } from "react";

const data = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
  "item11",
  "item12",
  "item13",
  "item14",
  "item15",
  "item16",
  "item17",
  "item18",
  "item19",
  "item20",
  "item21",
  "item22",
  "item23",
  "item24",
  "item25",
  "item26",
  "item27",
  "item28",
  "item29",
  "item30",
  "item31",
  "item32",
  "item33",
  "item34",
  "item35",
  "item36",
  "item37",
  "item38",
  "item39",
  "item40",
  "item41",
  "item42",
  "item43",
  "item44",
  "item45",
  "item46",
  "item47",
  "item48",
  "item49",
  "item50",
  "item51",
  "item52",
  "item53",
  "item54",
  "item55",
  "item56",
  "item57",
  "item58",
  "item59",
  "item60",
  "item61",
  "item62",
  "item63",
  "item64",
  "item65",
  "item66",
  "item67",
  "item68",
  "item69",
  "item70",
  "item71",
  "item72",
  "item73",
  "item74",
  "item75",
  "item76",
  "item77",
  "item78",
  "item79",
  "item80",
  "item81",
  "item82",
  "item83",
  "item84",
  "item85",
  "item86",
  "item87",
  "item88",
  "item89",
  "item90",
  "item91",
  "item92",
  "item93",
  "item94",
  "item95",
  "item96",
  "item97",
  "item98",
  "item99",
  "item100",
  "item101",
  "item102",
  "item103",
  "item104",
  "item105",
  "item106",
  "item107",
  "item108",
  "item109",
  "item110",
  "item111",
  "item112",
  "item113",
  "item114",
  "item115",
  "item116",
  "item117",
  "item118",
  "item119",
  "item120",
  "item121",
  "item122",
  "item123",
  "item124",
  "item125",
  "item126",
  "item127",
  "item128",
  "item129",
  "item130",
];
function Pagination() {
  const totalData = data.length;
  const dataPerPage = 13;

  const totalPages = Math.ceil(totalData / dataPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * dataPerPage;
  const end = start + dataPerPage;
  const PageData = data.slice(start, end);

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
        {PageData.map((data, i) => {
          return <div key={i}>{data}</div>;
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
export default Pagination;
