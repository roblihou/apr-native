import React from 'react';
import { Keyboard, StyleSheet, KeyboardAvoidingView, Text, View, TextInput, Picker, Button } from 'react-native';
import calculateApr from '../helpers/calculateApr';
import calculateResidual from '../helpers/calculateResidual';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyPayments: '',
      noPayments: '',
      apr: 0,
      isHidden: true,
      principle: '',
      principleError: false,
      monthlyPaymentsError: false,
      noPaymentsError: false,
    };
    this.removeNonNumericCharacters = this.removeNonNumericCharacters.bind(this);
    this.calculateApr = calculateApr.bind(this);
    this.calculateResidual = calculateResidual.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  removeNonNumericCharacters(text) {
    // code to remove non-numeric characters from text
    return text.replace(/[^0-9.]/g, "");
  }


  handleChange(name, value) {
    if(isNaN(value)){
      console.log('not a number');
      this.setState({
        [`${name}Error`]: true,
      })
    }
    this.setState({
      [name]: this.removeNonNumericCharacters(value),
      isHidden: true,
    });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{padding: 10}}
        behavior="padding"
      >
        <TextInput 
          style={styles.inputFieldTop}
          keyboardType = 'numeric'
          placeholder="Enter loan amount"
          onChangeText={userInput => this.handleChange('principle', userInput)}
          value={this.state.principle.toString()}
        /> 
        <TextInput
          style={styles.inputFieldMid}
          keyboardType = 'numeric'
          placeholder="Enter monthly repayments"
          onChangeText={userInput => this.handleChange('monthlyPayments', userInput)}
        />
        <TextInput
          style={styles.inputFieldMid}
          keyboardType = 'numeric'
          placeholder="Enter number of repayments"
          onChangeText={userInput => this.handleChange('noPayments', userInput)}
        />
        <Button
          onPress={() => {
            this.calculateApr(this.state.principle, this.state.monthlyPayments, this.state.noPayments);
            Keyboard.dismiss();
          }}
          title="Calculate APR"
        />
        {!this.state.isHidden && <Text
          style={{
            alignSelf: 'center',
            fontSize: 40,
          }}
        >{this.state.apr}%</Text>}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  inputFieldTop: {
    textAlign: 'center',
    borderTopWidth: 2,  // size/width of the border
    borderBottomWidth: 2,
    borderColor: 'lightgrey',  // color of the border
    padding: 10,
    marginHorizontal: 10,
    alignContent: 'center',
  },
  inputFieldMid: {
    borderBottomWidth: 2,
    textAlign: 'center',
    borderColor: 'lightgrey',  // color of the border
    padding: 10,
    marginHorizontal: 10,
  },
});

export default Form;
