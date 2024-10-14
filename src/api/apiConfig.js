const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "23bb226359a7da6096b3ec4213e007de",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
