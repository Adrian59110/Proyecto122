import A from "./img/LA-PANADERA-A.jpg"
import B from "./img/LA-PANADERA-B.jpg"
import C from "./img/LA-PANADERA-C.jpg"
import D from "./img/LA-PANADERA-D.jpg"
import pan1 from "./img/pan1.jpg"
import pan2 from "./img/pan2.jpg"
import pan3 from "./img/pan3.jpg"
import pan4 from "./img/pan4.jpg"
import pan5 from "./img/pan5.jpg"

const Services = () => {
    

    return (
        <div>
            <div className="separador-horizontal"></div>
            <div className='full-header'>
                <h1 className="header">ESTABLECIMIENTOS</h1>
            </div>
            <div className="separador-horizontal3"></div>
            <div className="contenido">
                <div className='subtitulos'>
                    <h4 className='header2'>Establecimientos y Franquicias</h4>
                </div>
                <p>Orgullosamente sirviendo Calidad en Productos horneados <br/>

La Panadera tenemos tanto establecimientos propios como franquicias en distintos pueblos de la comarca como Azagra, Calahorra, Carcar o Rincón de Soto. <br/>

En los establecimientos, además de adquirir nuestros panes artesanos, también disponemos de una gran cantidad de tipos de dulces, pasteles y tartas. Damos la posibilidad de personalizar los productos según las necesidades del cliente, especialmente las tartas en las que incluimos nombres, fotos, objetos de chocolate y cualquier cosa que el cliente desee.<br/>

Además, en todos ellos disponemos de servicio de cafetería para poder probar y degustar nuestros productos in situ.<br/></p>
            <div className="contenedor-fila2-2">
                <div >
                    <img src={A}className="img-s"/ >
                </div>
                <div >
                    <img src={B}className="img-s"/>  
                </div>
                <div >
                    <img src={C}className="img-s"/>
                </div>
                <div >
                    <img src={D}className="img-s"/>  
                </div>
            </div>
            <div className="separador-horizontal5"></div>
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
          <div className="separador-horizontal7"></div>
          <div className="subtitulo-b">
            <h4 className="podria-interesarte">
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

export default Services;
