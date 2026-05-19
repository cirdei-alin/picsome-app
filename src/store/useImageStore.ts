import { create } from "zustand";
import { persist } from "zustand/middleware";

type Image = {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
  tags: string[];
};

type ImageStore = {
  favorites: Image[];
  store: Image[];

  addToFavorites: (image: Image) => void;
  removeFromFavorites: (id: number) => void;

  addToStore: (image: Image) => void;
  removeFromStore: (id: number) => void;

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
          const alreadyExists = state.store.some(
            (storeImage) => storeImage.id === image.id
          );

          if (alreadyExists) return state;

          return {
            store: [...state.store, image],
          };
        }),

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