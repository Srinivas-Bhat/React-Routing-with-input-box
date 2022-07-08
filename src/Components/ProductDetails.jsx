import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [datas, setDatas] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/productDetails/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("im from details", res);
        setDatas(res);
      });
  }, []);

  return (
    <div>
      <img src={datas.url} alt={datas.name} width="150px" height="250px" />
      <h2>{datas.name}</h2>
      <h4>Rs.{datas.price}</h4>
      <p>{datas.des}</p>
      <Link to="/products">Go Back</Link>
    </div>
  );
};

export default ProductDetails;
