import styles from "./ImageShow.module.css";

export default function ImageShow({
    imageUrl,
    onBackdropClick
}) {

    return (
        <div className={styles.backdrop} onClick={onBackdropClick}>
            <img src={imageUrl} alt="Full Size" className={styles.image} />
        </div>
    );
};


