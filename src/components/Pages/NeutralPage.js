import { useAuth0 } from "@auth0/auth0-react";

export const NeutralPage = () =>{

    const BACKGROUND = "https://st.depositphotos.com/2012693/1941/i/600/depositphotos_19416661-stock-photo-zen-path-of-stones-in.jpg";
    const { isAuthenticated, user } = useAuth0();
    const message = {
        sinRegistrar : {
            text: "Bienvenido, Usuario. resgistrate arriba a la derecha para que puedas chatear y ver tu nombre en la tabla de puntos de mi pequeño juego"
        },
        registrado: {
            text: `Bienvenido, ${user ? user.name : "mi querido invitado,"} ansio y espero que te diviertas`
        }
    };


    return(
        <h1>Goodbye</h1>
    );
};