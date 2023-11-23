import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup/Signup'
import NotFound from './pages/notFound/NotFound'
import Profile from './pages/profile/Profile'
import AuthRoute from './components/authRoute/AuthRoute'
import { persistor, store } from './store/store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              {/* General routes */}
              <Route path="/signup" element={<Signup />} />

              {/* Private routes */}
              <Route path="/profile" element={<AuthRoute><Profile /></AuthRoute>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App