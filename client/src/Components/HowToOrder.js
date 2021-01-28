import React from "react";
import TopSection from "./SameComp/TopSection";
import step_1 from "../images/step_1.png";
import step_2 from "../images/step_2.png";
import step_3 from "../images/step_3.png";
import step_4 from "../images/step_4.png";
const HowToOrder = () => {
  return (
    <div className="cookies">
      <div>
        <TopSection
          h_2={"Cómo hacer un"}
          spa_n={"pedido"}
          lin_K={"Cómo hacer un pedido"}
        ></TopSection>
      </div>
      <div>
        <p className="mb">
          En armeamuebles.com encontrarás el catálogo completo de los productos
          que diseñamos, fabricamos y vendemos. La compra se realiza
          íntegramente de forma online, mediante un procedimiento muy sencillo.
        </p>
        <p className="mb">
          En el menú de navegación principal de la web, puedes encontrar todos
          los productos de Bainba catologados por tipologías. Dormitorios
          completos, camas y cabeceros, todos los complementos para la
          habitación, y una sección especial de dormitorios Disney. Cada uno de
          los productos puede visualizarse en una ficha de producto, en la que
          se explican sus características. Aquí encontrarás toda la información:
          precio, medidas, los materiales con los que ha sido fabricado, y el
          número de referencia.
        </p>
        <p className="mb">
          La mayoría de nuestros productos pueden personalizarse, así que en la
          misma ficha del mueble podrás elegir las medidas y el color y forma de
          algunos elementos del mobiliarios, como los tiradores.
        </p>
        <p className="mb">
          Cuando hayas encontrado el producto ideal para ti, y quieras
          comprarlo, sólo tienes que añadirlo al carrito. Pudes añadir todos los
          productos que desees, y finalizar la compra cuando quieras. Si
          prefieres dejar tu selección guardada, los productos se quedarán
          registrados en tu carrito y sólo tendrás que volver a entrar y
          completar el proceso de compra.
        </p>
        <p className="mb">
          El proceso de compra es sencillo y consta de cinco pasos.
        </p>
        <h3 className="mb">1. El carrito</h3>
        <p className="mb">
          En este primer paso, encontrarás un resumen de tu carrito de compra,
          con todos los productos que has agregado, y el precio de cada uno de
          ellos, junto con el precio final de tu compra. Puedes eliminar
          cualquiera de los productos del carrito en este momento.
        </p>
        <img src={step_1} className="mb" alt="" />
        <h3 className="mb">2. Login</h3>
        <p className="mb">
          Si ya estás registrado en armeamuebles.com, solo tienes que introducir
          tus datos de acceso. Si es la primera vez que compras en la tienda
          online, el proceso de registro es muy sencillo y solo te llevará un
          minuto. Pon tus datos y contraseña y continúa con tu compra. La
          próxima vez que compres, podrás utilizar estos mismos datos.
        </p>
        <img src={step_2} className="mb" alt="" />
        <h3 className="mb">3. Pago</h3>
        <p className="mb">
          En armeamuebles.com contamos con varios métodos de pago, para que
          elijas el que más te convenga. En el siguiente apartado te ampliamos
          la información. Cuando hayas elegido tu forma de pago, introduce los
          datos y finaliza la compra.
        </p>
        <img src={step_3} className="mb" alt="" />
        <h3 className="mb">4.Fabricación </h3>
        <p className="mb">
          Una vez realizados los pedidos, el estado de nuestro pedido cambiará a
          "En fabricación". Una vez este en este estado, los pedidos tienen un
          periodo de unos 15 dias laborales de fabricación aproximadamente,
          depende del producto se podrá extender el plazo entre unos 15/20 dias
          laborales.
        </p>
        <p className="mb">
          En cada de ficha de producto se quedará indicado su tiempo de
          fabricación.
        </p>
        <p className="mb">
          Los plazos de fabricación son aproximados, por lo que en algunos
          productos no serán 15 días, podrán ser menos, todo depende del stock
          del producto en ese momento. Se podrá consultar la disponibilidad del
          producto en nuestra atención al cliente.
        </p>
        <h3 className="mb">5. Envío</h3>
        <p className="mb">
          Debido a las circunstancias que estamos viviendo por el COVID-19, los
          pedidos podrán ser retrasados por motivos del transporte, por lo que
          en algunos envíos no se podrá cumplir nuestros plazos de entrega
          establecidos. Pedimos disculpas, haremos todo lo posible para que
          lleguen cuanto antes a su domicilio.
        </p>
        <p className="mb">
          El tiempo de preparación del pedido previo al envío será de 1 a 5
          días.
        </p>
        <p className="mb">
          Los plazos de entrega varían según el tipo de envío:
        </p>
        <p>Entre 2 a 5 días laborables los envíos a península.</p>
        <p>
          Entre 4 y 6 días laborables para envíos a fuera de península a Europa
          o Baleares.
        </p>
        <p>
          Portugal (Península): entrega en 2 a 5 días hábiles, según el código
          postal del destino.
        </p>
        <p className="mb">
          Europa: entre 4 y 6 días laborales, en función del país de destino.
        </p>
        <p className="mb">TIPO DE ENVIOS: </p>
        <p>
          Envío gratuito: Entrega de 2 a 5 días (con este envío los muebles se
          dejarán en el portal del domicilio)
        </p>
        <p>
          Envío con subida garantizada al domicilio: Entrega de 3 a 5 días
          (coste del envío 35€) Se dejará en la puerta del domicilio.{" "}
        </p>
        <p>
          Envío con montadores: Entrega de 15-20 días. Los montadores se pondrán
          en contacto con el cliente para establecer día y hora de entrega y
          montaje.
        </p>
        <p className="mb">
          El plazo de entrega es aproximado por lo que puede variar las fechas
          de entrega.{" "}
        </p>
        <p className="mb">
          Para envíos de habitaciones completas, muebles especiales, producto en
          fabricación, tendrá otro plazo de entrega ( 15 días aprox de
          fabricación), esta mercancía se enviará paletizada y la entrega será
          al portal del domicilio (salvo que se contrate el servicio de montaje
          o subida garantizada). El cliente recibirá un mensaje cuando su pedido
          salga de fabrica y por la agencia de transporte para comunicar la
          entrega. Para más información contacta con nuestro departamento de
          Atención al cliente.
        </p>
        <p className="mb">
          *Se podrá insertar horario de entrega en el apartado de observaciones
          del pedido, teniendo en cuenta un margen de entrega de 4 horas.{" "}
        </p>
        <img src={step_4} alt="" className="mb" />
        <h3 className="mb"> POLÍTICA DE DEVOLUCIONES</h3>
        <p className="mb">
          Tiene usted derecho a desistir del presente contrato en un plazo de 14
          días sin necesidad de justificación.
        </p>
        <p className="mb">
          El plazo de desistimiento expirará a los 14 días del día que usted o
          un tercero por usted indicado, distinto del transportista, adquiera la
          posesión material de los bienes.
        </p>
        <p className="mb">
          Para ejercer el derecho de desistimiento, deberá contactar con el
          centro de atención al cliente de bainba.com en el número de teléfono
          965 082 828 o bien enviar un e-mail a la dirección info@bainba.com
          indicando su nombre, domicilio, número de pedido/factura y número de
          teléfono, manifestando su decisión de desistir. No se aceptarán
          devoluciones no autorizadas expresamente por el vendedor.
        </p>
        <p className="mb">
          Para cumplir el plazo de desistimiento, basta que la comunicación
          relativa al ejercicio por su parte del derecho de desistimiento sea
          enviada antes de que venza el plazo de desistimiento.
        </p>
        <p className="mb">
          El cliente podrá enviar el producto por el medio de transporte de su
          elección, incluyendo el servicio de correos. Asimismo, si lo desea
          puede solicitar por teléfono o a través de e-mail que le mandemos un
          transportista, el cual se pondrá en contacto con el cliente para
          recoger el producto en la dirección que le indique (siempre localizada
          en el mismo país en el que efectuaste tu pedido).
        </p>
        <p className="mb">
          Sea cual sea la forma de devolución elegida, el cliente deberá asumir
          el coste directo de devolución de los bienes, es decir, el transporte
          hasta nuestras instalaciones.
        </p>
        <p className="mb">
          Sólo se admitirá la devolución de artículos en perfecto estado, en su
          embalaje original y que no hayan sido utilizados por el cliente. Junto
          con la mercancía devuelta, el cliente incluirá una copia de la factura
          de venta que se envío con la mercancía, así como un número de cuenta
          en el que se haya de realizar el abono de la mercancía.
        </p>
        <p className="mb">
          Una vez verificado el estado de la mercancía devuelta, y descontados
          los gastos de entrega, se procederá al abono del precio del producto
          en las 48 horas siguientes a la recepción de la devolución.
        </p>
        <p className="mb">
          No se hará ningún reembolso si el producto ha sido usado, productos
          que no estén en las mismas condiciones en las que fueron entregados o
          que hayan sufrido algún daño.
        </p>
        <p className="mb">
          Las devoluciones que sean aceptadas por bainba.com como resultado de
          un error en el envío no imputable al cliente, correrán por cuenta del
          vendedor, incluyendo los gastos derivados del envío y recogida de la
          mercancía errónea.
        </p>
        <p className="mb">
          Solo será usted responsable de la disminución de valor de los bienes
          resultante de una manipulación distinta a la necesaria para establecer
          la naturaleza, las características y el funcionamiento de los bienes.
        </p>
      </div>
    </div>
  );
};

export default HowToOrder;
