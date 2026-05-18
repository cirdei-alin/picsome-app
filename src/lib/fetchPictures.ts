type ApiImage = {
  id: string;
  author: string;
  download_url: string;
};

function generatePrice(id: number) {
  const seed = Math.sin(id) * 10000;
  const random = seed - Math.floor(seed);

  return Number((random * 20 + 5).toFixed(2));
}

export async function fetchPictures() {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=1&limit=100"
  );

  const data: ApiImage[] = await response.json();

  return data.map((image) => ({
    id: Number(image.id),
    title: `Photo by ${image.author}`,
    description: "Random image from Picsum API",
    url: image.download_url,
    price: generatePrice(Number(image.id)),
  }));
}