// src/components/FAQ.tsx
// Este componente no necesita "use client"
import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const faqItems = [
  {
    question: '¿Necesito conocimientos de código para usar PampTienda?',
    answer: '¡Absolutamente no! PampTienda está diseñada para ser intuitiva y fácil de usar, sin necesidad de conocimientos técnicos. Puedes crear y gestionar tu tienda completamente desde el panel de administración.',
  },
  {
    question: '¿Puedo usar mi propio dominio?',
    answer: 'Sí, con el Plan Pro y Business puedes conectar tu propio dominio personalizado. El Plan Gratuito te ofrece un subdominio de PampTienda.',
  },
  {
    question: '¿Qué métodos de pago puedo integrar?',
    answer: 'PampTienda te permite integrar fácilmente las pasarelas de pago más populares del mercado, como Stripe y PayPal, para que puedas aceptar pagos de tus clientes de forma segura.',
  },
  {
    question: '¿Existe algún límite de productos?',
    answer: 'El Plan Gratuito te permite hasta 10 productos, mientras que los planes Pro y Business te dan productos ilimitados.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Preguntas Frecuentes</h2>
        <Accordion defaultActiveKey="0">
          {faqItems.map((item, index) => (
            <Accordion.Item key={index} eventKey={String(index)} className="mb-2 border-0 shadow-sm rounded-3">
              <Accordion.Header className="fw-bold">{item.question}</Accordion.Header>
              <Accordion.Body className="text-muted">{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;