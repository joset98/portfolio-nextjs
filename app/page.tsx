import { Suspense } from "react"
import Portfolio from "../page"

export default function Page() {
  return (
    <Suspense>
      <Portfolio />
    </Suspense>
  )
}
