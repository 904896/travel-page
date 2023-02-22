import {Route, Switch} from 'react-router-dom'

import Price from './components/Price'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Services from './components/Services'
import Footer from './components/Footer'

import Feedback from './components/Feedback'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/feedback" component={Feedback} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
