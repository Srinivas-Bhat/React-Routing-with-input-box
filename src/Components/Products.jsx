import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

const Products = () => {
  const {state} = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [text, setText] = useState(searchParams.get("text") || "");
  useEffect(() => {
    setLoading(true);
    
    fetch(`http://localhost:8080/productDetails?_page=${page}&_limit=3`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res);
        setLoading(false);
      });
  }, [page]);
  useEffect(() => {
    setSearchParams({
      page,
      q : text
    })
  }, [page, text])
  if(!state.isAuth) {
    return <Navigate to="/login" />
  }
  const handleSearchClick = () => {
    fetch(`http://localhost:8080/productDetails?q=${text}`)
    .then((res) => res.json())
    .then((res) => {
      setData(res);
    }, [text])
  }
  return (
    <div>
      <h1>Products</h1>
      {loading ? <h2>Loading...!! Please wait.</h2> : null}
      <div>
        <button disabled={page===1} onClick={() => setPage(1)}>1</button>
        <button disabled={page===2} onClick={() => setPage(2)}>2</button>
      </div>
      <div>
        <input type="text" value={text}placeholder="Enter Something" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div>
        {data.map((el) => (
          <div
            key={el.id}
            style={{
              border: "2px solid black",
              width: "250px",
              margin: "auto",
              marginTop: '10px',
              padding: '10px '
            }}
          >
            <img src={el.url} alt={el.name} width="150px" height="230px" />
            <h2>{el.name}</h2>
            <h4>Rs.{el.price}</h4>
            <Link to={`/products/${el.id}`}>Show more details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
