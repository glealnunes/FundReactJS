import styles from "./Post.module.css";
import perfil from "../assets/perfil.svg";
export function Post(props) {
  return (
    <aside className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>
        <img className={styles.avatar} src={perfil} />
        <aside className={styles.wrapper}>
          <strong>
            {props.author}
            </strong>
          <strong>
            {props.subtitle}
            </strong>
        </aside>
        </div>
        <span>Publicado há 1h</span>
      </div>
      <span>{props.content}</span>
    </aside>
  );
}
