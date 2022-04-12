import React from 'react';
import SearchBar from '../SearchBar/index';
import SearchButton from '../SearchButton/index';
export default class SearchForm extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},
        errors: {}
      }
    }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Input
      if(!fields["search_input"]){
        formIsValid = false;
        errors["search_input"] = "Cannot be empty";
      }
  
      this.setState({errors: errors});
      return formIsValid;
    }
  
    searchSubmit(e){
      e.preventDefault();
    }
  
    handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    }
  
    render(){
      return (
        <div className="form-container">
            <form onSubmit= {this.searchSubmit.bind(this)} name="search" method="get" action="https://www.google.com/search">
            <fieldset>
            <SearchBar />
            </fieldset>
            <fieldset>
            <SearchButton />
            </fieldset>
            </form>
        </div>
      )
    }
  }
