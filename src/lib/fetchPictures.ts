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
    "https://picsum.photos/v2/list?page=1&limit=200"
  );

  const data: ApiImage[] = await response.json();

  const imageTags = [
    ["laptop", "coffee", "workspace", "desk", "technology"],
    ["person", "work", "laptop", "office", "business"],
    ["coffee", "notebook", "workspace", "study", "desk"],
    ["phone", "technology", "workspace", "office", "modern"],
    ["meeting", "coffee", "tablet", "business", "teamwork"],
    ["laptop", "desk", "technology", "work", "office"],
    ["nature", "mountains", "forest", "lake", "landscape"],
    ["beach", "ocean", "summer", "travel", "vacation"],
    ["city", "buildings", "urban", "night", "lights"],
    ["car", "road", "travel", "speed", "transport"],
    ["food", "coffee", "restaurant", "drink", "breakfast"],
    ["fitness", "gym", "sport", "health", "training"],
    ["coding", "developer", "programming", "computer", "tech"],
    ["fashion", "clothes", "style", "shopping", "model"],
    ["music", "guitar", "concert", "artist", "sound"],
    ["animals", "dog", "cat", "nature", "pet"],
    ["gaming", "computer", "setup", "rgb", "technology"],
    ["books", "study", "library", "education", "learning"],
    ["space", "stars", "galaxy", "universe", "science"],
    ["rain", "weather", "storm", "nature", "sky"],
  ];  

  return data.map((image, index) => ({
    id: Number(image.id),
    title: `Photo by ${image.author}`,
    description: "Random image from Picsum API",
    url: image.download_url,
    price: generatePrice(Number(image.id)),
    tags: imageTags[index] || ["photo"],
  }));
}