import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import RouteApp from '@/routes/RouteApp'
import { Provider } from 'react-redux'
export default function App({ location, context }) {
  return (
      <StaticRouter location={location} context={context}>
        <RouteApp />
      </StaticRouter>
  )
}

