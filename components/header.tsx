import Nav from "./nav";
import Logo from "./newLogo";
import styles from 'styles/header.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.flexContainer}>
                <Logo boxOn />
                <Nav />
            </div>
        </header>
    )
}

