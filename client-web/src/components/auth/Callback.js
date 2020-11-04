import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from '@material-ui/core'


class Callback extends Component {

  componentDidMount () {
    console.log("Callback.componentDidMount()");
    if( /access_token|id_token|error/.test(this.props.location.hash) ) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("invalid hash in callback URL");
    }
  }

  render() {
    return (
      <Typography component="h4" variant="h6" align="center" color="textPrimary">
        Loading Auth data...
      </Typography>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth.auth,
});
export default connect( mapStateToProps )(Callback);
