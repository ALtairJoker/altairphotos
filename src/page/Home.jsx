import React from "react";
import "./css/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <main className="contenedorPortafolio contenedorVisible">
        <section className="derecha">
          <img src="img/maria.jpg" alt="" className="foto" />
        </section>
        <section className="izquierda">
          <h2>Retratos de personas en diferentes entornos urbanos.</h2>{" "}
          <p>
            Explora la diversidad de la vida en la ciudad a través de retratos
            que capturan la esencia de las personas en su entorno urbano. Cada
            imagen cuenta una historia única, revelando la belleza, la
            autenticidad y la expresión de aquellos que pueblan nuestras calles
            y vecindarios. Descubre el arte de la vida urbana a través de la
            lente de la fotografía.
          </p>{" "}
        </section>
        <section className="derecha">
          <h2>Retratos en la Naturaleza.</h2>
          <p>
            Adéntrate en un mundo de serenidad y maravilla con los retratos en
            la naturaleza y paisajes capturados por un fotógrafo. Cada imagen es
            un testimonio de la conexión entre el ser humano y la naturaleza,
            capturando la esencia de las personas en entornos naturales
            majestuosos. Experimenta la tranquilidad de bosques profundos, la
            grandiosidad de montañas imponentes y la serenidad de playas doradas
            a través de los retratos que celebran la armonía entre el ser humano
            y el mundo natural, inmortalizados por la lente de un fotógrafo
            apasionado por la naturaleza.
          </p>
        </section>
        <section className="izquierda">
          <img src="img/manu.jpg" alt="" className="foto" />
        </section>
        <section className="derecha">
          <img src="img/kata.jpg" alt="" className="foto" />
        </section>
        <section className="izquierda">
          <h2>El Arte de la Edición Fotográfica.</h2>
          <p>
            Sumérgete en el mundo del arte de la edición fotográfica a través de
            la visión de un fotógrafo apasionado. Cada imagen es un testimonio
            de la creatividad y la habilidad detrás de la edición, que
            transforma fotografías en obras de arte únicas. Explora la magia de
            la postproducción mientras cada imagen cobra vida con colores,
            efectos y detalles que realzan su belleza y significado. Celebra la
            habilidad de un fotógrafo en el arte de la edición, que lleva la
            fotografía a un nuevo nivel de expresión y apreciación.
          </p>
        </section>
        <section className="derecha">
          <h2>El Arte de los Retratos.</h2>
          <p>
            Explora el arte de los retratos a través de la mirada única de un
            fotógrafo. Cada imagen es un testimonio de la habilidad y
            sensibilidad detrás de los retratos, que capturan la esencia y la
            personalidad de cada individuo. Adéntrate en un mundo donde los
            rostros se convierten en lienzos y las historias se narran a través
            de las miradas. Celebra el arte de un fotógrafo en la creación de
            retratos que transmiten emociones, carácter y belleza, creando una
            conexión inigualable entre el sujeto y el espectador.
          </p>
        </section>
        <section className="izquierda">
          <img src="img/chiri.jpg" alt="" className="foto" />
        </section>
        <section className="derecha">
          <img src="img/yuka.jpg" alt="" className="foto" />
        </section>
        <section className="izquierda">
          <h2>Capturando la Esencia de tus Compañeros Peludos.</h2>
          <p>
            Celebra a tus queridas mascotas a través de la lente de un fotógrafo
            dedicado. Cada imagen es un testimonio de la alegría y el cariño que
            tus compañeros peludos aportan a tu vida. Adéntrate en un mundo
            donde las mascotas se convierten en estrellas, sus personalidades
            brillan y sus travesuras quedan inmortalizadas. Celebra la belleza y
            el espíritu de tus mascotas con retratos que capturan su
            autenticidad, creando recuerdos invaluables que atesorarás para
            siempre.
          </p>
        </section>
        <section className="derecha">
          <h2>Explorando el Mundo a Través de la Fotografía de Paisajes.</h2>
          <p>
            Embárcate en un viaje visual por algunos de los paisajes más
            impresionantes del mundo a través de la mirada de un fotógrafo
            apasionado. Cada imagen es una ventana a la majestuosidad de la
            naturaleza, donde montañas, océanos, cielos y tierras se unen en
            armonía. Sumérgete en la serenidad de bosques antiguos, la grandeza
            de picos montañosos y la tranquilidad de playas doradas, todo
            capturado con un ojo artístico. Celebra la belleza y la diversidad
            de nuestro planeta a través de la fotografía de paisajes, que te
            transporta a lugares lejanos y te conecta con la maravilla de la
            Tierra.
          </p>
        </section>
        <section className="izquierda">
          <img src="img/cascada.jpg" alt="" className="foto" />
        </section>
        <button onClick={() => navigate("/contacto")}>
          <span>Ir a Contacto</span>
        </button>
      </main>
      <div className="oculto">
        <section className="foto1">
          <img src="img/maria.jpg" alt="" className="foto" />
        </section>
        <section className="ocultoDiv">
          <h2>Retratos de personas en diferentes entornos urbanos.</h2>{" "}
          <p>
            Explora la diversidad de la vida en la ciudad a través de retratos
            que capturan la esencia de las personas en su entorno urbano. Cada
            imagen cuenta una historia única, revelando la belleza, la
            autenticidad y la expresión de aquellos que pueblan nuestras calles
            y vecindarios. Descubre el arte de la vida urbana a través de la
            lente de la fotografía.
          </p>{" "}
        </section>
        <section>
          <img src="img/manu.jpg" alt="" className="foto" />
        </section>
        <section className="ocultoDiv">
          <h2>Retratos en la Naturaleza.</h2>
          <p>
            Adéntrate en un mundo de serenidad y maravilla con los retratos en
            la naturaleza y paisajes capturados por un fotógrafo. Cada imagen es
            un testimonio de la conexión entre el ser humano y la naturaleza,
            capturando la esencia de las personas en entornos naturales
            majestuosos. Experimenta la tranquilidad de bosques profundos, la
            grandiosidad de montañas imponentes y la serenidad de playas doradas
            a través de los retratos que celebran la armonía entre el ser humano
            y el mundo natural, inmortalizados por la lente de un fotógrafo
            apasionado por la naturaleza.
          </p>
        </section>
        <section>
          <img src="img/kata.jpg" alt="" className="foto" />
        </section>
        <section className="ocultoDiv">
          <h2>El Arte de la Edición Fotográfica.</h2>
          <p>
            Sumérgete en el mundo del arte de la edición fotográfica a través de
            la visión de un fotógrafo apasionado. Cada imagen es un testimonio
            de la creatividad y la habilidad detrás de la edición, que
            transforma fotografías en obras de arte únicas. Explora la magia de
            la postproducción mientras cada imagen cobra vida con colores,
            efectos y detalles que realzan su belleza y significado. Celebra la
            habilidad de un fotógrafo en el arte de la edición, que lleva la
            fotografía a un nuevo nivel de expresión y apreciación.
          </p>
        </section>
        <section>
          <img src="img/chiri.jpg" alt="" className="foto" />
        </section>
        <section className="ocultoDiv">
          <h2>El Arte de los Retratos.</h2>
          <p>
            Explora el arte de los retratos a través de la mirada única de un
            fotógrafo. Cada imagen es un testimonio de la habilidad y
            sensibilidad detrás de los retratos, que capturan la esencia y la
            personalidad de cada individuo. Adéntrate en un mundo donde los
            rostros se convierten en lienzos y las historias se narran a través
            de las miradas. Celebra el arte de un fotógrafo en la creación de
            retratos que transmiten emociones, carácter y belleza, creando una
            conexión inigualable entre el sujeto y el espectador.
          </p>
        </section>
        <section>
          <img src="img/yuka.jpg" alt="" className="foto" />
        </section>
        <section className="ocultoDiv">
          <h2>Capturando la Esencia de tus Compañeros Peludos.</h2>
          <p>
            Celebra a tus queridas mascotas a través de la lente de un fotógrafo
            dedicado. Cada imagen es un testimonio de la alegría y el cariño que
            tus compañeros peludos aportan a tu vida. Adéntrate en un mundo
            donde las mascotas se convierten en estrellas, sus personalidades
            brillan y sus travesuras quedan inmortalizadas. Celebra la belleza y
            el espíritu de tus mascotas con retratos que capturan su
            autenticidad, creando recuerdos invaluables que atesorarás para
            siempre.
          </p>
        </section>
        <section>
          <img src="img/cascada.jpg" alt="" className="foto" />
        </section>
        <section className="ocultoDiv">
          <h2>Explorando el Mundo a Través de la Fotografía de Paisajes.</h2>
          <p>
            Embárcate en un viaje visual por algunos de los paisajes más
            impresionantes del mundo a través de la mirada de un fotógrafo
            apasionado. Cada imagen es una ventana a la majestuosidad de la
            naturaleza, donde montañas, océanos, cielos y tierras se unen en
            armonía. Sumérgete en la serenidad de bosques antiguos, la grandeza
            de picos montañosos y la tranquilidad de playas doradas, todo
            capturado con un ojo artístico. Celebra la belleza y la diversidad
            de nuestro planeta a través de la fotografía de paisajes, que te
            transporta a lugares lejanos y te conecta con la maravilla de la
            Tierra.
          </p>
        </section>
        <button onClick={() => navigate("/contacto")}>
          <span>Ir a Contacto</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
