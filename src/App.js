import React from "react";
// import Axios from "axios";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./components/footer";

import Content from "./pages/content";
import DetailPage from './pages/DetailPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Route path='/' component={Content} exact />
        <Route path='/detail/:id' component={DetailPage} />
        <Footer />
      </div>
        
      
    );
  }
}

export default App;
