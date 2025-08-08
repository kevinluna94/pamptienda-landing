// src/components/Features.tsx
// Este componente no necesita "use client"
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsShop, BsGear, BsCreditCard, BsGraphUp } from 'react-icons/bs';

const features = [
  {
    icon: <BsShop size={50} className="text-primary mb-3" />,
    title: 'Tienda Personalizable',
    description: 'Elige entre plantillas y personaliza tu tienda para que refleje la identidad de tu marca.',
  },
  {
    icon: <BsGear size={50} className="text-primary mb-3" />,
    title: 'Gestión Centralizada',
    description: 'Controla productos, pedidos y clientes desde un único panel de administración.',
  },
  {
    icon: <BsCreditCard size={50} className="text-primary mb-3" />,
    title: 'Pagos Seguros',
    description: 'Integra pasarelas de pago populares y ofrece transacciones seguras a tus clientes.',
  },
  {
    icon: <BsGraphUp size={50} className="text-primary mb-3" />,
    title: 'Análisis de Ventas',
    description: 'Obtén datos valiosos sobre el rendimiento de tu negocio para tomar decisiones informadas.',
  },
];

const Features = () => {
  return (
    <section id="caracteristicas" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">Características Clave</h2>
        <Row className="text-center">
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4">
                <Card.Body>
                  <div className="mb-3">{feature.icon}</div>
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;