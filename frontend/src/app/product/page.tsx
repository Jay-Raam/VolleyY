"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import BlurFade from "@/components/magicui/blur";
import Link from "next/link";
import "../styles.css";

export interface Product {
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

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showSortControls, setShowSortControls] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://volleyy-server.vercel.app/products?page=${currentPage}&limit=30`
        );

        if (!res.ok) {
          throw new Error(
            `Failed to fetch products: ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();
        setProducts(data);
        sortProducts(data, sortOrder);
      } catch (error: any) {
        setError(error.message);
        console.error("Error fetching products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, sortOrder]);

  useEffect(() => {
    sortProducts(products, sortOrder);
  }, [products, sortOrder]);

  const sortProducts = (products: Product[], order: "asc" | "desc") => {
    const sorted = [...products].sort((a, b) =>
      order === "asc" ? a.Price - b.Price : b.Price - a.Price
    );
    setSortedProducts(sorted);
  };

  const handlePageChange = (page: number) => {
    if (page > 0) {
      setCurrentPage(page);
    }
  };

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleSaveId = (id: string) => {
    // Retrieve existing favorites or initialize an empty array
    const existingFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const dynamicDate = new Date();
    const Nowday = formatDateWithDay(dynamicDate);
    if (!existingFavorites.includes(id)) {
      existingFavorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(existingFavorites));
      toast({
        title: "Sucecssful favorites product",
        description: `Product added to favorites on ${Nowday}`,
      });
    } else {
      toast({
        title: "Product was already in favorites...",
        description: `Product was already in favorites...`,
      });
    }
  };

  function formatDateWithDay(dateInput: Date) {
    const date = new Date(dateInput);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const strMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${dayName}, ${monthName} ${day}, ${year} at ${hours}:${strMinutes} ${ampm}`;
  }

  return (
    <>
      <div className="product">
        {loading && (
          <p className="flex justify-center items-center h-auto md:h-[100vh]">
            <span className="loader mt-18"></span>
          </p>
        )}
        {error && (
          <p className="flex justify-center items-center h-auto md:h-[100vh] text-black dark:text-white">
            {error}
          </p>
        )}

        <section className="relative flex justify-between items-center mt-5 mb-3">
          {sortedProducts.length > 0 && (
            <Link href="/">
              <BlurFade delay={0.25} inView>
                <h1 className="flex justify-center items-center ml-6">
                  Search
                </h1>
              </BlurFade>
            </Link>
          )}
          {sortedProducts.length > 0 && (
            <div className="relative flex items-center mr-6">
              <DiscordLogoIcon
                className="h-6 w-6 cursor-pointer hover:text-gray-700"
                onClick={() => setShowSortControls(!showSortControls)}
              />
              {showSortControls && (
                <div className="absolute z-50 right-0 top-5 mt-2 flex flex-col gap-2 p-3 bg-white text-black shadow-lg rounded-md border border-gray-200">
                  <Button
                    variant={"ghost"}
                    onClick={() => {
                      setSortOrder("asc");
                      setShowSortControls(!showSortControls);
                    }}
                    className="p-2"
                  >
                    Price Low to High
                  </Button>
                  <Button
                    className="p-2"
                    variant={"ghost"}
                    onClick={() => {
                      setSortOrder("desc");
                      setShowSortControls(!showSortControls);
                    }}
                  >
                    Price High to Low
                  </Button>
                </div>
              )}
            </div>
          )}
        </section>
        <div className="product-home-page-details">
          <ul className="max-w-[1550px] mx-auto my-0 flex justify-center items-center gap-3 flex-wrap">
            <BlurFade
              delay={0.25}
              inView
              className="flex justify-center items-center gap-5 flex-wrap mt-5"
            >
              {sortedProducts.length > 0 &&
                sortedProducts.map(
                  (product) =>
                    product.Images[0] && (
                      <li
                        key={product._id}
                        className="flex justify-center items-center text-center md:text-left gap-3 flex-col lg:flex-row"
                      >
                        <Image
                          width={1728}
                          height={2160}
                          quality={100}
                          src={product.Images[0]}
                          alt={product.Product_ID}
                          className="w-[300px] md:w-[500px] h-auto"
                          priority={true}
                          onClick={() => handleProductClick(product._id)}
                        />
                        <div>
                          {product.Product_Name && (
                            <h1>{product.Product_Name}</h1>
                          )}
                          {product.Description && <p>{product.Description}</p>}
                          {product.Price && <p>Price: ${product.Price}</p>}
                          {product.Brand && <p>Brand: {product.Brand}</p>}
                          <div className="flex justify-center items-center gap-3 mt-3 mb-3">
                            <Button
                              type="button"
                              onClick={() => handleSaveId(product._id)}
                            >
                              Cart
                            </Button>
                            <Button
                              onClick={() => handleProductClick(product._id)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </li>
                    )
                )}
            </BlurFade>
          </ul>
        </div>
        {products.length > 5 && (
          <div className="pagination-controls flex justify-center items-center gap-3 mt-3 mb-3">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
