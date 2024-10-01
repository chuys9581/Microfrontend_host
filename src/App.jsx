import React, { Suspense } from 'react'

const Nav = React.lazy(() => import('nav/Nav'))
const Main = React.lazy(() => import('main/Main'))
const Footer = React.lazy(() => import('footer/Footer'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Nav...</div>}>
        <Nav />
      </Suspense>
      <Suspense fallback={<div>Loading Main...</div>}>
        <Main />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App