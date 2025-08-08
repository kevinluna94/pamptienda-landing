// src/components/Footer.tsx
// Este componente no necesita "use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">PampTienda</h5>
            <p className="text-muted">La plataforma que te ayuda a vender más.</p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Enlaces</h5>
            <ul className="list-unstyled text-muted">
              <li><a href="#caracteristicas" className="text-white text-decoration-none">Características</a></li>
              <li><a href="#precios" className="text-white text-decoration-none">Precios</a></li>
              <li><a href="#faq" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#contacto" className="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Redes Sociales</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-white"><FaInstagram size={24} /></a>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center text-muted">
            <p>&copy; {new Date().getFullYear()} PampTienda. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;