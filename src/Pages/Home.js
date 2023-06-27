import Titulo from '../Components/titulo.jsx'; 
import Menu from "../Components/menu.js";
import Contenido from "../Components/contenido.jsx";
import Lateral from "../Components/lateral.jsx";
import Footer from "../Components/footer";

const Home = () =>{
    return (
        <div className="grid-layout">
            <div className="caja c1"> <Titulo/></div>
            <div className="caja c2"> <Menu/></div>
            <div className="caja c3"> <Contenido/></div>
            <div className="caja c4"> <Lateral/></div>
            <div className="caja c5"> <Footer/></div>
        </div> 
    )
}
export default Home;