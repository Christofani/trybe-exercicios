import { useState } from 'react';
import './App.css';


function App() {
  function resetForm() {
    setFormInfo({
      name: '',
      email: '',
      schooling: 'Médio',
      resume: '',
    })
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      resetForm();
      setterms(false);
      setError(false);
      alert(
        `Nome: ${formInfo.name}\nEmail: ${formInfo.email}\nEscolaridade: ${formInfo.schooling}\nExperiências: ${formInfo.resume}`
      );
    } else {
      setError(true);
    }
  }
  const [terms, setterms] = useState(false);
  const [error, setError] = useState(false)
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    schooling: 'Médio',
    resume: '',
  })
  
  function handleChance(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo, 
      [name]: value,
    })
  }
  return (
    <>
    <form className='form-container' onSubmit={(event) => handleSubmit(event)}>
      <label>
        Nome:
        <input
        name="name"
        required
        value={formInfo.name}
        onChange={handleChance}
         />
      </label>
      <label>
        E-mail:
        <input 
        name="email"
        required
        value={formInfo.email}
        onChange={handleChance}
        />
      </label>
      <label>
        Escolaridade 
        <select
        name="schooling"
        value={formInfo.schooling}
        onChange={ handleChance }
        >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label className="label-container">
        Resumo das Experiências
        <textarea
        name="resume"
        value={formInfo.resume}
        onChange={handleChance}
         />
      </label>
      <label>
        <input 
        type="checkbox"
        checked={terms}
        onChange={ () => setterms((prevTerms) => !prevTerms) }
        />
        Aceito as condições
      </label>
      <button>Enviar</button>
    </form>
    {error && (
      <h4 className="message-error">Você precisa aceitar os termos e condições para poder enviar o currículo!</h4>
    )}
    </>
  )
}

export default App;
