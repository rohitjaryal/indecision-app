import React from 'react';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleSingleDelete=this.handleSingleDelete.bind(this);
      this.state = {
        options: props.options
      };
    }
    handleDeleteOptions() {
      this.setState(()=>({options: []}));
    }
  
    handleSingleDelete(optionToRemove){
  
      this.setState((prevState)=>({
        options: prevState.options.filter((option)=>{
          return optionToRemove!==option;
        })
      }));
  
      console.log('Single delete::',optionToRemove);
    }
  
  
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
  
      this.setState((prevState)=>({options: prevState.options.concat(option)}));
    }
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleSingleDelete={this.handleSingleDelete}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  };