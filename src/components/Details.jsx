import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await axios(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);


  return (
    product ? 
    <div className="flex justify-center items-center h-screen w-full px-64 gap-12">
      <img src={product.image} alt="" className="h-80 w-72 object-contain"/>
      <div className="text-xl">
        <h1 className="font-bold">{product.title}</h1>
        <h2><span className="font-semibold">Price: ₹</span>{product.price}</h2>
        <p><span className="font-semibold">Description: </span>{product.description}</p>
        <div>
        <Link>Edit</Link>
        <Link>Delet</Link>
        </div>
      </div>
    </div>: <Loading></Loading>
  );
}

export default Details;
