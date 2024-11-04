import styles from './styles.module.css'

const Header = () => {
  const navigation = [
    {
      text: "Inicio",
      href: "#top"
    },
    {
      text: "Sobre mi",
      href: "#about"
    },
    {
      text: "Mis streams",
      href: "#streams"
    },
    {
      text: "Contacto",
      href: "#contact"
    }
  ]

  return (
    <header className={styles.header}>
      <p className={styles.logo}>Manga<span>Academia</span></p>
      <nav className={styles.navigation}>
        <ul className={styles.items}>
          {
            navigation.map((nav, index) => (
              <li key={index} className={styles.item}><a href={nav.href}>{nav.text}</a></li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header