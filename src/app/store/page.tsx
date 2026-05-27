"use client";

import { useState } from "react";
import { useImageStore } from "@/src/store/useImageStore";
import { StoreImageCard } from "@/src/features/products/components/StoreImageCard";

export default function StorePage() {
  const store = useImageStore((state) => state.store);
  const removeFromStore = useImageStore((state) => state.removeFromStore);
  const clearStore = useImageStore((state) => state.clearStore);

  const [isOrdering, setIsOrdering] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

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
        <p>No images in store yet.</p>
      ) : store.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {store.map((image) => (
              <StoreImageCard
                key={image.id}
                image={image}
                onRemove={removeFromStore}
              />
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <p className="text-2xl font-bold">
              Total: $
              {store
                .reduce((total, image) => total + image.price, 0)
                .toFixed(2)}
            </p>

            <button
              className="border px-4 py-2 rounded mt-4"
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