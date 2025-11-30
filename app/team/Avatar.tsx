'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Avatar.module.css'

interface AvatarProps {
  src: string
  alt: string
  fallback?: string
  size?: number
}

export default function Avatar({ src, alt, fallback = '👤', size = 120 }: AvatarProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={styles.avatarFallback} style={{ width: size, height: size }}>
        <span style={{ fontSize: size * 0.5 }}>{fallback}</span>
      </div>
    )
  }

  return (
    <div className={styles.avatarWrapper} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={styles.avatarImage}
        onError={() => setImageError(true)}
        unoptimized={true}
      />
    </div>
  )
}