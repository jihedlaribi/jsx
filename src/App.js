import "./App.css";

import pic2 from "./picsrc.jpg";

function App() {
  return (
    <div className="App">
      <div className="jihed">
      <iframe className="jiji"
      
       
        src="https://www.youtube.com/embed/NN1RWBgZ62w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe></div>
      <div className="img" style={{ border: "solid 1px black", maxWidth: "100vw" }}>
 

        <br />

        <img src={pic2} alt=""  />

        <br />

        <img
          src="/picpublic.jpg"
          alt="jihed"
          
        />
      </div>
 
    </div>
  );
}

export default App;
