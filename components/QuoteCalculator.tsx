'use client'

import { useState } from 'react'
import styles from './QuoteCalculator.module.css'

interface QuoteResult {
  basePrice: number
  complexityMultiplier: number
  scopeMultiplier: number
  totalPrice: number
  estimatedDays: number
}

export default function QuoteCalculator() {
  const [linesOfCode, setLinesOfCode] = useState<string>('1000')
  const [complexity, setComplexity] = useState<string>('medium')
  const [auditScope, setAuditScope] = useState<string>('token')
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null)

  const calculateQuote = () => {
    const loc = parseInt(linesOfCode) || 0
    if (loc <= 0) {
      alert('Please enter a valid number of lines of code')
      return
    }

    // Base pricing: $50 per 100 lines of code
    const basePricePer100LOC = 50
    let basePrice = (loc / 100) * basePricePer100LOC

    // Complexity multipliers
    const complexityMultipliers: Record<string, number> = {
      simple: 0.8,
      medium: 1.0,
      complex: 1.5,
      very_complex: 2.0,
    }

    // Scope multipliers
    const scopeMultipliers: Record<string, number> = {
      token: 1.0,
      defi_protocol: 1.8,
      nft_collection: 1.2,
      dao: 1.5,
      bridge: 2.0,
      full_suite: 2.5,
    }

    const complexityMultiplier = complexityMultipliers[complexity] || 1.0
    const scopeMultiplier = scopeMultipliers[auditScope] || 1.0

    const totalPrice = basePrice * complexityMultiplier * scopeMultiplier

    // Estimate timeline based on comprehensive audit process
    // Optimized for efficiency with team collaboration and parallel workflows
    // Base days for code review: higher throughput with team collaboration
    const locPerDayMap: Record<string, number> = {
      simple: 800,
      medium: 600,
      complex: 450,
      very_complex: 350,
    }
    const locPerDay = locPerDayMap[complexity] || 450
    
    // Core audit execution time (Phase 2) - main review phase
    // Teams work in parallel, improving efficiency
    const auditExecutionDays = Math.ceil((loc / locPerDay) * Math.sqrt(complexityMultiplier))
    
    // Apply scope multiplier with minimal overhead (better coordination)
    const adjustedAuditDays = Math.ceil(auditExecutionDays * (1 + (scopeMultiplier - 1) * 0.15))
    
    // Add time for other phases (optimized parallel workflow)
    // Some phases can overlap, so total time is less than sum of individual phases
    const preparationDays = 1 // Phase 1: Quick setup (can overlap with initial review)
    const reportingDays = Math.max(1, Math.ceil(adjustedAuditDays * 0.25)) // Phase 3: Report writing (can start during review)
    const deliveryDays = 1 // Phase 4: Final delivery
    
    // Total estimated days - phases can overlap to some extent
    const totalEstimatedDays = Math.ceil(
      preparationDays + adjustedAuditDays + reportingDays + deliveryDays
    )

    setQuoteResult({
      basePrice,
      complexityMultiplier,
      scopeMultiplier,
      totalPrice: Math.round(totalPrice),
      estimatedDays: Math.max(totalEstimatedDays, 3), // Minimum 3 business days
    })
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorHeader}>
        <h2>Instant Quote Calculator</h2>
        <p>Get an estimate for your smart contract audit project</p>
      </div>

      <div className={styles.calculatorForm}>
        <div className={styles.formGroup}>
          <label htmlFor="loc">Lines of Code (LOC)</label>
          <input
            id="loc"
            type="number"
            value={linesOfCode}
            onChange={(e) => setLinesOfCode(e.target.value)}
            placeholder="e.g., 1000"
            min="100"
            step="100"
          />
          <small>Enter the total lines of code to be audited</small>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="complexity">Code Complexity</label>
          <select
            id="complexity"
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
          >
            <option value="simple">Simple - Basic token/ERC20 contracts</option>
            <option value="medium">Medium - Standard DeFi protocols</option>
            <option value="complex">Complex - Advanced protocols with multiple components</option>
            <option value="very_complex">Very Complex - Layer 2 protocols, bridges, complex systems</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="scope">Audit Scope</label>
          <select
            id="scope"
            value={auditScope}
            onChange={(e) => setAuditScope(e.target.value)}
          >
            <option value="token">Token Contract Only</option>
            <option value="nft_collection">NFT Collection</option>
            <option value="defi_protocol">DeFi Protocol</option>
            <option value="dao">DAO Governance</option>
            <option value="bridge">Bridge Protocol</option>
            <option value="full_suite">Full Suite (Multiple Contracts)</option>
          </select>
        </div>

        <button onClick={calculateQuote} className="btn btn-primary">
          Calculate Quote
        </button>
      </div>

      {quoteResult && (
        <div className={styles.quoteResult}>
          <h3>Estimated Quote</h3>
          <div className={styles.quoteDetails}>
            <div className={styles.quoteRow}>
              <span>Base Price:</span>
              <span>${quoteResult.basePrice.toLocaleString()}</span>
            </div>
            <div className={styles.quoteRow}>
              <span>Complexity Multiplier:</span>
              <span>{quoteResult.complexityMultiplier}x</span>
            </div>
            <div className={styles.quoteRow}>
              <span>Scope Multiplier:</span>
              <span>{quoteResult.scopeMultiplier}x</span>
            </div>
            <div className={styles.quoteDivider}></div>
            <div className={styles.quoteRow}>
              <strong>Total Estimated Price:</strong>
              <strong className={styles.totalPrice}>
                ${quoteResult.totalPrice.toLocaleString()}
              </strong>
            </div>
            <div className={styles.quoteRow}>
              <span>Estimated Timeline:</span>
              <span>{quoteResult.estimatedDays} business days</span>
            </div>
          </div>
          <p className={styles.quoteNote}>
            * This is an estimate only. Final pricing may vary based on detailed project
            requirements. Contact us for an accurate quote.
          </p>
        </div>
      )}
    </div>
  )
}
