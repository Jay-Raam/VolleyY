// app/product/[id]/page.tsx
import { notFound } from "next/navigation";
import EmblaCarousel from "@/components/carousal";
import "../embla.css";

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

// Fetch product data on the server
async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:3001/products/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    const product = await fetchProduct(id);

    return (
      <div className="product-detail max-w-[1200px] mx-auto my-0 flex flex-col lg:flex-row gap-5 mt-4">
        <div className="image w-full lg:w-1/2">
          {product.Images && <EmblaCarousel images={product.Images} />}
        </div>
        <div className="details w-full lg:w-1/2 flex justify-center items-center gap-4 flex-col">
          {product.Product_Name && (
            <h1 className="text-2xl mb-2">{product.Product_Name}</h1>
          )}
          {product.Description && (
            <p className="text-sm mb-2">{product.Description}</p>
          )}
          {product.Price && <p className="text-xl mb-3">${product.Price}</p>}
        </div>
      </div>
    );
  } catch (error) {
    notFound();
    return null;
  }
}
