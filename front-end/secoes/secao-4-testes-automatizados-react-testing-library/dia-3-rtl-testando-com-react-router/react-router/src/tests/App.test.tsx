// /src/App.test.tsx

import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';

it('Renderiza página inicial', async() => {
  const { user } = renderWithRouter(<App />, { route: '/about' });
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  const linkHome = screen.getByRole('link', { name: /Início/i });
  await user.click(linkHome);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});
