import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TP 5 main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/TP 5 : Gestion de l'état/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders all sections of TP 5', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Formulaire Contrôlé/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Formulaire Non-Contrôlé/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Lifting State Up/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Contexte Utilisateur/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Exercice Facultatif/i })).toBeInTheDocument();
});
