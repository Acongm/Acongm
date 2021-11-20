import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import '@/styles/global.less'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import stores from '@/stores'
// import { browserHistory } from 'react-router'
ReactDOM.render(
  <React.StrictMode>
    <Provider stores={stores}>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
