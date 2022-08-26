import styles from "./Sidebar.module.css";
import perfil from "../assets/perfil.svg";
import { PencilLine } from "phosphor-react";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src={perfil} />
        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a 
        href="#"> 
        <PencilLine size={20}/>
        Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
