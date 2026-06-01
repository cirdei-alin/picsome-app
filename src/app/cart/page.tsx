"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

import { ImagePreviewModal } from "@/src/features/products/components/ImagePreviewModal";
import { useImageStore } from "@/src/store/useImageStore";
import { CartImageCard } from "@/src/features/products/components/CartImageCard";

import type { Image } from "@/src/types/image";

export default function CartPage() {
  const cart = useImageStore((state) => state.cart);
  const removeFromCart = useImageStore((state) => state.removeFromCart);
  const clearCart = useImageStore((state) => state.clearCart);
  const increaseQuantity = useImageStore((state) => state.increaseQuantity);
  const decreaseQuantity = useImageStore((state) => state.decreaseQuantity);

  const [isOrdering, setIsOrdering] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const totalItems = cart.reduce((total, image) => total + image.quantity, 0);

  const totalPrice = cart.reduce(
    (total, image) => total + image.price * image.quantity,
    0
  );

  const placeOrder = () => {
    setIsOrdering(true);

    setTimeout(() => {
      clearCart();
      setIsOrdering(false);
      setOrderPlaced(true);
      toast.success("Order placed successfully");

      setTimeout(() => setOrderPlaced(false), 3000);
    }, 2000);
  };

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10">
      <section className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
        <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-bold text-cyan-200">
          Your selected images
        </p>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Cart{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                collection.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-slate-300">
              Review your selected images, adjust quantities and complete your
              order when everything looks perfect.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-4 text-center shadow-xl shadow-black/20">
              <p className="text-3xl font-black text-white">{totalItems}</p>
              <p className="text-sm font-semibold text-slate-400">items</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-4 text-center shadow-xl shadow-black/20">
              <p className="text-3xl font-black text-white">
                ${totalPrice.toFixed(2)}
              </p>
              <p className="text-sm font-semibold text-slate-400">total</p>
            </div>
          </div>
        </div>
      </section>

      {orderPlaced && (
        <div className="mb-6 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 px-6 py-5 text-emerald-100 shadow-xl shadow-emerald-950/20">
          <p className="font-black">Thank you for your order!</p>
          <p className="mt-1 text-sm text-emerald-200/80">
            Your cart was cleared and the order was placed successfully.
          </p>
        </div>
      )}

      {cart.length === 0 && !orderPlaced ? (
        <section className="grid min-h-[360px] place-items-center rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="max-w-md">
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-4xl shadow-lg shadow-cyan-500/25">
              🛒
            </div>

            <h2 className="text-3xl font-black text-white">
              Your cart is empty
            </h2>

            <p className="mt-3 text-slate-400">
              Add images from the gallery to start building your premium visual
              order.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3 font-black text-slate-950 shadow-lg transition hover:scale-105 hover:bg-cyan-200"
            >
              Go to Gallery
            </Link>
          </div>
        </section>
      ) : cart.length > 0 ? (
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {cart.map((image) => (
              <CartImageCard
                key={image.id}
                image={image}
                onRemove={removeFromCart}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>

          <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Order Summary
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">Checkout</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-slate-400">Total items</span>
                <span className="font-black text-white">{totalItems}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-slate-400">Subtotal</span>
                <span className="font-black text-white">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-3xl bg-white px-5 py-4">
                <span className="font-black text-slate-950">Total price</span>
                <span className="text-2xl font-black text-slate-950">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-4 font-black text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              disabled={isOrdering}
              onClick={placeOrder}
            >
              {isOrdering ? "Placing Order..." : "Place Order"}
            </button>
          </aside>
        </section>
      ) : null}

      {selectedImage && (
        <ImagePreviewModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
}