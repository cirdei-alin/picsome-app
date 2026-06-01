import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Image } from "@/src/types/image";

type CartItem = Image & {
  quantity: number;
};

type ImageStore = {
  favorites: Image[];
  cart: CartItem[];

  addToFavorites: (image: Image) => void;
  removeFromFavorites: (id: string) => void;

  addToCart: (image: Image) => void;
  removeFromCart: (id: string) => void;

  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;

  clearCart: () => void;
};

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      favorites: [],
      cart: [],

      addToFavorites: (image) =>
        set((state) => {
          const alreadyExists = state.favorites.some(
            (favorite) => favorite.id === image.id
          );

          if (alreadyExists) return state;

          return {
            favorites: [...state.favorites, image],
          };
        }),

      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((image) => image.id !== id),
        })),

      addToCart: (image) =>
        set((state) => {
          const alreadyExists = state.cart.find(
            (cartImage) => cartImage.id === image.id
          );

          if (alreadyExists) {
            return {
              cart: state.cart.map((cartImage) =>
                cartImage.id === image.id
                  ? { ...cartImage, quantity: cartImage.quantity + 1 }
                  : cartImage
              ),
            };
          }

          return {
            cart: [...state.cart, { ...image, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((image) => image.id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((image) =>
            image.id === id
              ? { ...image, quantity: image.quantity + 1 }
              : image
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((image) =>
              image.id === id
                ? { ...image, quantity: image.quantity - 1 }
                : image
            )
            .filter((image) => image.quantity > 0),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "picsome-image-store",
      migrate: (persistedState) => {
        const state = persistedState as {
          favorites?: Image[];
          store?: CartItem[];
          cart?: CartItem[];
        };

        return {
          favorites: state.favorites ?? [],
          cart: state.cart ?? state.store ?? [],
        };
      },
    }
  )
);