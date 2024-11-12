import styles from './styles.module.css'


type Character = {
  name: string;
  role: string;
  imageUrl: string;
};

const characters: Character[] = [
  { name: 'Dva', role: 'Tank', imageUrl: '/dva.png' },
  { name: 'Junker Queen', role: 'Tank', imageUrl: '/junker-queen.png' },
  { name: 'Ashe', role: 'Damage', imageUrl: '/ashe.png' },
  { name: 'Reaper', role: 'Damage', imageUrl: '/reaper.png' },
  { name: 'Juno', role: 'Support', imageUrl: '/juno.png' },
  { name: 'Kiriko', role: 'Support', imageUrl: '/kiriko.png' },
];

const AboutMe = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>Sobre mi</h2>
      <p>
        Soy <strong>Nahuel</strong>, un jugador de Overwatch y streamer de <strong>Argentina</strong>. <br />
        Me encanta compartir mis partidas en directo, especialmente en juegos <br />
        como <strong>Overwatch 2</strong> y a veces <strong>otros videojuegos</strong>. ¡Bienvenido a mi mundo gamer!
      </p>

      <div className={styles.details}>
        <h3>Un poco sobre mi estilo de juego</h3>
        <p>
          Me esfuerzo en mejorar continuamente y alcanzar lo más alto en cada partida. <br />
          Busco no solo dominar a mis personajes favoritos, sino también inspirar a otros a <br />
          superarse en cada transmisión.
        </p>
        <h3>Mis personajes favoritos en Overwatch 2</h3>
        <div className={styles.characters}>
          {characters.map((character) => (
            <div key={character.name} className={styles.characterCard}>
              <img src={character.imageUrl} alt={character.name} className={styles.characterImage} />
              <h3>{character.name}</h3>
              <p>{character.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.goals}>
        <h3>Mi visión</h3>
        <p>
          Mi meta es crear una comunidad unida y positiva, donde los gamers puedan aprender, mejorar y compartir su pasión por el gaming. <br />
          Quiero inspirar a otros a dar lo mejor en cada partida, mientras crecemos juntos en esta aventura. <br />
          ¡Gracias por formar parte y acompañarme en el camino hacia lo más alto!
        </p>
      </div>
    </section>
  );
};

export default AboutMe