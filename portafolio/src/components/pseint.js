import image from "./../image/tabla.png";
import Accordion from 'react-bootstrap/Accordion';
function pseint() {
  return (
    <>
          <h1 style={{ "display": "flex", "alignItems": "center", "justify-content": "center" }} >Pseint</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Taller de variables e impresión</Accordion.Header>
          <Accordion.Body>
            <p>A continuación se describirán los ejercicios que deberá realizar. Por favor guardar los ejercicios dado que serán requeridos en entregas posteriores. Todos los ejercicios deben
              estar escritos en <span style={{ "font-weight": "bold" }}>PSeInt</span> con el perfil <span style={{ "font-weight": "bold" }}>Estricto</span>.</p>
            <ol>
              <li>Realizar un programa el cual solicite su nombre y apellidos.</li>
              <li>Realizar un programa el cual solicite su nombre, apellidos, edad y estatura.</li>
              <li>Realizar un programa el cual solicite su nombre y apellidos, también debe capturar nombre y apellidos de su padre y madre. Al finalizar debe imprimir en pantalla el siguiente
                mensaje "Yo [Nombre Completo], soy hijo de [Nombre de la Madre] y [Nombre del Padre].</li>
              <li>Realizar un programa el cual solicite el nombre de una ciudad capital y el país. Al finalizar debe imprimir en pantalla el siguiente mensaje "La ciudad [Nombre de la Ciudad],
                es la capital del país [Nombre del País]</li>
              <li>Realizar un programa el cual solicite el nombre de su mascota, edad de la mascota, el tipo de mascota y su nombre completo. Al finalizar el sistema debe e imprimir en pantalla
                el siguiente mensaje: [Nombre de Mascota] es un(a) [Tipo de Mascota], el cual, tiene [Edad de la Mascota] años de edad y [Nombre Completo] es actualmente su dueño(a).</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Taller de condicionales</Accordion.Header>
          <Accordion.Body>
            <p>A continuación se describirán los ejercicios que deberá realizar. Por favor guardar los ejercicios dado que serán requeridos en entregas posteriores. Todos los ejercicios deben
              estar escritos en <span style={{ "font-weight": "bold" }}>PSeInt</span> con el perfil <span style={{ "font-weight": "bold" }}>Estricto</span>.</p>
            <ol>
              <li>Realizar un programa en el cual se solicite la edad de una persona. Si la persona es mayor o igual a 18 años, deberá mostrar en pantalla: Usted es mayor de edad.</li>
              <li>Realizar un programa en el cual se solicite la edad de una persona. Si la persona es menor a 18 años, deberá mostrar en pantalla: Usted aún es un niño(a).</li>
              <li>Realizar un programa en el cual se solicite el nombre, apellidos y edad de la persona. Si la persona es mayor o igual a 18 años, entonce se deberá imprimir en pantalla
                <span style={{ "font-style": "italic", "font-weight": "bold" }}>[Nombre completo] usted es mayor de edad, por lo tanto puede entrar a la fiesta</span>. Si la edad de la persona es menor que
                18 años, entonces, deberá imprimirse el siguiente mensaje: <span style={{ "font-style": "italic", "font-weight": "bold" }}>[Nombre completo] usted es menor de edad, por lo tanto, no puede
                  entrar a la fiesta, por favor devuélvase a su casa</span>.</li>
              <li>La video tienda que presta sus servicios de alquiler de películas a los usuarios del barrio el Porvenir, requiere de una aplicación que permita registrar el alquiler de las
                películas que adquieren sus usuarios.&nbsp;Para cada usuario se debe permitir la opción de alquilar película,&nbsp;consultar películas disponibles y recibir película en la video
                tienda&nbsp;con la opción de realizar anotaciones sobre estas si se llegan a&nbsp;presentar daños u otra novedad sobre la película.</li>
              <li>La Droguería Mi Salud presta sus servicios en la localidad de Suba y requiere una aplicación para poder facturar los productos que vende a sus clientes y para ello, los
                productos tienen unas características que deben indicársele al cliente para que pueda escoger el producto a comprar.&nbsp;Para cada cliente, se tienen las opciones de compra de
                producto, consulta de precios por producto y devoluciones en caso de que se presenten.</li>
              <li>El taller de motos "El Maquinista" recibe motocicletas de alto cilindraje para realizar las respectivas revisiones y requiere una aplicación que le permita registrar los
                servicios generados a sus clientes. Para cada motocicleta se debe tener registro del ingreso al taller y las observaciones por parte del cliente. También debe existir registro de
                salida del taller con las novedades y otra de arreglos hechos por el mecánico en caso de que se requiera inventariar cambios repuestos en la motocicleta al entregarla.</li>
              <li>La Secretaría de Salud Municipal requiere de una aplicación que le permita calcular el IMC (Índice de masa corporal) y requiere los datos peso en kilogramos y estatura en
                metros Para cada persona encuestada adicional a los datos suministrados, debe mostrar el resultado para cada uno y establecer en qué rango se encuentra (bajo peso, normal,
                sobrepeso y obeso).</li>
              <li>El pastelero Don Carlos es el mejor pastelero de la ciudad y requiere una aplicación que le permita registrar los pedidos de los clientes en cuanto a las tortas que realiza.
                Cada torta tiene unas características propias como sabor, cantidad (porciones) y decoraciones). Se requiere que la aplicación permita registrar los pedidos, las tortas disponibles
                y las ventas que se registren diariamente.</li>
              <li>El profesor de geometría está explicando a sus estudiantes las fórmulas para calcular el área de diferentes figuras geométricas, para ello requiere una aplicación que le
                facilite el ejercicio solicitándole los valores al estudiante. La aplicación debe permitir que el estudiante seleccione si desea calcular el área de un rectángulo, triángulo o
                trapecio. No olvide solicitar los datos necesarios para realizar cada cálculo y mostrar su respectivo resultado.</li>
              <li>El banco "Su banco fiel" es un banco que inicia sus actividades financieras y necesita una aplicación para llevar las cuentas de sus usuarios; por lo tanto, se sugiere que la
                cuenta tenga los atributos titular y cantidad. Para cada cliente las cuentas permitirán realizar ingresos, retiros o consultas de valor. En los ingresos no se pueden insertar
                valores negativos y para los retiros el valor no puede ser mayor al valor que tiene en la cuenta.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Taller de ciclos</Accordion.Header>
          <Accordion.Body>
            <p>A continuación se describirán los ejercicios que deberá realizar. Por favor guardar los ejercicios dado que serán requeridos en entregas posteriores. Todos los ejercicios deben
              estar escritos en <span style={{ "font-weight": "bold" }}>PSeInt</span> con el perfil <span style={{ "font-weight": "bold" }}>Estricto</span>.</p>
            <ol>
              <li>Realizar la siguiente figura por medio del ciclo <span style={{ "font-weight": "bold" }}>Para</span></li>
              <ul>
                <li style={{ "text-align": "left" }}><img src={"https://cdn.talentlms.com/sofkauniversity/1643643915_01.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDM5MTVfMDEuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1OTU3MTIwMH19fV19&Signature=Qtc8rDYhPgDD%2FFLtHXYZQMJPYLPMJxw2JUkBaCfsNU04Q-oEsYs9So8b1cUCAJZl3jptPBJBdhKZNhnVlQg9-sB3SAQ7dfDrdHVG-kVOVHgwzrtDvz-FZlaTZtC4CChDso4q74s1hTjMx%2FprqEbUI2SODCeMx3UyJNWZdI-o4wLfyPfw63Rbl5mMnZ683vZOMnDQsEzVjf%2FKxl32DtVa7yuJoRNX4H0SJKFSjSg4e8KfZs2Lh0Oe0gSvIXJ6hH8cQxNrjsSEZq%2FgEAP8BmUuiZeoAXpVHYoDgTGjfSgVEg-CHGz1lyHUiCLUdf5saFeHpPHV1h1ffZGccku-ctCpcQ__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"} style={{ "width": "82px" }} /></li>
              </ul>
              <li>Realizar la siguiente figura por medio del ciclo <span style={{ "font-weight": "bold" }}>Mientras - Hacer</span></li>
              <ul>
                <li><img src={"https://cdn.talentlms.com/sofkauniversity/1643644021_02.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQwMjFfMDIuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1OTU3MTIwMH19fV19&Signature=GhmXaJsJOB2rLLUDrFZOusBoDkFYlctb0eiMEjbAXnk5CiSLwzgcbz%2FynHv3y1BwsOvAgCZc4XCTfbNnuWapVztd2QYPGamUfYP7oMDQONDnpxsMvfovb4efcl4AtkGiRs2YDGI--mfW0dEMGgVDRL2mx-Ou1fWnRKJDC5wyjfwcLoCGSVjKF95xVCrcorBLhUnLPGnHv6tWOBDvkcKjlRMjF09XLafvbx7aPfdr0nSQYPOnhuvpI0qL9sTihDZcPo%2FarJa6pEslk-DlhOYD1bMc%2F9d-3s8lP8KwtvrNnCs8sEtIv2PWRyTeN6qx30xzpR5HzavTQ6GUGqyEmlaK9w__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"} style={{ "width": "84px;" }} /></li>
              </ul>
              <li>Realizar la siguiente figura por medio del ciclo Repetir - <span style={{ "font-weight": "bold" }}>Hasta Que</span></li>
              <ul>
                <li><img src={"https://cdn.talentlms.com/sofkauniversity/1643644087_03.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQwODdfMDMuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1OTU3MTIwMH19fV19&Signature=CCqP%2FdoAtMsQc80qYBuKu1QM2YdiMqNb3YMDuEwwwWukwsTZz3Xx5x7-V4xcV9iEQmSeJXfhxeQ3m%2FcWr1TM9EhV3GVaYT6urWkqvQtm1-wdznOWdQR-iT2k6IGmcO4-WgeDzOiFKMOJ0Fqr0aA5mUJXjsLUxRRWiWd%2FiW%2FlWfX0JIpNAprTtu2nbt8W7Ur%2FT-XVkKjWeLV2w%2F%2FFg5viXrRhT6pxxemdEMcp4hKFYMpI5D13ypPJEMj%2FR8cY9Tq6mZymuAIWtMXdgCUHzHX1zEDqwneDJuccs0uPrJUjaZnsYb7MBSYC0JbqJrp2g1fILe-b79kDw4Gyrn7A7DZ%2FtQ__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"} style={{ "width": " 173px" }} /></li>
              </ul>
              <li>Se requiere un programa que pueda crear la tabla de multiplicar del número que el usuario indique por medio del ciclo <span style={{ "font-weight": "bold" }}>Para</span>; esta debe
                ser impresa del 1 al 10. Ejemplo, si el usuario indica que desea crear la tabla del 5, entonces el resultado debería ser el siguiente:</li>
              <ul>
                <li><img src={"https://cdn.talentlms.com/sofkauniversity/1643644382_04.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQzODJfMDQuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1OTU3MTIwMH19fV19&Signature=jn4heOz4zzwvAU3TAElGpYSiLdkrt-Iz-2v1gXT%2Fpj-Br7-4iRW5biNkYPjQDEn92v9CVU0Jn6k3Rh%2FWq-nulnCIIAQZj8Xo%2FtcpbfC1i5etk3IQ%2FyqBfA79U3NBS-g4Dta4GX8udMqEQYQqdi8T65mwA1026gf8pIp0l7DNOzdEqZa7f0drkHgC54tnBm74rVFExwlXDqQJzwhluLcj9JwKz60MwSXVKg0xs9x3wMxmcq9rmaWg80MTitdRs73Y%2FyjmyZVdFY2-XGZoaGCdKp023vpvw3FXxQQ%2F-%2Fw82TN1LwPoH7lz24tyUEt2WsAxj-uPjzxJkKhU7RwiSuPGcQ__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"} style={{ "width": "90px" }} /></li>
              </ul>
              <li>Utilizando el ciclo que usted desee, crear un menú de ejecución infinita hasta que el usuario desee terminar dicho ciclo.</li>
              <ul>
                <li><img src={"https://cdn.talentlms.com/sofkauniversity/1643644509_05.%20Taller%20Ciclos.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2Nkbi50YWxlbnRsbXMuY29tXC9zb2ZrYXVuaXZlcnNpdHlcLzE2NDM2NDQ1MDlfMDUuJTIwVGFsbGVyJTIwQ2ljbG9zLnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1OTU3MTIwMH19fV19&Signature=c3znjUkFnnu2iZah6lgagudVN-J-iV4wV8plybv7aO1xnZ0x4bwfX1xefNSMtVkgcPOjM-aPxEhmRXfiRTz3UtpJ00C6mKts%2FzgME3ib2MlR7HtSicU-o-R1CcAZ3CIx68g9IjVUW-eLLw1TRGazzPXutQEvOmZfTj14ck0UDblM3beeW4F6nvYtATBYTMjyAEMpsBiCF47X20cqJ-kxYP9fs0Xlba6CSFENiIksmFMuO-cMrAdV0%2FOqXWmQLuvUBC%2Fq77F4ZGlfX5yXd8f2WxX6xZf-mujTJ84h%2FurRCLlp8Ar0zISxymz5vkfGyhVqTHrt44at%2FEkZ3piF8gRqfg__&Key-Pair-Id=APKAJDCWVQTW4P3KI3XA"} style={{ "width": "163px" }} /></li>
              </ul>
              <li>Se está creando una aplicación que va a estar conectada con un prototipo que permita almacenar contactos telefónicos en el dispositivo. Para ello cada contacto debe contener
                nombre completo, teléfono y organización. Se requiere que la aplicación permita añadir 3 contactos verificando que el número no esté almacenado, buscar contactos almacenados y
                eliminar contactos si el usuario lo requiere. Recuerde que el sistema debe terminar cuando el usuario así lo indique.</li>
              <li>El parqueadero "El guardián" presta sus servicios de parqueadero nocturno para los usuarios del barrio y requiere una aplicación que permita registrar los vehículos que se
                cuidan en estas instalaciones. Se sugiere que el parqueadero tenga los atributos del vehículo como son, placa y marca, y los datos del cliente como son nombre completo y número de
                teléfono. Para cada vehículo se debe permitir la opción de ingresar al parqueadero, retirar del parqueadero y consultar si un vehículo se encuentra en el parqueadero. Recuerde que
                el sistema debe terminar cuando el usuario así lo indique. Tenga en presente que el parqueadero solo puede almacenar máximo 5 vehículos.</li>
              <li>La escuela automovilística "El Maestro" requiere una aplicación que permita registrar a sus clientes en los cursos de enseñanza automovilística y establecer quienes lo han
                aprobado para continuar con el trámite de adquirir la licencia de conducción. Para cada usuario se debe permitir registrar su ingreso al curso, consultar usuarios que hayan
                presentado el curso y resultados de la prueba del curso (si fueron aprobados o no). Recuerde que el sistema debe terminar cuando el usuario así lo indique. Tenga presente que la
                escuela tiene capacidad máxima de gestionar 8 usuarios en su totalidad.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Taller de Arreglos</Accordion.Header>
          <Accordion.Body>
            <b>  A continuación se describirán los ejercicios que deberá realizar. Por favor guardar los ejercicios dado que serán requeridos en entregas posteriores. Todos los ejercicios deben estar escritos en PSeInt con el perfil Estricto.</b>
            <ol>
              <li><a>Crear un vector de tipo Entero con 5 posiciones, llenarlo con información solicitada al usuario. Después de recoger toda la información, se requiere imprimir el índice de cada posición en el arreglo con su valor de la siguiente manera:</a>
                <ul>
                  <li><a> [0] = 55</a></li>
                  <li><a> [1] = 99</a></li>
                  <li><a> [2] = 11</a></li>
                  <li><a> [3] = 56</a></li>
                  <li><a> [4] = 69</a></li>

                </ul>
              </li>
              <li><a>Crear un arreglo de números enteros de 20 posiciones, el cual, debe ser llenado con números aleatorios entre 1 y 100; después de haber llenado dicho arreglo, se debe volver a recorrer utilizando un ciclo diferente al que se usó para llenarse e imprimir los números pares e impares. Ejemplo</a>
                <ul>
                  <li><a> Números pares: 2, 4, 6, 8, 10</a></li>
                  <li><a> Números impares: 1, 3, 5, 7, 9</a></li>
                </ul>
              </li>
              <li><a>Imprimir los números primos del 1 al 1000, el resultado debe ser buscado de forma matemática.</a></li>
              <li><a>Dada la siguiente matriz bidimensional, el cual debe de quemar en el código</a>
                <ul>
                  <li><a>01 02 03 04 05</a></li>
                  <li><a>06 07 08 09 10  </a></li>
                  <li><a>11 12 13 14 15  </a></li>
                  <li><a>16 17 18 19 20  </a></li> </ul>
                Utilizando el conocimiento adquirido, a excepción de hacerlo de forma manual, imprima la siguiente matriz bidimensional. <ul>
                  <li><a>01 02 03 04 05  </a></li>
                  <li><a>10 09 08 07 06  </a></li>
                  <li><a>11 12 13 14 15  </a></li>
                  <li><a>20 19 18 17 16  </a></li>
                </ul>
              </li>
              <li><a>Se debe de imprimir el siguiente cuadro</a>
                <ul>
                  <li>
                    <img src={image}></img>
                  </li>
                  <li>
                    <a>El usuario deberá insertar la fila y columna de la cual desea ver el resultado, el resultado de cada celda debe estar previamente calculado en una matriz bidimensional la cual cada resultado obedecerá a la fila y columna insertada por el usuario.</a>
                  </li>
                </ul>

              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Taller de Funciones </Accordion.Header>
          <Accordion.Body>
            A continuación se describirán los ejercicios que deberá realizar. Por favor guardar los ejercicios dado que serán requeridos en entregas posteriores. Todos los ejercicios deben estar escritos en PSeInt con el perfil Estricto.
            <ol>
              <li><a id="l1" >Organizar todos los puntos del taller de condicionales en modo funciones.</a></li>
              <li><a id="l2" >Organizar los puntos 6, 7 y 8 del taller de ciclos en modo funciones.</a></li>
              <li><a id="l3" >Organizar todos los puntos del taller de arreglos en modo funciones.</a></li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h1 style={{ "display": "flex", "alignItems": "center", "justify-content": "center" }} >Video</h1>
      <iframe style={{ "display": "block", "margin": "auto" }} width="560" height="315" src="https://www.youtube.com/embed/EzcimwRD08I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p style={{ "height": "20px" }}></p>

    </>
  );
}

export default pseint;