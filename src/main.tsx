import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import theme from './styles'
import { ThemeProvider, CssBaseline } from "@mui/material"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline >
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
)
