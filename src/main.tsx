import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/react"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store'; // Import store and persistor

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      <Analytics />
  </Provider>
</StrictMode>
)
