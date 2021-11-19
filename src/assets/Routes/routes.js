import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navega from '../Components/navbar'
import  Inicio  from "../Pages/Home";
import  NotFound  from '../Pages/NotFound';
import  Noticias  from "../Pages/Noticias";
import  Noticia  from "../Pages/Noticias/Components/noticia";
import  Contacto  from "../Pages/Contacto";
import  Descargas  from "../Pages/Descargas";
import  Docentes  from "../Pages/Docentes";
import  Educacion  from "../Pages/Educacion";
import  Galeria  from "../Pages/Galeria";
import  Institucion  from "../Pages/Institucion";
import  Manual  from "../Pages/Manual";
import  Reseña  from "../Pages/Reseña";
import  Honor  from "../Pages/Honor";
import  Simbolos  from "../Pages/Simbolos";
import  Guias  from "../Pages/Guias";
import Psico  from "../Pages/Psico"


export default function Routers() {
    return (
        <Router>
            <Navega />
            <Switch>
            <Route exact path="/Contacto" component={Contacto} />
                <Route exact path="/Galeria" component={Galeria} />
                <Route exact path="/Descargas" component={Descargas} />
                <Route exact path="/Noticias" component={Noticias} />
                <Route exact path="/Docentes" component={Docentes} />
                <Route exact path="/Honor" component={Honor} />
                <Route exact path="/Educacion" component={Educacion} />
                <Route exact path="/Institucion" component={Institucion} />
                <Route exact path="/Simbolos" component={Simbolos} />
                <Route exact path="/Guias" component={Guias} />
                <Route exact path="/Manual" component={Manual} />
                <Route exact path="/Reseña" component={Reseña} />
                <Route exact path="/Orientacion" component={Psico} />
                <Route       path="/noticia/:id" component={Noticia} />
                <Route exact path="/" component={Inicio} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}