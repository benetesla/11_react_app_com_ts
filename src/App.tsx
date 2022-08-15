/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destruturing, {Category} from './components/Destruturing';
import State from './components/state';

type textOrNull = string | null


function App() {
  const name:string = 'Benevanio';
  let meusegundoTexto: textOrNull= null;
  meusegundoTexto = 'Meu segundo texto';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface User{
    name:string;
    age:number;
    id:string;
    work:boolean;
    
  }
  const user:User = {
    name: 'Benevanio',
    age: 30,
    id: '1',
    work: true
  }
  //say hy
  const message =(name:string): string =>{
    return `Hello usuario ${name}`;
  }
  return (
    <div className="App">
      <header className="App-header">

        <nav>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

        </nav>
      </header>
      <h3>{message.name}</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Id</th>
            <th>Trabalha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.id}</td>
            <td>{user.work}</td>
          </tr>
        </tbody>
      </table>
      <FirstComponent />
      <SecondComponent name={''} />
      <Destruturing title="Curso Angular" description="Angular" image="https://picsum.photos/210" price={100} content="Conteúdo" category={Category.ANGULAR}/>
       <Destruturing title="Curso JavaScript" description="Javascript" image="https://picsum.photos/220" price={100} content="Conteúdo" category={Category.JS}/>
        <Destruturing title="MongoDB" description="MONGODB" image="https://picsum.photos/222" price={100} content="Conteúdo" category={Category.MONGODB}/>  
        <Destruturing title="NODE" description="NODE" image="https://picsum.photos/200" price={100} content="Conteúdo" category={Category.NODE}/>
        <Destruturing title="React" description="React" image="https://picsum.photos/210" price={100} content="Conteúdo" category={Category.REACT}/>
        <Destruturing title="REDUX" description="Redux" image="https://picsum.photos/250" price={100} content="Conteúdo" category={Category.REDUX}/>
        <Destruturing title="TypeScript" description="TypeScript" image="https://picsum.photos/251" price={100} content="Conteúdo" category={Category.TS}/>
        <Destruturing title="Express" description="Express" image="https://picsum.photos/201" price={100} content="Conteúdo" category={Category.EXPRESS}/>
        <Destruturing title="MYSQL" description="MYSQL" image="https://picsum.photos/203" price={100} content="Conteúdo" category={Category.MYSQL}/>
        <Destruturing title="POSTGRESQL" description="POSTGRESQL" image="https://picsum.photos/204" price={100} content="Conteúdo" category={Category.POSTGRESQL}/>
       <State />
       {meusegundoTexto && <p>{meusegundoTexto}</p>}
    </div>
  
  );
}

export default App;
