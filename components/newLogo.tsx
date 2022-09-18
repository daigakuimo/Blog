import Link from 'next/link'
import styles from 'styles/logo.module.css'

interface Props {
    boxOn?: boolean
}

export default function Logo({ boxOn = false }: Props) {
    return (
        <Link href="/">
            <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
        </Link>
    )
}