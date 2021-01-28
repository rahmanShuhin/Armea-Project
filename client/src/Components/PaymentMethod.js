import React from "react";
import TopSection from "./SameComp/TopSection";

const PaymentMethod = () => {
  return (
    <div className="cookies">
      <div>
        <TopSection
          h_2={"Método de "}
          spa_n={"pago"}
          lin_K={"Método de pago"}
        ></TopSection>
      </div>
      <div>
        <p>TRANSFERENCIA BANCARIA</p>
        <p className="mb">
          Al realizar tu pedido recibirás un correo con los datos de cuenta a la
          que realizar la transferencia.
        </p>
        <p>TARJETA DE CRÉDITO</p>
        <p className="mb">
          Realiza el pago del pedido con tu tarjeta de crédito Visa o
          MasterCard.
        </p>
        <p>PAYPAL</p>
        <p className="mb">
          Realiza el pago mediante tu cuenta de Paypal. (Paypal tiene un coste
          adicional del +1,5% del valor de la compra)
        </p>
        <p>FRACCIONA TU PAGO CON SEQURA</p>
        <p className="mb">
          Fracciona tu pago en 3, 6 o 12 cuotas mensuales. Inmediato, sin
          papeleo y con sólo un coste fijo por cuota.
        </p>
        <p className="mb">¿Cómo funciona?</p>
        <p>
          Elige Fracciona tu pago con SeQura al realizar tu pedido y paga sólo
          la primera cuota.
        </p>
        <p>Recibe tu pedido.</p>
        <p>El resto de pagos se cargarán automáticamente a tu tarjeta.</p>
        <p className="mb">
          Además puedes pagar el total de tu pedido cuando quieras sin costes
          adicionales.
        </p>
        <p className="mb">¿Cuánto cuesta este servicio?</p>
        <p className="mb">
          El coste del servicio es de 3 a 27€ por cuota, dependiendo del importe
          del pedido. No hay intereses ni existe ningún otro pago adicional.
        </p>
        <p className="mb">Tengo más preguntas</p>
      </div>
    </div>
  );
};

export default PaymentMethod;
