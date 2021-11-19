import { faEnvelopeOpen, faMapMarkerAlt, faMapSigns, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="">
            <div className="container"></div>
            <section className="Footer">
                <div>
                    <p className="ft-title"><FontAwesomeIcon icon={faMapMarkerAlt}/> Cra. 1F No. 41B-05</p>
                </div>
                <div>
                    <p className="ft-title"><FontAwesomeIcon icon={faMapSigns}/> Barrio BELLA ARENA</p>
                </div>
                <div>
                <p className="ft-title"><FontAwesomeIcon icon={faPhoneAlt}/> 3622595 - 3642430.</p>
                </div>
                <div>
                <p className="ft-title"><FontAwesomeIcon icon={faEnvelopeOpen}/>  tec_iedc.octaviopaz@sedbarranquilla.edu.co</p>
                </div>
            </section>

            <section className="Footer-bajo">
                <ul>
                    <li className="txt">&copy; 2021 Copyright | IEDC Octavio Paz</li>
                </ul>
            </section>
        </footer>
    );
}
