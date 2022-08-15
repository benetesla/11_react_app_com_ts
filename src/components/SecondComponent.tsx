/* eslint-disable no-empty-pattern */
import React from 'react'

interface Props{
    name:string
}

function SecondComponent(props: Props) {
  return (
    <div>
        <p>
            SecondComponent{props.name}
        </p>
    </div>
  )
}

export default SecondComponent