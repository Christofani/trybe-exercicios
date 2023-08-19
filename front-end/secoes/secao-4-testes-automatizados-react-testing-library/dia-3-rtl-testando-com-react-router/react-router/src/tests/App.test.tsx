// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import { BrowserRouter } from 'react-router-dom';

it('Renderiza texto da página inicial', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const AboutLink = screen.getByRole('link', { name: /Sobre/i });
  await userEvent.click(AboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})