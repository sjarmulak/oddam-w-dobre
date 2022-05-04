import React from "react";
import "../scss/HomeOrganizations.scss";
import Decoration from "../assets/Decoration.svg";
import { useEffect, useState } from "react";

export default function HomeOrganizations() {
  const [data, setData] = useState({
    id: "",
    title: "",
    description: "",
    items: [],
  });
  const [currOption, setCurrOption] = useState("fundacje"); // wybieramy jedną z trzech kategorii
  const [page, setPage] = useState(0);

  const URL = "http://localhost:3000";

  async function getData(successCallback, option) {
    const response = await fetch(`${URL}/${option}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const retrievedData = await response.json();

    if (typeof successCallback === "function") {
      successCallback(retrievedData[0]);
    }
  }

  useEffect(() => {
    getData(setData, currOption);
  }, []);

  const handleChange = (opt) => {
    setCurrOption(opt);
    getData(setData, opt);
    setPage(0);
  };

  const getItems = () => {
    const offset = page * 3;
    return data?.items.length ? data.items.slice(offset, offset + 3) : [];
  };

  const getPagination = () => {
    console.log(data.items);
    return new Array(Math.ceil(data?.items?.length / 3))
      .fill(null)
      .map((_, i) => (
        <span
          key={i}
          onClick={() => setPage(i)}
          style={{ borderWidth: page == i ? "1px" : "0px" }}
        >
          {i + 1}
        </span>
      ));
  };

  return (
    <section id="organizations">
      <div className="container">
        <h1>Komu pomagamy?</h1>
        <img className="decoration" src={Decoration} alt="" width="250px" />
        <div className="org-names">
          <span
            id="fundacje"
            onClick={() => handleChange("fundacje")}
            style={{ borderWidth: currOption == "fundacje" ? "1px" : "0px" }}
          >
            Fundacjom
          </span>
          <span
            id="organizacje"
            onClick={() => handleChange("organizacje")}
            style={{ borderWidth: currOption == "organizacje" ? "1px" : "0px" }}
          >
            Organizacjom pozarządowym
          </span>
          <span
            id="zbiorki"
            onClick={() => handleChange("zbiorki")}
            style={{ borderWidth: currOption == "zbiorki" ? "1px" : "0px" }}
          >
            Lokalnym zbiórkom
          </span>
        </div>
        <p className="org-section-description">{data.description}</p>
        <ul>
          {getItems().map((el) => {
            return (
              <li key={el.id}>
                <h4>{el.title}</h4>
                <h5>{el.description}</h5>
                <span>{el.items}</span>
              </li>
            );
          })}
        </ul>
        <div className="org-names">{getPagination()}</div>
      </div>
    </section>
  );
}
