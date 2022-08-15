/* eslint-disable react/jsx-no-undef */
import React from 'react'

type Props = {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function usario(){
    //descricao de atributos
    return {
        nome: 'Bruno',
        idade: 25,
        trabalha: 'Programador',
        endereco: {
            rua: 'Florença',
            numero: 200,
            bairro: 'Monte Python',
            cidade: 'Curitiba',
            estado: 'Parana'
        }
    }
}

// eslint-disable-next-line no-empty-pattern
function FirstComponent({}: Props) {
  return (
    <div>
<h1>Usuario</h1>
<p>{usario().nome}</p>
<p>{usario().idade}</p>
<p>{usario().trabalha}</p>
<p>{usario().endereco.rua}</p>
<p>{usario().endereco.numero}</p>
<p>{usario().endereco.bairro}</p>
<p>{usario().endereco.cidade}</p>
<p>{usario().endereco.estado}</p>
      

    </div>
  )
}

export default FirstComponent