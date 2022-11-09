import styles from 'styles/accordions.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

type Props = {
    heading: string
    children: React.ReactNode
}

export default function Accordion({ heading, children }: Props) {
    const [textIsOpen, setTextIsOpen] = useState(false)

    const toggleText = () => {
        setTextIsOpen((prev) => !prev)
    }

    const refText = useRef(null)

    return (
        <div className={textIsOpen ? styles.open : styles.close}>
            <h3 className={styles.heading}>
                <button onClick={toggleText}>
                    {heading}
                    <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
                </button>
            </h3>
            <div
                className={styles.text}
                ref={refText}
                style={{
                    '--text-height': refText.current ? `${refText.current.scrollHeight}px` : '0px',
                }}
            >
                <div className={styles.textInner}>{children}</div>
            </div>
        </div >
    )
}