import dynamic from 'next/dynamic'
import Router from 'next/router'
// import { Router } from 'next/router'
import React from 'react'

const CrispWithNoSSR = dynamic(
  () => import('./crisp'),
  { ssr: false }
)

export default function Chat() {
  return (
    <CrispWithNoSSR />
  )
}
