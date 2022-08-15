import React from 'react'

interface Props{
    title: string;
    description: string;
    image: string;
    price: number;
    content: string;
    //enum
    category:Category
}
export enum Category{
  JS = "JavaScript",
  TS = "TypeScript",
  REACT = "React",
  REDUX = "Redux",
  ANGULAR = "Angular",
  NODE = "Node",
  EXPRESS = "Express",
  MONGODB = "MongoDB",
  MYSQL = "MySQL",
  POSTGRESQL = "PostgreSQL",
  
}
//spread operator é usado para pegar todos os atributos de um objeto e colocar em outro objeto
function Destruturing({ title, description, image, price, content,category}:Props) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt={title} />
        <p>{price}</p>
        <p>{content}</p>
        <p>{category}</p>
    </div>
  )
}

export default Destruturing