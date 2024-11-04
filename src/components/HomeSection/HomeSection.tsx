import styles from './styles.module.css';

const HomeSection = () => {
  return (
    <section id='top' className={styles.container}>
      <h1 className={styles.title}>¡El mundo necesita Heroes!</h1>
      <p className={styles.subtitle}>Únete a mis streams y acompáñame en este recorrido a Diamante.</p>
      <p className={styles.description}>
        Mi próximo objetivo es llegar a Diamante y me encantaría que me acompañes en cada paso. Juntos, exploraremos estrategias, compartiremos risas y aprenderemos sobre los personajes que más amamos. ¡Podríamos jugar juntos y hacer que la experiencia sea aún más divertida! ¡No te lo pierdas!!
      </p>
      <a href="https://www.twitch.tv/mangaacademia" target="_blank" rel="noopener noreferrer" className={styles.joinNow}>
        <p>¡Sígueme en Twitch!</p>
      </a>
    </section>
  );
}

export default HomeSection;
