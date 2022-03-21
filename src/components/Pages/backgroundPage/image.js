export const Base = ({ content }) =>{

    const BACKGROUND = "https://lamenteesmaravillosa.com/wp-content/uploads/2017/01/10985406_1591898497748188_2597481070204308743_n.jpg";

    return(
    <div style={{"position" : "relative", "display" : "inline-block", "textAlign" : "center"}}  >
      <img src={BACKGROUND} style={{"width" : "100vw", "height" : "92vh"}} alt="fondo" />
      <div style={{"position" : "absolute", "top" : "16%", "left" : "24%", "width" : "50%", "height" : "auto"}}>
        {content}
      </div>
    </div>     
    );
};