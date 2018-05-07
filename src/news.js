// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=f32a4052cc4c4ba7a6853c2ed7304cb1";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
