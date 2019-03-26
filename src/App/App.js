import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Categories from '../components/Categories';
import Loading from '../components/Loading';
import Joke from '../components/Joke';

import './App.css';
const Initial_Categories_URL = "https://api.chucknorris.io/jokes/categories";


class App extends Component {

  componentDidMount(){
    this.props.fetch(Initial_Categories_URL);
  }

  render() {

     const { fetching, error} = this.props;

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chuck Norris Joke Generator</h1>
        </header>

         <div className="d-flex flex-column">
         
            {fetching ? ( <Loading/> ) : ( <Categories/>)}
            
            <Joke/>

            {error && <p  style={{ color: "red", padding: "50px" }}>Uh oh - something went wrong! Please check the console for further information.</p>}

         </div>
        

       

      </div>
    );
  }
}
const mapStateToProps = ({api_reduc}) => {
  return{
    fetching: api_reduc.fetching,
    error: api_reduc.error,
    };
};

const mapDispatchToProps = dispatch => ({
  fetch: (url ) => dispatch({ type: "API_CALL_REQUEST", url: url}),

});

App.propTypes = {
  fetch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
