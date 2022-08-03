import image from "./../image/wwerdfd.jpg";

function Inicio() {

  return (
   <>
   
  <h1>Hoja de Vida</h1>


<img src={image}></img>
 
  <h3> <b>Información principal</b> </h3>
  <p>yo Andre  etc..</p>

 

  <h4> <b>Experiencia laboral </b> </h4> 
  <ul>
      <li><a href="#">andres company</a></li>
      <li><a href="#">la taberna de mou</a></li>
      <li><a href="#">disney</a></li>
      <li><a href="#">narnia</a></li>
  </ul>
  <h4> <b>Referencias personales </b> </h4>
  <ul>
    <li><a href="#">juli</a></li>
    <li><a href="#">juan</a></li>
    <li><a href="#">juancho</a></li>
 
</ul>
  <h4> <b>Referencias familiares </b> </h4> 
  <ul>
      <li><a href="#">batman</a></li>
      <li><a href="#">spiderman</a></li>
      <li><a href="#">flash</a></li>
  
  </ul>
  <h4> <b>Estudios realizados</b> </h4> 
  <ul>
      <li><a href="#">ing padimentacion aherea</a></li>
      <li><a href="#">ing desarrollador en martes</a></li>
    
  </ul>


  <h4>Datos de contacto </h4>
  <ul><li><a href="#"> 0000robaron</a></li></ul>
 
  <p>&#169; 2022 <a>andres G</a></p>

   
   </>
   
  );
}

export default Inicio;