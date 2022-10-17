import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import Style from "./SearchResult.module.scss";

const SearchResult = (props) => {
  const [Card, setCard] = useState();

  var data = props.ResultData;
  let firstLetterUpper = data.slice(0, 1).toUpperCase();

  let Result = firstLetterUpper + data.slice(1, data.length).toLowerCase();

  useEffect(() => {
    console.log("Updated");
    axios.get("http://localhost:2000/api/allQuestions").then((res) => {
      let data = res.data;

      let filteredData = res.data;

      for (let i = 0; data.length < 0; i++) {
        filteredData = data[i].includes.includes(props.ResultData);
      }

      let searchCard = filteredData.map((card) => (
        <SearchCard allData={card} />
      ));

      setCard(searchCard);

      console.log(filteredData);
    });
  }, [props.ResultData]);

  return (
    <div
      className={props.ResultsModal ? Style.Container : Style.ContainerClosed}
    >
      <h3>
        Showing Results For: <u className={Style.Underline}>{Result}</u>
      </h3>
      <p>results</p>
      <div className={Style.ResultContainer}>{Card}</div>
    </div>
  );
};

export default SearchResult;
