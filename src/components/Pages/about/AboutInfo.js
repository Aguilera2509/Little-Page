import pictureDev from "../../assets/PictureDeveloper.jpg"
import './about.css'

export const InfoCreator = () =>{
    return(
        <>
        <div className="BgColor">
            <img alt="Jose_Aguilera_Photo"className="imgAbout" src={pictureDev}></img>
            <textarea readOnly="readOnly" defaultValue="
            Hola, soy el creador de este sitio chiquito pero de gran proporcion en mi corazon.
            Me alegro que hayas tenido la amabilidad de visitarlo, espero veas o hayas visto todo
            lo que esta pagina simple tiene para ofrecer y me compartas tu opinion en la seccion de 
            Contact, me asegurare de responderte y agradecerte por tu opinion a travez del correo. Este proyecto esta completamente
            desarrollado por mi, un chico de 18 años de nombre Jose Aguilera. Y puedes encontrar el codigo fuente
            en el enlace de la seccion Home" className="textareAbout"></textarea>
        </div>
        <br />
        <div className="BgColor">
            <p>Tambien puedes encontrarme en facebook como: <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/josealejandro.aguilera1">Jose Aguilera</a> </p>
            <p>Si gustas poder ofrecezme un mensaje mejor que el que puedas ofrecerme en Contact, mi correo es: <b>ja846699@gmail.com</b> </p>
        </div>
        </>
    );
};