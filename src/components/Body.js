import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browser",
      element: <Browser />
    }
  ])
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  )
}

export default Body