import React from "react";
import TopSection from "./SameComp/TopSection";

const Cookie = () => {
  return (
    <div className="cookies">
      <div>
        <TopSection
          h_2={"Política de "}
          spa_n={"cookies"}
          lin_K={"Política de cookies"}
        ></TopSection>
      </div>
      <div>
        <p className="mb">POLÍTICA DE COOKIES</p>
        <p className="mb">
          Las cookies son un fichero que se descarga en el ordenador al acceder
          a determinadas páginas web, permitiendo almacenar y recuperar
          información sobre los hábitos de navegación de un usuario o su equipo
          (entre otras cosas). Dependiendo de la información que contengan y de
          la forma en que se utilice el equipo, pueden emplearse para reconocer
          al usuario. El navegador del usuario memoriza las cookies en el disco
          duro solamente durante la sesión actual, ocupando un espacio de
          memoria mínimo y sin perjudicar el ordenador. Las cookies no contienen
          ninguna clase de información personal específica y la mayoría se
          borran del disco duro al finalizar la sesión de navegador (cookies de
          sesión).
        </p>
        <p className="mb">
          Muchos navegadores aceptan las cookies como estándar e,
          independientemente del tipo que sean, permiten o impiden las cookies
          temporales o memorizadas en los ajustes de seguridad.
        </p>
        <p className="mb">
          Sin su expreso consentimiento –mediante la activación de las cookies
          en el navegador–, bainba.com no enlazará en las cookies los datos
          memorizados con información personal proporcionados en el momento del
          registro o la compra.
        </p>
        <p className="mb">¿Qué tipos de cookies utiliza esta página web?</p>
        <p className="mb">
          - Cookies técnicas. Permiten la navegación a través de una página web,
          plataforma o aplicación, así como la utilización de diferentes
          opciones o servicios: controlar el tráfico y la comunicación de datos,
          identificar la sesión, acceder a partes restringidas, recordar los
          elementos que integran un pedido, efectuar la compra de un pedido,
          realizar la solicitud de inscripción o participación en un evento,
          utilizar elementos de seguridad durante la navegación, almacenar
          contenidos para la difusión de videos o sonido, o compartir contenidos
          a través de redes sociales.
        </p>
        <p className="mb">
          - Cookies de personalización. Permiten acceder al servicio con algunas
          características generales predefinidas en función de una serie de
          criterios en el terminal del usuario: el idioma, el tipo de navegador
          a través del cual accede al servicio, la configuración regional desde
          donde accede al servicio, etc.
        </p>
        <p className="mb">
          - Cookies de análisis. Ya sean tratadas por nosotros o por terceros,
          permiten cuantificar el número de usuarios y así realizar la medición
          y el análisis estadístico sobre la utilización del servicio ofertado.
          Para ello, se analiza la navegación en la página web a fin de mejorar
          la oferta de productos y/o servicios.
        </p>
        <p className="mb">
          - Cookies de terceros. bainba.com puede utilizar servicios de terceros
          que recopilarán información con fines estadísticos sobre el uso del
          sitio web por parte del usuario, así como para la prestación de
          servicios relacionados con la actividad del sitio web y otros
          servicios de internet.
        </p>
        <p className="mb">Concretamente, esta página web utiliza:</p>
        <p>Addthis</p>
        <p className="mb">
          Es un servicio que permite compartir el contenido de bainba.com en
          redes sociales mediante iconos identificativos. Utiliza cookies
          técnicas para su funcionamiento y cookies de personalización para
          recordar la configuración que el usuario hace de los iconos de las
          redes sociales.
        </p>
        <p className="mb">http://www.addthis.com/privacy</p>
        <p>Facebook</p>
        <p className="mb">
          bainba.com utiliza diferentes servicios de Facebook que, a su vez,
          hacen uso de cookies técnicas y de personalización. Estos servicios
          son el «like box» y el «like button».
        </p>
        <p className="mb">http://es-es.facebook.com/help/cookies</p>
        <p>Youtube</p>
        <p className="mb">
          bainba.com muestra videos de Youtube en diferentes apartados del sitio
          web. Estos videos hacen uso de cookies técnicas y de personalización
          para su correcto funcionamiento.
        </p>
        <p className="mb">
          https://www.google.com/policies/technologies/cookies/
        </p>
        <p className="mb">
          Este sitio web también utiliza Google Analytics, un servicio analítico
          de web que ofrece Google Inc., con sede central en 1600 Amphitheatre
          Parkway, Mountain View, California 94043 (Estados Unidos). Para la
          prestación de dichos servicios se emplean cookies que recopilan toda
          la información (incluida la dirección IP del usuario), la cual será
          transmitida, tratada y almacenada por Google en los términos fijados
          en la webGoogle.com. Ello supone la posible transmisión de esta
          información a terceros por razones de exigencia legal o a fin de ser
          procesada por cuenta de Google.
        </p>
        <p className="mb">
          Al utilizar este sitio web, el usuario acepta expresamente el
          tratamiento de la información recabada en la forma y con los fines
          anteriormente mencionados. Asimismo, reconoce la posibilidad de
          rechazar el tratamiento de tales datos o la información mediante la
          selección de la configuración apropiada para este fin en su navegador.
          No obstante, es posible que esta opción de bloqueo de las cookies en
          el navegador no permita el uso pleno de todas las funcionalidades del
          sitio web.
        </p>
        <p className="mb">
          Usted puede permitir, bloquear o eliminar las cookies instaladas
          mediante la configuración de las opciones del navegador:
        </p>
        <p>Chrome</p>
        <p>Explorer</p>
        <p>Firefox </p>
        <p>Safari</p>
        <p>
          Si tiene dudas sobre esta política de cookies, puede contactar con
          bainba.com (info@bainba.com).
        </p>
      </div>
    </div>
  );
};

export default Cookie;
