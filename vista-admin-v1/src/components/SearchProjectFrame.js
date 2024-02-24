import Proyecto from "./Proyecto";
import styles from "./SearchProjectFrame.module.css";

const SearchProjectFrame = () => {
  return (
    <section className={styles.searchProjectFrame}>
      <div className={styles.projectFrame}>
        <div className={styles.adminProfileFrame}>
          <h1 className={styles.proyectos}>Proyectos</h1>
          <div className={styles.buscarUsuario}>
            <div className={styles.buscarUsuarioChild} />
            <img className={styles.lupa4Icon} alt="" src="/lupa-4@2x.png" />
            <input
              className={styles.buscarProyecto}
              placeholder="buscar proyecto"
              type="text"
            />
          </div>
        </div>
        <div className={styles.projectFrame1}>
          <Proyecto
            darwingAfanador="Darwing Afanador"
            prop="3016598487"
            prop1="132.356.358.26"
          />
          <Proyecto
            darwingAfanador="Marco Antonio"
            prop="3016592857"
            prop1="123.258.285.36"
            propPadding="var(--padding-18xl) var(--padding-18xl) var(--padding-3xs)"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchProjectFrame;
