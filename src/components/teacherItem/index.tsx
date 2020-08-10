import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.id,
    })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
        </header>
        <p>
          {teacher.bio}
        </p>
        <footer>
          <p>
            Preço/Hora
            <strong>R$ {teacher.cost}</strong>
          </p>
          <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
            <img src={whatsappIcon} alt="Entrar em contato por Whatsapp"/>
            Entrar em contato.
          </a>
        </footer>
    </article>
  );
}
/*function TeacherItem () {
    return (
      <article className="teacher-item">
        <header>
          <img src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
          <div>
            <strong>Diego Fernandes</strong>
            <span>Química</span>
          </div>
          </header>
          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
          </p>
          <footer>
            <p>
              Preço/Hora
              <strong>R$ 20,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Entrar em contato por Whatsapp"/>
              Entrar em contato.
            </button>
          </footer>
      </article>
    );
}*/

export default TeacherItem;