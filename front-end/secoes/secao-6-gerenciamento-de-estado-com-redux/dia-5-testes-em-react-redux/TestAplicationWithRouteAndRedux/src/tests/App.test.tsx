// import renderWithReduxAndRouter from "../utils/renderWithReduxAndRouter"
// import App from "../App"
// import { screen } from "@testing-library/react";

// describe('testando componente App', () => {
//   test('teste se renderiza um botão com o texto "Entrar"', () => {
//     const { user } = renderWithReduxAndRouter(<App />)
//     const button = screen.getByRole('button', {name: /Entrar/})
//     expect(button).toBeInTheDocument();
//   })
// })

// /src/App.test.tsx

import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from '../utils/renderWithRouterAndRedux';

import App from '../App';
test('Ao acessar a rota /profile a partir da Home, o nome da pessoa deverá ser renderizado', async () => {
  const { user } = renderWithRouterAndRedux(<App />);

  const nameInput = screen.getByRole('textbox');
  expect(nameInput).toBeInTheDocument();

  await user.type(nameInput, 'Tryber');
  expect(nameInput).toHaveValue('Tryber');

  // espera que, ao clicar no botão, a página seja direcionada para a rota /profile
  const loginButton = screen.getByRole('button', {name: /Entrar/});
  await user.click(loginButton);
  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});

test('Ao testar diretamente a rota /profile o nome da pessoa não pode ser renderizado', () => {
  const route = '/profile';

  renderWithRouterAndRedux(<App />, route);

  expect(screen.queryByText('Boas vindas')).not.toBeInTheDocument();
  expect(screen.getByText('Você precisa realizar o login!')).toBeInTheDocument();
});

test('Ao testar diretamente a rota /profile,alterando o estado global, o nome da pessoa deve ser renderizado', () => {
  const route = '/profile';
  const state = {userName: 'Tryber'}

  renderWithRouterAndRedux(<App />,route, state);

  expect(screen.queryByText('Boas vindas')).not.toBeInTheDocument();
  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});

