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
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash += id.charCodeAt(i) * (i + 1);
  }

  const price = (hash % 2000) / 100 + 5;

  return Number(price.toFixed(2));
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