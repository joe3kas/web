import React from 'react'
import Foto from '../../Images/iniciamos.jpg'
import './estilosReseña.css'
export default function index() {
	return (
		<>
			<div>
				<img className="banner" src={Foto} alt="IEDC" />
			</div>
			<div className="container p-4">
				<div className="card mb-3 shadow-5-strong">
					<div className="row g-0">
						<div className="col-md-4 text-center g-4 wow P">
							<img
								width="500px"
								src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
								alt="..."
								className="img-fluid"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="wow Fr card-title">RESEÑA HISTORICA DE LA INSTITUCION EDUCATIVA DISTRITAL COMUNITARIA OCTAVIO PAZ</h5>
								<p className="card-text wow Fr">
									En el año de 1984, se inicia la construcción de la ESCUELA 12 DE OCTUBRE, de carácter
									privado. La obra se ejecuta gracias a la intervención y gestión de líderes de la comunidad y
									la Universidad Simón Bolívar. Hacia 1990, un grupo de jóvenes inquietos de la comunidad y
									estudiantes de la universidad del Atlántico junto con otros vecinos del barrio, liderados
									por Ramiro Bolaño Avendaño, Oswaldo Arévalo y Humberto Jiménez Galindo, quienes asumen la
									presidencia de la junta de acción comunal, generando el cambio de carácter privado de la
									institución a gratuito para todos los niños y niñas del barrio Bellarena e inician el
									proceso de aprobación para prestar los servicios educativos. Para el periodo de 1991 a 1992
									se inicio gracias a la gestión de la comunidad la recuperación de la escuela, se inicia la
									vinculación de Docentes comunitarios quienes trabajaban sin remuneración alguna, y tras el
									trabajo político fueron siendo contratados y posteriormente nombrados. Para el periodo de
									1992 a 1994 el rector fue Rafael Ladrón de Guevara.
								</p>
								<p className="card-text wow Fr">
									En el año de 1993 se oficializo la Institución con la resolución 682 del 14 de Octubre del
									mismo año, iniciándose el nombramiento de docentes por ley 30 y por concursos posteriores.
									Pasa a llamarse C. C. E. B. 182. En el año de 1994, se inicia el proceso de nombramiento en
									propiedad de los docentes contratados. Al año siguiente se construyen 3 aulas, las baterías
									sanitarias y cerramiento de la Escuela. Entre 1995 a 1997 el rector fue Roberto Muñoz
									Vargas; lego entre 1998 al año 2.001 ejerce la rectoría Álvaro Orozco.
								</p>
								<p className="card-text wow Fr">
									Para el año 2002, la institución mediante resolución 00518 del 5 de marzo recibe la
									aprobación de la ampliación del ciclo secundario del nivel básico a la Media académica. Este
									mismo año es nombrado como Rector en propiedad, el Esp. Wilfredo Delgado Agamez, se realiza
									la construcción completa de la planta física, se amplia la cobertura estudiantil y se
									proyecta la ampliación de la básica secundaria a media vocacional, obteniendo la resolución
									001880 del 12 de Diciembre de 2003.
								</p>
								<p className="card-text wow Fr">
									Este mismo año la Institución cambia de razón social a INSTITUCION EDUCATIVA DISTRITAL
									COMUNITARIA “OCTAVIO PAZ”, mediante resolución 001878 del 12 de Diciembre del 2003. Se logra
									la licencia de funcionamiento que aprueba los niveles de Preescolar y básica bajo resolución
									No. 001879 del 12 de Diciembre, la cual fue unificada con la licencia de funcionamiento del
									nivel de la media Res. 000234 de marzo 17 de 2004. En febrero de 2004, se inician labores
									con la media. Comienza el proceso de reconstrucción del PEI con las nuevas condiciones, se
									cuenta con una COBERTURA DE 920 estudiantes, se elabora la misión y la visión de la Escuela
									teniendo en cuenta el contexto y con la participación de toda la comunidad. Se inicia el
									proceso de elaboración del modelo pedagógico, la metodología para desarrollo de pensamiento
									y se proyecta la institución hacia la implementación de la media técnica a través del
									convenio MEN – S.D.E. - SENA por transferencia de módulos; todo esto con el valioso concurso
									de docentes, padres de familia y asesoría de la Supervisora de Secretaria de Educación
									Distrital: La Magíster Doris Domínguez Bárcenas. 2.005-2.006 se implementa el modelo
									Pedagógico Social Cognitivo, con el enfoque estructural cognitivo, estableciéndose el
									énfasis Promoción Social y Desarrollo empresarial, en este periodo se reciben capacitaciones
									importantes como: Computadores para Educar, la Universidad del Norte, el Instituto Alberto
									Assa e Intel.
								</p>
								<p className="card-text wow Fr">
									En el 2007 y 2008, con la llegada de nuevos docentes al plantel se inicia un proceso de
									retroalimentación en la fundamentación teórica del Modelo y se propone la curricularización
									del mismo por parte de la Esp. Yamile González Ortega, coordinadora académica; en 2.008 se
									aprueba el Currículo integrado bajo la teoría crítico cultural escogiéndose tres ejes
									curriculares.
								</p>
								<p className="card-text wow Fr">
									Iniciándose así un proceso de reestructuración de los planes de estudios para despertar a
									través del conocimiento el sentido de pertenencia por la identidad cultural de la capital
									del Caribe colombiano.{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
