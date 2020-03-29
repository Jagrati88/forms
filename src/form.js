import React, { Component } from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: ' ',
          hobby: ' ',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeHobby = this.handleChangeHobby.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value
      })
    }

    handleChangeHobby(event) {
        this.setState({
        hobby: event.target.value})
      }
  
    handleSubmit(event) {
      alert('Welcome : ' + this.state.name + ' and your hobby is :'+ this.state.hobby);
      event.preventDefault();
    }
  
    render() {
      return (
          <div className = "center">
          <form onSubmit={this.handleSubmit}>
          <div className = "form1">
          <label>
          <div className = "name">
            Name:
            <br />
            <input type="text" value={this.state.name} onChange={this.handleChange} /><br></br>
            </div>
          </label>
          <label>
          <div className = "hobby">
              Hobbies :
         <br />
              <div className = "name1">
              <select className = "drop" value = {this.state.hobby} onChange = {this.handleChangeHobby}>
                  <option value = "Listening Music">Listening Music</option>
                  <option value = "Travelling">Travelling</option>
                  <option value = "Collecting Keyrings">Collecting Keyrings</option>
              </select>
              </div>
              </div>
          </label>
          <br />
          <div className = "align">
          <input className = "sub" type="submit" value="Submit" />
          </div>
          </div>
        </form>
        </div>
      );
    }
  }

  export default Form;
  
