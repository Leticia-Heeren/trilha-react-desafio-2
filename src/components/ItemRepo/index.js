import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  const ItemRepo = ({ repo, handleRemoveRepo }) => {
    return (
      <div>
        <h3>{repo.name}</h3>
        <button onClick={() => handleRemoveRepo(repo.id)}>Excluir</button>
      </div>
    )
  }
  
  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <a href="#"  rel="noreferrer" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
