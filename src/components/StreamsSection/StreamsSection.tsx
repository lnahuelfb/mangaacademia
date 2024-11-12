import styles from './styles.module.css';

const StreamsSection = () => {
  return (
    <section id='streams' className={styles.container}>
      <h2 className={styles.title}>Mis streams favoritos</h2>
      <div className={styles.streams}>
        <div className={styles.stream}>
          <img src="/stream-1.png" alt="Stream 1" className={styles.streamImage} />
          <div className={styles.streamInfo}>
            <h3>Stream 1</h3>
            <p>Descripción del stream</p>
          </div>
        </div>
        <div className={styles.stream}>
          <img src="/stream-2.png" alt="Stream 2" className={styles.streamImage} />
          <div className={styles.streamInfo}>
            <h3>Stream 2</h3>
            <p>Descripción del stream</p>
          </div>
        </div>
        <div className={styles.stream}>
          <img src="/stream-3.png" alt="Stream 3" className={styles.streamImage} />
          <div className={styles.streamInfo}>
            <h3>Stream 3</h3>
            <p>Descripción del stream</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StreamsSection;