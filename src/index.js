import React from 'react'
import { render } from 'react-dom'
import Main from './Main'


const renderApp = AppComponent =>
  render(<AppComponent />, document.getElementById('react-root'))

renderApp(Main)