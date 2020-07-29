import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const inicialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [category, setCategory] = useState([]);
  const [values, setValues] = useState(inicialValues);


  function handleSetValues(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(e) {
    handleSetValues(
      e.target.getAttribute('name'),
      e.target.value
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategory([
      ...category,
      values
    ]);

    setValues(inicialValues)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="????"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>
      

      <ul>
        {category.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name} - {category.description} - {category.color}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;