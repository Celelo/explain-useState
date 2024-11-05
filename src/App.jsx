import { Home } from "../components/elemplo youtube/Home.jsx";
import { Contador } from "../components/elemplo youtube/Contador.jsx";
import { Like } from "../components/like/Like.jsx";
import { ContadorLike } from "../components/like contador/ContadorLike.jsx";

function App() {
  return (
    <>
      <h2>hola</h2>
      {/* <Home /> */}
      <Contador />
      <Like />
      < ContadorLike style={{fontsize: '30px'}}/>
    </>
  );
}

export default App;
