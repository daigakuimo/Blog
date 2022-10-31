import styles from 'styles/post-body.module.css'

type Props = {
    children?: React.ReactNode;
}

export default function PostBody({ children }: Props) {
    return (
        <div className={styles.stack}>
            {children}
        </div>
    )
}