import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className="dashboard">
      <div className={styles.loadingContainer}>
        <img src="/revelium-logo.svg" alt="Revelium Studio" width={80} height={32} />
        <div className={styles.loadingSpinner} />
        <p>Loading dashboard...</p>
      </div>
    </div>
  );
} 