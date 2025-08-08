// src/components/Hero.tsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// 1. Define una interfaz o un tipo para las props.
// Esto mejora la legibilidad y la reutilización.
interface HeroProps {
  setShowRegister: (show: boolean) => void;
}

// 2. Asigna el tipo a las props en la declaración del componente.
// Ahora, TypeScript sabe que 'setShowRegister' es una función.
const Hero = ({ setShowRegister }: HeroProps) => {
  return (
    <Container fluid className="bg-light text-dark text-center py-5" style={{ paddingTop: '100px' }}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <Col md={8}>
          <h1 className="display-4 fw-bold mb-3">Crea tu tienda online en minutos con PampTienda</h1>
          <p className="lead mb-4">
            La plataforma de e-commerce que te permite vender tus productos fácilmente, sin necesidad de código ni complicaciones.
          </p>
          <Button variant="primary" size="lg" className="rounded-pill px-4" onClick={() => setShowRegister(true)}>
            Crea tu tienda gratis
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;