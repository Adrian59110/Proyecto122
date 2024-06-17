
import "./styles.css"
import pan from "./img/pan.png"
import torta from "./img/torta.png"
import personas from "./img/personas.png"
import pan1 from "./img/pan1.jpg"
import pan2 from "./img/pan2.jpg"
import pan3 from "./img/pan3.jpg"
import pan4 from "./img/pan4.jpg"
import pan5 from "./img/pan5.jpg"


const Home = () => {
    return (
        <div>
          <div className="separador-horizontal"></div>
            <div className='full-header'>
                <h1 className="header">INICIO</h1>
            </div>
            <div className="separador-horizontal3"></div>
            <div className="texto-inicio">
              <h3 className="subtitulos">Qué nos diferencia</h3>
            </div>
            <div className='contenedor-fila2'>
              <div className="div-1-2">
                <img src={pan}/>
                <h2 className="subtitulos, header2">INNOVACIÓN</h2>
                <p>Apostamos por la innovación y el desarrollo de nuevos productos, diferenciales, que destaquen tanto por su sabor y calidad como por su fórmula innovadora. También trabajamos en descubrir productos funcionales que nos ayuden.</p>
              </div>
              <div className='div-2-2'>
                <img src={torta}/>
                <h2 className="subtitulos, header2">PERSONALIZACIÓN</h2>
                <p>En nuestros establecimientos personalizamos cualquier tipo de dulce, sobre todo nuestras tartas, en las que incluimos nombres, fotos, objetos de chocolate y todo lo que quieras.</p>
              </div>
              <div className='div-3-2'>
                <img src={personas}/>
                <h2 className="subtitulos, header2">PEDIDOS A DOMICILIO</h2>
                <p>Ofrecemos un servicio rápido y seguro para el transporte de nuestros productos al lugar que usted desee. Además, de disponer de un servicio a domicilio para llevarte el pan a casa, también comercializamos nuestros productos por el resto de la provincia.</p>
              </div>
          </div>
          <div className="separador-horizontal4"></div>
          <div className="contactos">
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
    );
};

export default Home;
