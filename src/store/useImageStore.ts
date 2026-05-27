import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Image } from "@/src/types/image";

type StoreItem = Image & {
  quantity: number;
}

type ImageStore = {
  favorites: Image[];
  store: StoreItem[];

  addToFavorites: (image: Image) => void;
  removeFromFavorites: (id: string) => void;

  addToStore: (image: Image) => void;
  removeFromStore: (id: string) => void;

  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;

  clearStore: () => void;
};

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      favorites: [],
      store: [],

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

      addToStore: (image) =>
        set((state) => {
          const alreadyExists = state.store.find(
            (storeImage) => storeImage.id === image.id
          );

          if (alreadyExists) {
            return {
              store: state.store.map((storeImage) => storeImage.id === image.id
              ? {...storeImage, quantity: storeImage.quantity + 1 }
              : storeImage
              ),
            };
          }

          return {
            store: [...state.store, {...image, quantity: 1}],
          };
        }),

      increaseQuantity: (id) =>
        set((state) => ({
          store: state.store.map((image) =>
            image.id === id 
            ? {...image, quantity: image.quantity + 1} 
            : image
            ),
        })),

      decreaseQuantity: (id) => 
        set((state) => ({
          store: state.store.map((image) =>
            image.id === id 
            ? {...image, quantity: image.quantity -1} 
            : image)
            .filter((image) => image.quantity > 0
          ),
        })),

      removeFromStore: (id) =>
        set((state) => ({
          store: state.store.filter((image) => image.id !== id),
        })),

      clearStore: () => set({ store: [] }),
    }),

    {
      name: "picsome-image-store",
    }
  )
);