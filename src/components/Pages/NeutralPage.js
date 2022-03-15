import { useAuth0 } from "@auth0/auth0-react";

export const NeutralPage = () =>{

    const BACKGROUND = "https://st.depositphotos.com/2012693/1941/i/600/depositphotos_19416661-stock-photo-zen-path-of-stones-in.jpg";
    const { isAuthenticated, user } = useAuth0();
    const message = {
        sinRegistrar : {
            text: "Bienvenido, Usuario. Resgistrate arriba a la derecha para que puedas chatear y ver tu nombre en la tabla de puntos de mi pequeño juego"
        },
        registrado: {
            text: `Hola, ${user ? user.email_verified ? user.name : user.nickname : "mi querido invitado,"} ansio y espero que te diviertas`
        }
    };

    return(
        <div style={{"position" : "relative", "display" : "inline-block", "textAlign" : "center"}}  >
            <img src={BACKGROUND} style={{"width" : "100vw", "height" : "91vh"}} alt="fondo" />
            <div style={{"position" : "absolute", "top" : "30%", "left" : "60%", "width" : "28%", "height" : "auto"}}>
                <p style={{"fontWeight" : "bold"}}>
                {isAuthenticated
                ?
                message.registrado.text
                :
                message.sinRegistrar.text
                }
            </p>
            </div>
        </div>
    );
};