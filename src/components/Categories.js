import React, { Component } from 'react';
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import { connect } from 'react-redux';

class Categories extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: {'categorySelected': this.props.categorySelected}
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.categorySelected !== prevProps.categorySelected && this.props.categorySelected !== "none"){
      this.props.fetch("https://api.chucknorris.io/jokes/random?category="+this.props.categorySelected);
    }
  }

  dispatchSelectCategory(){
    this.props.select_category(this.state.data['categorySelected']);
}

handleChange = (event) =>{
  event.stopPropagation();

  const {data} = this.state;
  data[event.target.name] = event.target.value;

  this.setState({data});
  this.dispatchSelectCategory();

}
  render() {
    const {data} = this.state;
    const {categories} = this.props;
    return (
        <div className="p-2">
              <Select
                className="custom-select"
                value={data['categorySelected']}
                onChange={this.handleChange}
                
                input={
                  <Input name="categorySelected" />
                      }
                >
                 <MenuItem value="none">Select Category</MenuItem>
                {
                  categories.length > 0 &&

                  categories.map((category, index) => 
                    (<MenuItem value={category} key={category}>{category}</MenuItem>))
                }
              </Select>
        </div>
      
    );
  }
}

const mapStateToProps = ({categories}) =>{
  return {
    categories: categories.data,
    categorySelected: categories.selected,
  }
}

const mapDispatchToProps = dispatch => ({
  select_category: (category) => dispatch({type: "SELECT_CATEGORY", category: category}),
  fetch: (url ) => dispatch({ type: "API_CALL_REQUEST", url: url}),
})

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  select_category: PropTypes.func.isRequired,
  categorySelected: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps) (Categories);
