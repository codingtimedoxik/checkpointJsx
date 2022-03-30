import "./styles.css"
import ImageInSrc from './bigoequation.jpg'

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 class="title red">Saif</h1>

        <br />

        <img src={ImageInSrc} />

        <br />

        <img src="bigoalgo.png" />

      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
