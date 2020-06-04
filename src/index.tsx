import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing'
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ'

const App = () => {
    return (
        <div>
            <Router>
            <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/aboutus" exact component={AboutUs} />
                        <Route path="/faq" exact component={FAQ} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    )
}

export default App;

ReactDOM.render(<App /> ,document.querySelector("#root"));