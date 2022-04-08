import { useAuth0 } from "@auth0/auth0-react";
import './HomePage.css'

export const NeutralPage = () =>{

    const BACKGROUND = "https://st.depositphotos.com/2012693/1941/i/600/depositphotos_19416661-stock-photo-zen-path-of-stones-in.jpg";
    const { isAuthenticated, user } = useAuth0();
    const message = {
        sinRegistrar : {
            text: "Bienvenido, Usuario. Registrate arriba a la derecha para que puedas chatear y ver tu nombre en la tabla de puntos de mi pequeño juego"
        },
        registrado: {
            text: `Hola, ${user ? user.email_verified ? user.name : user.nickname : "mi querido invitado,"} ansio y espero que te diviertas`
        }
    };

    return(
        <div className="mainDiv">
            <img src={BACKGROUND} style={{"width" : "100vw", "height" : "86vh"}} alt="Background Sunrise" />
            <div className="centerTextDiv">
            <p style={{"fontWeight" : "bold"}}>
                {isAuthenticated
                ?
                message.registrado.text
                :
                message.sinRegistrar.text
                }
            </p>
            </div>
            <footer>
            <h4>
                {isAuthenticated
                ?
                "Puedes encontrar todo el codigo de la pagina aqui: *Github*"
                :
                "Logueate para que puedas acceder al codigo fuente"
                }
            </h4>
            </footer>
        </div>
    );
};