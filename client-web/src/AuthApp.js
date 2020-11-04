import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Landing from "./components/layout/Landing";
import Auth from './auth/Auth';
import PropTypes from 'prop-types';
import { setAuth } from './actions/auth';
import Callback from './components/auth/Callback';
import { QuoteRequestSection } from './components/layout/QuoteRequestSection/QuoteRequestSection'


class AuthApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
      tokenRenewalComplete: false
    }
    this.props.setAuth(this.state.auth);
  }

  componentDidMount () {
    console.log("AuthApp.componentDidMount(). auth: ",this.state.auth);
    this.state.auth.renewToken(() =>
      this.setState({tokenRenewalComplete: true})
    )
  }

  render() {
    if( !this.state.tokenRenewalComplete ) return 'Loading...';
    return (
      <div className="App" style={{margin: 0}}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/quote" component={QuoteRequestSection} />
        <Route exact path="/authCallback" component={Callback} />
        <Switch>
        </Switch>
      </div>
    );
  }

}

AuthApp.propTypes = {
  setAuth: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth.auth,
  ports: state.ports
});
const mapActionsToProps = dispatch => ({
  dispatch,
  setAuth: (auth) => {
    dispatch(setAuth(auth));
  }
});

export default connect(mapStateToProps, mapActionsToProps)(AuthApp);
