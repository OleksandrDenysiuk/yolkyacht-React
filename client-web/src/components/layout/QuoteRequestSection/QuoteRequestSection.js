import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack';
import { Grid, Container, Typography, TextField, Button, Icon } from '@material-ui/core';
import TransportPurposeSelector from './TransportPurposeSelector';
import LengthMetricSelector from './LengthMetricSelector';
import WeightMetricSelector from './WeightMetricSelector';
import {
  postQuoteRequest, setFirstName, setFirstNameError, setLastName, setLastNameError, setPhoneNumber, setPhoneNumberError,
  setEmail, setEmailError, setBestTimeToContact, setYachtModel, setYear, setLength, setLengthUnit, setBeam,
  setBeamUnit, setWeight, setWeightUnit, setPurpose, setFromWhere, setToWhere, setWhen, resetQuoteRequestForm,
  resetQuoteRequestErrors
} from '../../../actions/quoteRequest';


export class QuoteRequestSection extends Component {

  constructor(props) {
    super(props);

    this.handleSendButtonClicked = this.handleSendButtonClicked.bind(this);
    this.handleWhenDateChange = this.handleWhenDateChange.bind(this);
  }

  handleFirstNameChanged(firstName) {
    this.props.setFirstName(firstName);
  }

  handleFirstNameBlur(firstName) {
    if( firstName && firstName.length > 0 ) {
      this.props.setFirstNameError('');
    } else {
      this.props.setFirstNameError('Is Required');
    }
  }

  handleLastNameChanged(lastName) {
    this.props.setLastName(lastName);
  }

  handleLastNameBlur(lastName) {
    if( lastName && lastName.length > 0 ) {
      this.props.setLastNameError('');
    } else {
      this.props.setLastNameError('Is Required');
    }
  }

  handlePhoneNumberChanged(phoneNumber) {
    this.props.setPhoneNumber(phoneNumber);
  }

  handlePhoneNumberBlur(phoneNumber) {
    if( phoneNumber && phoneNumber.length > 0 ) {
      this.props.setPhoneNumberError('');
    } else {
      this.props.setPhoneNumberError('Is Required');
    }
  }

  handleEmailChanged(email) {
    this.props.setEmail(email);
  }

  handleEmailBlur(email) {
    if( email && email.length > 0 ) {
      this.props.setEmailError('');
    } else {
      this.props.setEmailError('Is Required');
    }
  }

  handleBestTimeToContactChanged(bestTimeToContact) {
    this.props.setBestTimeToContact(bestTimeToContact);
  }

  handleYachtModelChanged(yachtModel) {
    this.props.setYachtModel(yachtModel);
  }

  handleYearChanged(year) {
    this.props.setYear(year);
  }

  handleLengthChanged(length) {
    this.props.setLength(length);
  }

  handleLengthUnitSelected(lengthUnit) {
    this.props.setLengthUnit(lengthUnit);
  }

  handleBeamChanged(beam) {
    this.props.setBeam(beam);
  }

  handleBeamUnitSelected(beamUnit) {
    this.props.setBeamUnit(beamUnit);
  }

  handleWeightChanged(weight) {
    this.props.setWeight(weight);
  }

  handleWeightUnitSelected(weightUnit) {
    this.props.setWeightUnit(weightUnit);
  }

  handlePurposeSelected(purpose) {
    this.props.setPurpose(purpose);
  }

  handleFromWhereChanged(fromWhere) {
    this.props.setFromWhere(fromWhere);
  }

  handleToWhereChanged(toWhere) {
    this.props.setToWhere(toWhere);
  }

  handleWhenDateChange(when) {
    this.props.setWhen(when);
  }

  showSuccessEmailNotification() {

    const action = key => (
      <Button onClick={() => dismissNotificationClearForm(key)} style={{color: 'white'}} variant="outlined">
        Ok
      </Button>
    );

    const dismissNotificationClearForm = (key) => {
      this.props.closeSnackbar(key);
      this.props.resetQuoteRequestForm();
    }

    this.props.enqueueSnackbar('Our team will get in touch with you shortly.', {variant: 'info', action: action, autoHideDuration: null, style: {maxWidth: 350}})
  }

  handleSendButtonClicked() {
    this.props.resetQuoteRequestErrors();
    this.props.postQuoteRequest(this.props.quoteRequest).then(
      () => this.showSuccessEmailNotification(),
      () => this.props.enqueueSnackbar('Failed to send email!', {variant: 'error',})
    );
  }

  render() {
    const { quoteRequest, requestErrors } = this.props;
    const { isLoading } = this.props;

    return (
      <main id='quoteRequestSection' style={{minHeight: `${100}vh`}}>
        <Container style={{paddingTop: 30, color: '#3365A7', textTransform: 'uppercase'}}>
          <Typography component="h4" variant="h4" align="center" >
            Get Quote
          </Typography>
        </Container>
        <Grid container style={{paddingTop: 30}}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{margin: 0, padding: 0}}>
            <Grid container style={{margin: 0, padding: 0}}>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{padding: 15, textAlign: 'center'}}>
                <TextField id="firstName" label="First Name" required style={{width: '100%', maxWidth: `${400}px`}}
                           value={quoteRequest.firstName}
                           error={Boolean(requestErrors.firstName && requestErrors.firstName.length >0)}
                           helperText={requestErrors.firstName}
                           onChange={event => this.handleFirstNameChanged(event.target.value)}
                           onBlur={event => this.handleFirstNameBlur(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{padding: 15, textAlign: 'center'}}>
                <TextField id="lastName" label="Last Name" required style={{width: '100%', maxWidth: `${400}px`}}
                           value={quoteRequest.lastName}
                           error={Boolean(requestErrors.lastName && requestErrors.lastName.length >0)}
                           helperText={requestErrors.lastName}
                           onChange={event => this.handleLastNameChanged(event.target.value)}
                           onBlur={event => this.handleLastNameBlur(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{padding: 15, textAlign: 'center'}}>
                <TextField id="phone" label="Phone" required style={{width: '100%', maxWidth: `${400}px`}}
                           value={quoteRequest.phoneNumber}
                           error={Boolean(requestErrors.phoneNumber && requestErrors.phoneNumber.length >0)}
                           helperText={requestErrors.phoneNumber}
                           onChange={event => this.handlePhoneNumberChanged(event.target.value)}
                           onBlur={event => this.handlePhoneNumberBlur(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{padding: 15, textAlign: 'center'}}>
                <TextField id="email" label="Email" required style={{width: '100%', maxWidth: `${400}px`}}
                           value={quoteRequest.email}
                           error={Boolean(requestErrors.email && requestErrors.email.length >0)}
                           helperText={requestErrors.email}
                           onChange={event => this.handleEmailChanged(event.target.value)}
                           onBlur={event => this.handleEmailBlur(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{padding: 15, textAlign: 'center'}}>
                <TextField id="bestTimeToContact" label="Best Time to Contact" style={{width: '100%', maxWidth: `${400}px`}}
                           value={quoteRequest.bestTimeToContact}
                           helperText={requestErrors.bestTimeToContact}
                           onChange={event => this.handleBestTimeToContactChanged(event.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{margin: 0, padding: 0}} >
            <Grid container style={{margin: 0, padding: 0}}>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft: 15, paddingRight: 15, paddingTop: 11, paddingBottom: 10, textAlign: 'center'}}>
                <TextField id="yachtModel" label="Yacht Make and Model" style={{width: '100%', maxWidth: `${400}px`}}
                           value={quoteRequest.yachtModel}
                           helperText={requestErrors.yachtModel}
                           onChange={event => this.handleYachtModelChanged(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft: 15, paddingRight: 15, paddingTop: 11, paddingBottom: 10, textAlign: 'center'}}>
                <TextField id="year" label="Year" style={{width: '100%', maxWidth: `${400}px`}}
                           value={quoteRequest.year}
                           helperText={requestErrors.year}
                           onChange={event => this.handleYearChanged(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft: 15, paddingRight: 15, paddingTop: 11, paddingBottom: 10, textAlign: 'center', width: '100%'}}>
                <Grid container style={{margin: 0, padding: 0, display: 'inline-block', maxWidth: `${400}px`}}>
                  <Grid container style={{margin: 0, padding: 0}}>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                      <TextField id="length" label="Length" style={{width: '100%', paddingRight: 15}}
                                 value={quoteRequest.length}
                                 helperText={requestErrors.length}
                                 onChange={event => this.handleLengthChanged(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} style={{paddingLeft: 15}}>
                      <LengthMetricSelector label={'unit'} value={quoteRequest.lengthUnit} onSelect={(value) => this.handleLengthUnitSelected(value)}/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft: 15, paddingRight: 15, paddingTop: 11, paddingBottom: 10, textAlign: 'center', width: '100%'}}>
                <Grid container style={{margin: 0, padding: 0, display: 'inline-block', maxWidth: `${400}px`}}>
                  <Grid container style={{margin: 0, padding: 0}}>
                    <Grid item xs={8} sm={8} md={8} lg={8} >
                      <TextField id="beam" label="Beam" style={{width: '100%', paddingRight: 15}}
                                 value={quoteRequest.beam}
                                 helperText={requestErrors.beam}
                                 onChange={event => this.handleBeamChanged(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} style={{paddingLeft: 15}}>
                      <LengthMetricSelector label={'unit'} value={quoteRequest.beamUnit} onSelect={(value) => this.handleBeamUnitSelected(value)}/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft: 15, paddingRight: 15, paddingTop: 11, paddingBottom: 10, textAlign: 'center', width: '100%'}}>
                <Grid container style={{margin: 0, padding: 0, display: 'inline-block', maxWidth: `${400}px`}}>
                  <Grid container style={{margin: 0, padding: 0}}>
                    <Grid item xs={8} sm={8} md={8} lg={8} >
                      <TextField id="weight" label="Weight" style={{width: '100%', paddingRight: 15}}
                                 value={quoteRequest.weight}
                                 helperText={requestErrors.weight}
                                 onChange={event => this.handleWeightChanged(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} style={{paddingLeft: 15}}>
                      <WeightMetricSelector label={'unit'} value={quoteRequest.weightUnit} onSelect={(value) => this.handleWeightUnitSelected(value)}/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingLeft: 15, paddingRight: 15, paddingTop: 11, paddingBottom: 10, textAlign: 'center'}}>
                <TransportPurposeSelector id="purpose"
                                          value={quoteRequest.purpose}
                                          onSelect={value => this.handlePurposeSelected(value)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{paddingTop: 30}}>
          <Grid item xs={12} sm={12} md={4} lg={4} style={{padding: 15, textAlign: 'center'}}>
            <TextField id="fromWhere" label="From Where" style={{width: '100%', maxWidth: `${400}px`}}
                       value={quoteRequest.fromWhere}
                       helperText={requestErrors.fromWhere}
                       onChange={event => this.handleFromWhereChanged(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} style={{padding: 15, textAlign: 'center'}}>
            <TextField id="toWhere" label="To Where" style={{width: '100%', maxWidth: `${400}px`}}
                       value={quoteRequest.toWhere}
                       helperText={requestErrors.toWhere}
                       onChange={event => this.handleToWhereChanged(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 15, textAlign: 'center'}}>
            <TextField id="when" label="When" style={{width: '100%', maxWidth: `${400}px`}}
                       value={quoteRequest.when}
                       helperText={requestErrors.when}
                       onChange={event => this.handleWhenDateChange(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} align='center' style={{marginTop: 30, marginBottom: 30,  color: '#3365A7'}}>
            <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>} style={{width: 120, borderRadius: 0}}
                    onClick={this.handleSendButtonClicked}
                    disabled={isLoading}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </main>
    );
  }
}

QuoteRequestSection.propTypes = {
  quoteRequest: PropTypes.object.isRequired,
  requestErrors: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  quoteRequest: state.quoteRequest.quoteRequest,
  requestErrors: state.quoteRequest.requestErrors,
  isLoading: state.quoteRequest.isLoading,
  message: state.quoteRequest.message
});

const mapActionsToProps = dispatch => ({
  dispatch,
  postQuoteRequest: (data) => {
    return dispatch(postQuoteRequest(data));
  },
  setFirstName: (firstName) => {
    dispatch(setFirstName(firstName));
  },
  setFirstNameError: (data) => {
    dispatch(setFirstNameError(data));
  },
  setLastName: (lastName) => {
    dispatch(setLastName(lastName));
  },
  setLastNameError: (data) => {
    dispatch(setLastNameError(data));
  },
  setPhoneNumber: (phoneNumber) => {
    dispatch(setPhoneNumber(phoneNumber));
  },
  setPhoneNumberError: (data) => {
    dispatch(setPhoneNumberError(data));
  },
  setEmail: (email) => {
    dispatch(setEmail(email));
  },
  setEmailError: (data) => {
    dispatch(setEmailError(data));
  },
  setBestTimeToContact: (bestTimeToContact) => {
    dispatch(setBestTimeToContact(bestTimeToContact));
  },
  setYachtModel: (yachtModel) => {
    dispatch(setYachtModel(yachtModel));
  },
  setYear: (year) => {
    dispatch(setYear(year));
  },
  setLength: (length) => {
    dispatch(setLength(length));
  },
  setLengthUnit: (lengthUnit) => {
    dispatch(setLengthUnit(lengthUnit));
  },
  setBeam: (beam) => {
    dispatch(setBeam(beam));
  },
  setBeamUnit: (beamUnit) => {
    dispatch(setBeamUnit(beamUnit));
  },
  setWeight: (weight) => {
    dispatch(setWeight(weight));
  },
  setWeightUnit: (weightUnit) => {
    dispatch(setWeightUnit(weightUnit));
  },
  setPurpose: (purpose) => {
    dispatch(setPurpose(purpose));
  },
  setFromWhere: (fromWhere) => {
    dispatch(setFromWhere(fromWhere));
  },
  setToWhere: (toWhere) => {
    dispatch(setToWhere(toWhere));
  },
  setWhen: (when) => {
    dispatch(setWhen(when));
  },
  resetQuoteRequestForm: () => {
    dispatch(resetQuoteRequestForm())
  },
  resetQuoteRequestErrors: () => {
    dispatch(resetQuoteRequestErrors());
  },
});

export default connect(mapStateToProps, mapActionsToProps)(withSnackbar(QuoteRequestSection));
