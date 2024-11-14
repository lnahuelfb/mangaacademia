import styles from './styles.module.css'


type Character = {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
};

const characters: Character[] = [
  {
    name: 'Dva',
    role: 'Tank',
    imageUrl: '/dva.png',
    description: 'Piloto de un mech de combate, D.Va usa su armadura para absorber daño y proteger a su equipo en el campo de batalla.'
  },
  {
    name: 'Junker Queen',
    role: 'Tank',
    imageUrl: '/junker_queen.png',
    description: 'Una líder feroz que pelea cuerpo a cuerpo, Junker Queen utiliza su hacha y habilidades para arrasar con sus enemigos y liderar su equipo.'
  },
  {
    name: 'Ashe',
    role: 'DPS',
    imageUrl: '/ashe.png',
    description: 'Líder de la pandilla Deadlock, Ashe usa su rifle y dinamita para causar daño a distancia y controlar el campo de batalla.'
  },
  {
    name: 'Reaper',
    role: 'DPS',
    imageUrl: '/reaper.png',
    description: 'Un vengador oscuro que utiliza escopetas de corto alcance y habilidades de sigilo para acabar con sus enemigos de cerca.'
  },
  {
    name: 'Juno',
    role: 'Support',
    imageUrl: '/juno.png',
    description: 'Ranger Espacial de Marte con habilidades de soporte y movilidad, ayuda a su equipo desde las alturas.'
  },
  {
    name: 'Kiriko',
    role: 'Support',
    imageUrl: '/kiriko.png',
    description: 'Ninja sanadora que usa habilidades de curación y movilidad para proteger y asistir a sus aliados desde las sombras.'
  }
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
            <HeroCard key={character.name} character={character} />
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

const HeroCard = ({ character }: { character: Character }) => {
  return (
    <article className={styles.heroCard} aria-label="Hero Card">
      <figure className={styles.heroImage}>
        <img src={character.imageUrl} alt={`Imagen de ${character.name}`} />
      </figure>
      <section className={styles.heroInfo}>
        <h3 className={styles.heroName}>{character.name}</h3>
        <p className={styles.heroRole}>{character.role}</p>
      </section>
      <p className={styles.heroDescription}>
        {character.description}
      </p>
    </article>
  );
};

export default AboutMe