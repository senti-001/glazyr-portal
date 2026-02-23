"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    window.location.replace("https://glazyr.com")
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center text-white font-mono text-sm">
      <p>Redirecting to the unified Glazyr Viz dashboard...</p>
    </div>
  )
}
