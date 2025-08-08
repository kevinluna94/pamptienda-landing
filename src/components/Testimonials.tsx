// src/components/Testimonials.tsx
// Este componente no necesita "use client"
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'PampTienda hizo que vender mis productos en línea fuera increíblemente fácil. La plataforma es intuitiva y el soporte es excelente. ¡Lo recomiendo a todos!',
    author: 'Ana P., Dueña de "Dulces Recuerdos"',
  },
  {
    quote: 'Encontré en PampTienda la solución perfecta para mi negocio de ropa. Pude personalizar mi tienda y empezar a vender en solo un par de horas. ¡Fantástico!',
    author: 'Juan S., Creador de "Moda Urbana"',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Lo que dicen nuestros clientes</h2>
        <Row className="justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4">
                <Card.Body className="text-center">
                  <FaQuoteLeft size={30} className="text-primary mb-3" />
                  <blockquote className="blockquote mb-0">
                    <p className="mb-3 fst-italic">"{testimonial.quote}"</p>
                    <footer className="blockquote-footer mt-3">
                      {testimonial.author}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;