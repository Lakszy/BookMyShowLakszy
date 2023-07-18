const apiConfig = {
baseUrl:'https://api.themoviedb.org/3',
apiKey:'1fa6ec792ae80dcc4443254c3621781',
originalImage: (imgPath) => `https://image.tmdb.org/t/p/w500/original/${imgPath}`,
w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig;