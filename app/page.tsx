import { Suspense } from "react"
import Portfolio from "../page"

export default function Page() {
  const Loading = () => (
    <div className="flex items-center justify-center h-screen bg-background text-foreground">
      <div className="text-center">
        <p className="text-xl">Cargando portafolio...</p>
      </div>
    </div>
  );

  return (
    <Suspense fallback={<Loading />}>
      <Portfolio />
    </Suspense>
  )
}
