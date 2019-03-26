import React, { Component } from 'react';
import PropTypes from "prop-types";

import { connect } from 'react-redux';

class Joke extends Component {

  render() {
    const {jokes} = this.props;
    //only using the latest joke 
    const joke = jokes[jokes.length-1];
   
    return (
     <div >
        {jokes.length > 0 && 
          (
            <div className="d-flex flex-row align-items-baseline">
            <div className="p-2">
          
              <img className="img-thumbnail" alt="thumbnail Here" src={joke.icon} />

            </div>

            <div className="p-2">

              <p> {joke.value} </p>

            </div>
          </div>
          
          )
      }
     </div>
    );
  }
}

const mapStateToProps = ({jokes}) =>{
  return {
    jokes: jokes,
 
  }
}

Joke.propTypes = {
  jokes: PropTypes.array.isRequired
}




export default connect(mapStateToProps) (Joke);
