"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "../styles.css";

interface Product {
  _id: string;
  URL: string;
  Product_Name: string;
  Product_ID: string;
  Listing_Price: number;
  Price: number;
  Discount: number;
  Brand: string;
  Description: string;
  Rating: number;
  Reviews: number;
  Images: string[];
  Last_Visited: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const favoritesList = localStorage.getItem("favorites");
        const favoriteIds: string[] = favoritesList
          ? JSON.parse(favoritesList)
          : [];
        const productRequests = favoriteIds.map((id: string) =>
          fetch(`http://localhost:3001/products/${id}`).then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to fetch product with ID ${id}`);
            }
            return res.json();
          })
        );

        const products = await Promise.all(productRequests);
        setFavorites(products);
      } catch (error) {
        console.error("Failed to fetch favorites", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <>
      <div className="favorites-container max-w-[1200px] mx-auto my-0 p-4">
        {loading ? (
          <p className="flex justify-center items-center h-auto md:h-[100vh]">
            <span className="loader"></span>
          </p>
        ) : favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5">
            {favorites.map((product) => (
              <div
                key={product._id}
                className="product-card p-4 border rounded shadow-md"
              >
                {/* {product.Images[0] && (
                <span>
                  <HeartIcon className="text-red-600 relative top-2 left-[80%]" />
                </span>
              )} */}
                {product.Images[0] && (
                  <Image
                    width={1728}
                    height={2160}
                    priority={true}
                    quality={100}
                    src={product.Images[0]}
                    alt={product.Product_ID}
                    className="w-[300px] md:w-[500px] h-auto"
                  />
                )}
                {product.Product_Name && (
                  <h2 className="text-xl mb-2 font-semibold mt-5">
                    {product.Product_Name}
                  </h2>
                )}
                {product.Description && (
                  <p className="text-sm mb-2">{product.Description}</p>
                )}
                {product.Price && (
                  <p className="text-lg mb-3 font-bold">{product.Price}$</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="flex justify-center items-center h-auto md:h-[100vh]">
            No favorite products yet!
          </p>
        )}
      </div>
    </>
  );
};

export default Favorites;
