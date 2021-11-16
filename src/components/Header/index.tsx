import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <h2>Beast Market</h2>
        </nav>
        <nav>
          <a>Store</a>
          <a>My Account</a>
        </nav>

        <button type="button">Teste</button>
      </div>
    </header>
  );
}
