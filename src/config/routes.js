import React from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import App from '../App'
import Link from 'react-router/Link'
import Footer from '../components/Footer'
import NotFound from '../components/NotFound'
import About from '../components/About'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { lightBlue900 } from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlue900,
  },
})
import { AppBar } from 'material-ui'
import { ToolbarGroup, FlatButton } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
const styles = {
  button: {margin: 6},
  container:{
    paddingTop: 70,
    paddingBottom: 50,
    minHeight: 'calc(100vh - 140px)',
    margin: '0 auto',
    width: '80vw'
  }
};
const Navigation = (
  <ToolbarGroup>
    <FlatButton
      label="Acasa"
      style={styles.button}
      labelStyle={{color: "#ffffff"}}
      containerElement={<Link to="/" />} />
    <FlatButton
      label="Despre"
      style={styles}
      labelStyle={{color: "#ffffff"}}
      containerElement={<Link to="/despre" />} />
  </ToolbarGroup>
)
const Routes = () => (
  <Router>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <div>
          <AppBar
            showMenuIconButton={false}
            iconElementRight={Navigation}
            title="Serviciile Sociale Autorizate"
            titleStyle={{color: '#ffffff'}}
            style={{backgroundColor: '#004990', position: 'fixed', padding:'0 10vw'}}
          />
        </div>
        <div style={styles.container}>
          <Match exactly pattern="/" component={App} />
          <Match pattern="/despre" component={About} />
          <Miss component={NotFound} />
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  </Router>
)
export default Routes