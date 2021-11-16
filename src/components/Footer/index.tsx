import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <span>
          @2021 - NFT Marketplace
        </span>
      </div>
    </footer>
   );
}
