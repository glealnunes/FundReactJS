import "./global.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
          author="Gesser Leal" 
          subtitle="Desenvolver Web"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos dolores, soluta expedita ab earum commodi vitae eaque temporibus animi tenetur assumenda aliquam magni ipsa aut incidunt pariatur doloremque. Voluptatem!"
          />
         
        </main>
      </div>
    </div>
  );
}

