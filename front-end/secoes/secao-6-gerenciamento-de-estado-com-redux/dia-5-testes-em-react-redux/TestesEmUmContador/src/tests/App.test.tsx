import { screen } from '@testing-library/react/';
import App from '../App';
import  renderWithRedux  from '../utils/renderWithRedux';

const state = {
  counterReducer: {
    counter:10,
  },
}
it('Renderize o Botão Incrementa 1', () => {
  renderWithRedux(<App />)
  const allButtons = screen.getAllByRole('button')
  expect(allButtons.length).toBe(2)
  expect(screen.getByText('0')).toBeInTheDocument()
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  renderWithRedux(<App />, state );

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
})

test('Incrementa corretamente ao clicar no botão "Incrementa 1"', async () => {
  const { store,user } = renderWithRedux(<App />, state);

  const buttons = screen.getByRole('button', {name: /Incrementa 1/});

  await user.click(buttons);
  await user.click(buttons);

  expect(screen.getByText('12')).toBeInTheDocument();
  expect(store.getState().counterReducer.counter).toBe(12);
})

test('Incrementa corretamenta ao clicar no botão "Incrementa 5"', async () => {
  const { store,user } = renderWithRedux(<App />, state);

  const button5 = screen.getByRole('button', {name: /Incrementa 5/})

  await user.click(button5);

  expect(screen.getByText('15')).toBeInTheDocument();
  expect(store.getState().counterReducer.counter).toBe(15);
});