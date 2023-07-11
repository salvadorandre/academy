import "../Estilos/Encabezado.css";
function Encabezado() { 

    return(
        <div className="Principal">
            <div className="logo-principal">
                <img src="https://1000marcas.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo-2014.png" alt="" />
            </div>
            <div className="nav-bar">
                <ul className="contenedor-navBar">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Iniciar Sesion</a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Universo</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Encabezado; 