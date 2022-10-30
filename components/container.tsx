import styles from 'styles/container.module.css'

type Props = {
    children?: React.ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className={styles.default}>
            {children}
        </div>
    )
}