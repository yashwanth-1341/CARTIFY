import React, { useEffect, useState } from "react";
import { ProductCard } from "../components";
import { UseTitle } from "../hooks/UseTitle";

export const Home = () => {
  const [products, setProducts] = useState([]);
  UseTitle('Home')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products); // Assuming the response structure contains a 'products' array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
