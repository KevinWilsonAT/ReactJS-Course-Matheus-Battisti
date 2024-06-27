import styles from './Phrase.module.css'

function Phrase() {
    return (
        <div className={styles.phraseContainer}>
            <p className={styles.phraseContent}>That's a phrase text component.</p>
        </div>
    )
}

export default Phrase