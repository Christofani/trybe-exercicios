import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetch a joke', async () => {
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.',
    };

    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE,
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE);
    //Como iremos criar um novo mock para o testar um segundo fetch,
    // utilizamos a função mockResolvedValueOnce para garantir que o valor de MOCK_RESPONSE será recebido apenas no primeiro fetch.

    render(<App />);
    const joke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(joke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json'}});


    const MOCK_JOKE_2 = {
      id: '8s5bGtrOfxc',
      joke: 'Whats red and bad for your teeth? A Brick.',
    };
  
    const MOCK_RESPONSE_2 = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE_2,
    } as Response;
  
    const mockFetch2 = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE_2);
  
    const buttonNewJoke = screen.getByRole('button', { name: 'New Joke' });
    await userEvent.click(buttonNewJoke);

    const joke2 = await screen.findByText('Whats red and bad for your teeth? A Brick.');

    expect(joke2).toBeInTheDocument();
    expect(mockFetch2).toHaveBeenCalledTimes(1);
  });
})