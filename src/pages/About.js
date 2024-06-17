import cien from "./img/100.png"
import pan1 from "./img/pan1.jpg"
import pan2 from "./img/pan2.jpg"
import pan3 from "./img/pan3.jpg"
import pan4 from "./img/pan4.jpg"
import pan5 from "./img/pan5.jpg"

const About = () => {
    
    return (
        <div>
            <div className="separador-horizontal"></div>
            <div className='full-header'>
                <h1 className="header">NOSOTROS</h1>
            </div>
            <div className="separador-horizontal3"></div>
            <div className='contenido'>
                <div className='subtitulos'>
                <h4 className='header2'>Sobre la panadera</h4>
                </div>
                <p>Disponemos de una gran variedad de productos en panadería con la máxima calidad y auténtico sabor.</p>
                <div className='contenedor-fila2-2'>
                    <div>
                        <img src={cien}/>
                    </div>
                    <div>
                        <p>
                        <i>NUESTRA EMPRESA</i> <br/> <br/>
La Panadera es una empresa familiar que nació a principios de los años 80 en el pueblo de Azagra (Navarra), con el fin de servir pan tanto a particulares como a tiendas, bares, restaurantes y supermercados.

La Panadera ha sido siempre una empresa preocupada por satisfacer las necesidades de sus clientes, ofreciendo siempre la máxima calidad tanto en sus productos como en sus servicios.

A lo largo de los años, La Panadera ha apostado por la innovación, desarrollando nuevos productos diferenciales tanto por su sabor, como por su funcionalidad. Como resultado de esa investigación, nace su producto estrella, Laxapan, el primer pan de fibra verde.

Su misión es ser la empresa líder en el negocio de la panadería y repostería, superando las expectativas de los clientes, a través de un equipo comprometido.

La Panadera adapta sus productos a las exigencias de sus clientes, es por ello que ofrecemos un especializado abanico de productos para el sector de la hostelería, modificando formas, pesos y tamaños de los productos en función de sus necesidades.

Ofrecemos un servicio rápido y seguro para el transporte de nuestros productos al lugar que el cliente desee. Además de disponer de un servicio a domicilio, también comercializamos nuestros productos por el resto de provincias.
                        </p>
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

export default About;
