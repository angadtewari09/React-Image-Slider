import logo from './logo.svg';
import './App.css';
import ImageSlider from './ImageSlider';
import 'react-slideshow-image/dist/styles.css'


function App() {
  const images = [ 
    {url : "https://wallpapers-hub.art/wallpaper-images/3000.jpg" , id: 0},
    {url : "https://wallpapers-hub.art/wallpaper-images/2998.jpg" , id: 1},
    {url : "https://wallpapers-hub.art/wallpaper-images/2999.jpg" , id: 2},
    {url : "https://wallpapers-hub.art/wallpaper-images/3001.jpg" , id: 3},
    {url : "https://wallpapers-hub.art/wallpaper-images/3002.jpg" , id: 4},
    {url : "https://wallpapers-hub.art/wallpaper-images/3003.jpg" , id: 5},
    {url : "https://wallpapers-hub.art/wallpaper-images/3005.jpg" , id: 6}
  ];
  const gallery = {
    width: "625px",
    height: "400px",
    margin: "0 auto",
    marginTop: "60px"
  };

  return (
    <div className="App">
    <h1>React Image Slider</h1>
    <div style={gallery}>
      <ImageSlider slides={images}></ImageSlider>
    </div> 
  </div>
  );
}

export default App;
