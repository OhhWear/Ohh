import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing'
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Survey from './Components/Survey';
import Awards from './Components/Awards';
// import FAQ from './Components/FAQ'
// import MediaPage from './Components/MediaPage'
// import Answer from './Components/Answer'

const App = () => {
    return (
        <div>
            <Router>
            <Header />
                <div>
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/aboutus" exact component={AboutUs} />
                        <Route path="/survey" exact component={Survey} />
                        <Route path="/story" exact component={Awards} />
                        {/* <Route path="/faq" exact component={FAQ} /> */}
                        {/* <Route path="/faq/:id" component={Answer} /> */}
                        {/* <Route path="/media" exact component={MediaPage} /> */}
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    )
}

export default App;

ReactDOM.render(<App /> ,document.querySelector("#root"));