import pan from "./img/pan.png"
import camion from "./img/camion.png"
import precocido from "./img/preco.png"
import pan1 from "./img/pan1.jpg"
import pan2 from "./img/pan2.jpg"
import pan3 from "./img/pan3.jpg"
import pan4 from "./img/pan4.jpg"
import pan5 from "./img/pan5.jpg"
const Contact = () => {

    return (
        <div>
            <div className="separador-horizontal"></div>
            <div className='full-header'>
                <h1 className="header">SERVICIOS A EMPRESAS</h1>
            </div>
            <div className="separador-horizontal3"></div>
            <div className='contenido'>
                <div className='subtitulo-a'>
                    <h4>Servicio a empresas</h4>
                </div>
                <div className='contenedor-fila2-2'>
                    <div className="div-1-2">
                        <img src={pan}/>
                        <h2 className="subtitulos, header2">HOSTELERIA</h2>
                        <p>La Panadera adapta sus productos a las exigencias de sus clientes, es por ello que Ofrecemos un especializado servicio para nuestros clientes del sector de la hostelería modificando formas, pesos y tamaños de nuestros productos atendiendo sus necesidades.</p>
                    </div>
                    <div className="div-2-2">
                        <img src={camion}/>
                        <h2 className="subtitulos, header2">CATERING</h2>
                        <p>Servicio de Catering a domicilio para bodas, banquetes, cenas… y cualquier evento especial en el que usted desee probar nuestros ricos bocados.</p>
                    </div>
                    <div className="div-3-2">
                        <img src={precocido}/>
                        <h2 className="subtitulos, header2">PRECOCIDO</h2>
                        <p>Fabricamos todo tipo de pan y lo llevamos a cualquier punto con las máximas garantías de calidad. Lo preparamos siguiendo los procesos más selectivos, listo para realizar el acabado en el punto de venta.</p>
                    </div>
                </div>
                <div className="separador-horizontal5"/>
                <div className="contenedor-fila2-2">
                    <div>
                    <div className="contactos2">
                        <legend>
                            <form action="#" method="post">
                                <h2>Formulario de Contacto</h2>
                                <p>La Panadera es la más creativa, con un equipo que nunca duerme. Dinos algo para que nosotros te respondamos.</p>
      
                                <label for="name">Nombre:</label>
                                <input type="text" id="name" name="name" required />

                                <label for="email">Correo Electrónico:</label>
                                <input type="email" id="email" name="email" required />

                                <label for="phone">Teléfono:</label>
                                <input type="tel" id="phone" name="phone" required />

                                <label for="message">Mensaje:</label>
                                <textarea id="message" name="message" rows="5" required></textarea>

                                <button type="submit">Enviar</button>
                            </form>
                        </legend>
                    </div>
                    </div>
                    <div className="ct"><br/>
                        <h2 className="subtitulos, header2">CONTACTANOS</h2><br/>
                        <p>No importa el tamaño del negocio, preséntanos tu proyecto y juntos lo haremos realidad. Es independiente si solamente es para una tienda o varias, o un grupo de franquicias.<br/>
                        <br/>
Nuestros proyectos se adaptan a todo tipo de dimensiones y a cualquier tipología de negocio.<br/>
<br/>
Pan precocido: se recibe el pedido de forma regular en masa ultracongelada para cocer en punto de venta y disponer de pan caliente de calidad durante todo el día.<br/>
Fabricamos todo tipo de pan y lo llevamos con las máximas garantías de calidad, siguiendo los procesos más selectivos para hacer el acabado en el punto de venta.</p>
                    </div>
                </div>
                <div className="separador-horizontal8"></div>
          <div className="subtitulo-c">
            <h4 className="podria-interesarte-b">
            Podria interesarte...<br/>
            Nuestros productos mejor valorados.
            </h4>
          </div>
          <div className="contenedor-cartas">
            <div class="card">
              <img src={pan1} alt="Imagen de la cartilla" class="card-img"/>
              <div class="card-content">
              <h2 class="card-title">Bollo de fibra</h2><br/><br/>
              <p class="card-description">Categoria: Pan precocido</p><br/>
              <button class="card-button">Agregar al carrito</button>
            </div>
            </div>
            <div class="card">
              <img src={pan2} alt="Imagen de la cartilla" class="card-img"/>
              <div class="card-content">
              <h2 class="card-title">Palmerica sola</h2><br/>
              <p class="card-description">Categoria: Repostería fina</p><br/>
              <button class="card-button">Agregar al carrito</button>
            </div>
            </div>
            <div class="card">
              <img src={pan3} alt="Imagen de la cartilla" class="card-img"/>
              <div class="card-content">
              <h2 class="card-title">Focaccia aceite oliva</h2><br/>
              <p class="card-description">Categoria: Pan precocido</p><br/>
              <button class="card-button">Agregar al carrito</button>
            </div>
            </div>
            <div class="card">
              <img src={pan4} alt="Imagen de la cartilla" class="card-img"/>
              <div class="card-content">
              <h2 class="card-title">Mantecosas</h2><br/><br/>
              <p class="card-description">Categoria: Pastas caseras</p><br/>
              <button class="card-button">Agregar al carrito</button>
            </div>
            </div>
            <div class="card">
              <img src={pan5} alt="Imagen de la cartilla" class="card-img"/>
              <div class="card-content">
              <h2 class="card-title">Rosca glaseada</h2><br/>
              <p class="card-description">Categoria: Masas Caseras</p> <br/>
              <button class="card-button">Agregar al carrito</button>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;
