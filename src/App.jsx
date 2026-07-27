import { Suspense, useState, useEffect } from 'react'
import { Experience } from './scene/Experience'
import { LoadingScreen } from './ui/LoadingScreen'

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <>
      <LoadingScreen progress={progress} />
      <Suspense fallback={null}>
        <Experience onProgress={setProgress} />
      </Suspense>
    </>
  )
}

export default App