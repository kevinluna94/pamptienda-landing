// src/components/AuthModals.tsx
'use client'; // Esta directiva es necesaria para usar hooks de estado y eventos

import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

interface AuthModalsProps {
  showLogin: boolean;
  handleCloseLogin: () => void;
  showRegister: boolean;
  handleCloseRegister: () => void;
  setShowRegister: (show: boolean) => void;
  setShowLogin: (show: boolean) => void;
}

const AuthModals: React.FC<AuthModalsProps> = ({
  showLogin,
  handleCloseLogin,
  showRegister,
  handleCloseRegister,
  setShowRegister,
  setShowLogin,
}) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Aquí iría la lógica de autenticación con Supabase
    // Por ahora, solo simulación
    if (loginEmail && loginPassword) {
      alert('Intento de inicio de sesión exitoso!');
      handleCloseLogin();
    } else {
      setError('Por favor, completa todos los campos.');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Aquí iría la lógica de registro con Supabase Auth
    // Por ahora, solo simulación
    if (registerName && registerEmail && registerPassword) {
      alert('Intento de registro exitoso!');
      handleCloseRegister();
    } else {
      setError('Por favor, completa todos los campos.');
    }
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <>
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header className="border-0 p-4 pb-0">
          <Modal.Title className="fw-bold">Iniciar Sesión</Modal.Title>
          <Button variant="light" onClick={handleCloseLogin} className="rounded-pill p-2"><FaTimes /></Button>
        </Modal.Header>
        <Modal.Body className="p-4 pt-0">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicLoginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLoginPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 rounded-pill">
              Iniciar Sesión
            </Button>
          </Form>
          <p className="text-center mt-3">
            ¿No tienes cuenta?{' '}
            <a href="#" onClick={switchToRegister} className="text-primary text-decoration-none fw-bold">Regístrate</a>
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister} centered>
        <Modal.Header className="border-0 p-4 pb-0">
          <Modal.Title className="fw-bold">Registrarse</Modal.Title>
          <Button variant="light" onClick={handleCloseRegister} className="rounded-pill p-2"><FaTimes /></Button>
        </Modal.Header>
        <Modal.Body className="p-4 pt-0">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="formBasicRegisterName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRegisterEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRegisterPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Crea una contraseña"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 rounded-pill">
              Registrarse
            </Button>
          </Form>
          <p className="text-center mt-3">
            ¿Ya tienes cuenta?{' '}
            <a href="#" onClick={switchToLogin} className="text-primary text-decoration-none fw-bold">Inicia sesión</a>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModals;
