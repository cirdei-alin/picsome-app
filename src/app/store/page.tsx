"use client";

import { useState } from "react";
import { useImageStore } from "@/src/store/useImageStore";
import { StoreImageCard } from "@/src/features/products/components/StoreImageCard";
import Link from "next/link"

export default function StorePage() {
  const store = useImageStore((state) => state.store);
  const removeFromStore = useImageStore((state) => state.removeFromStore);
  const clearStore = useImageStore((state) => state.clearStore);

  const [isOrdering, setIsOrdering] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalItems = store.reduce((total, image) => total + image.quantity, 0);
  const totalPrice = store.reduce((total, image) => total + image.price * image.quantity, 0);

  const increaseQuantity = useImageStore((state) => state.increaseQuantity);
  const decreaseQuantity = useImageStore((state) => state.decreaseQuantity);

  const placeOrder = () => {
    setIsOrdering(true);

    setTimeout(() => {
      clearStore();
      setIsOrdering(false);
      setOrderPlaced(true);

      setTimeout(() => setOrderPlaced(false), 3000);
    }, 2000);
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Store</h1>

      {orderPlaced && (
        <p className="text-green-500 mb-4 font-bold">
          Thank you for your order!
        </p>
      )}

      {store.length === 0 && !orderPlaced ? (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Your store is empty</h2>
          <p className="text-gray-500 mb-4">
            Add images from the gallery to start building your order.
          </p>

          <Link href="/" className="inline-block border px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Go to Gallery
          </Link>
        </div>
      ) : store.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {store.map((image) => (
              <StoreImageCard
                key={image.id}
                image={image}
                onRemove={removeFromStore}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
              />
            ))}
          </div>

          <div className="mt-6 border-t pt-4 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2">
              <p>Total items: {totalItems}</p>
              <p className="text-xl font-bold">
                Total price: ${totalPrice.toFixed(2)}
              </p>
            </div>
            

            <button
              className="border px-4 py-2 rounded mt-6 hover:bg-white hover:text-black transition"
              disabled={isOrdering}
              onClick={placeOrder}
            >
              {isOrdering ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </>
      ) : null}
    </main>
  );
}