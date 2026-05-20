type UnsplashImage = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  user: {
    name: string;
  };
};

function generatePrice(id: string) {
  const seed = id.length * 9999;
  const random = seed - Math.floor(seed);

  return Number((random * 20 + 5).toFixed(2));
}

export async function fetchPictures(searchQuery = "nature") {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=30`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  const data = await response.json();

  return data.results.map((image: UnsplashImage) => ({
    id: image.id,
    title: image.alt_description || "Unsplash Image",
    description: `Photo by ${image.user.name}`,
    url: image.urls.regular,
    price: generatePrice(image.id),
  }));
}