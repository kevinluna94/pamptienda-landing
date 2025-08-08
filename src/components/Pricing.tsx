// src/components/Pricing.tsx
// Este componente no necesita "use client"
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const plans = [
  {
    title: 'Plan Gratuito',
    price: '$0/mes',
    description: 'Ideal para empezar tu negocio online.',
    features: ['10 productos', 'Subdominio de PampTienda', 'Soporte básico', 'Plantillas limitadas'],
    buttonText: 'Empezar gratis',
    variant: 'outline-primary',
  },
  {
    title: 'Plan Pro',
    price: '$29/mes',
    description: 'El más popular. Para negocios que quieren crecer.',
    features: ['Productos ilimitados', 'Dominio personalizado', 'Soporte prioritario', 'Acceso a todas las plantillas'],
    buttonText: 'Seleccionar Plan Pro',
    variant: 'primary',
    recommended: true,
  },
  {
    title: 'Plan Business',
    price: '$99/mes',
    description: 'Para negocios grandes que necesitan más.',
    features: ['Funcionalidades avanzadas', 'Soporte 24/7', 'Gestión de múltiples tiendas', 'Análisis de ventas avanzado'],
    buttonText: 'Seleccionar Plan Business',
    variant: 'outline-primary',
  },
];

const Pricing = () => {
  return (
    <section id="precios" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Planes de Precios</h2>
        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className={`h-100 shadow-sm rounded-4 ${plan.recommended ? 'border-primary border-3' : 'border-0'}`}>
                <Card.Body className="d-flex flex-column text-center">
                  {plan.recommended && (
                    <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary p-2">
                      Más popular
                    </div>
                  )}
                  <Card.Title className="fw-bold mt-4">{plan.title}</Card.Title>
                  <Card.Text className="lead my-3">{plan.price}</Card.Text>
                  <p className="text-muted">{plan.description}</p>
                  <ul className="list-unstyled text-start mx-auto mb-4" style={{ maxWidth: '250px' }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <span className="me-2 text-primary">✔</span>{feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button variant={plan.variant} className="w-100 rounded-pill">{plan.buttonText}</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;