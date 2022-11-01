import Container from "./container";
import Logo from "./newLogo";
import styles from "styles/footer.module.css"
import Social from "./social";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}