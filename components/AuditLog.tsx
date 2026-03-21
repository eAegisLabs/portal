'use client'

import styles from './AuditLog.module.css'

const LOG_LINES = [
  '[AEGIS] Analyzing contract: Bridge.sol',
  '[AEGIS] Checking invariant: totalSupply consistency',
  '[AEGIS] Slither run: 0 high, 2 medium',
  '[AEGIS] Fuzzing swap() — 10k runs',
  '[AEGIS] Replay protection: nonce chain validated',
]

export default function AuditLog() {
  return (
    <div className={styles.auditLog}>
      <div className={styles.terminalHeader}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.terminalTitle}>audit.log</span>
      </div>
      <div className={styles.logContent}>
        {LOG_LINES.map((line, i) => (
          <div key={i} className={styles.logLine}>
            <span className={styles.logTimestamp}>
              {String(i + 1).padStart(2, '0')}:{' '}
            </span>
            <span className={styles.logText}>{line}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
