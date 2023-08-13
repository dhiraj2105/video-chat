import { EuiProvider } from '@elastic/eui'
import React from 'react'

import '@elastic/eui/dist/eui_theme_light.css';

function App() {
  return (
    <EuiProvider>
      <div>App</div>
    </EuiProvider>
  )
}

export default App