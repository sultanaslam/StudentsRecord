import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Display from './Display';
import * as actions from '../actions';

export class App extends React.Component {
  static propTypes = {
    fetchData: func.isRequired,
    // data: arrayOf(any).isRequired,
    // isLoading: bool.isRequired,
    // error: shape({
    //   message: string
    // })
  };

  static defaultProps = {
    // error: null
  };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    // const { data, isLoading, error } = this.props;
    return (
      <div className="app">
        <Display />
        {// `data retreived is ${JSON.stringify(data)}, ${isLoading}, ${error &&
        //  error.message}`
        }
      </div>
    );
  }
}

// function mapStateToProps({ data }) {
//   return {
//     data: data.data,
//     isLoading: data.isLoading,
//     error: data.error
//   };
// }

export default connect(null, { fetchData: actions.fetchData })(App);
