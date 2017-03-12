import React from 'react';
import { fetchAllGroups } from '../../actions/group_actions';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.category || '' };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    // this.setState({[field]: event.currentTarget.value});
    this.setState({name: e.currentTarget.value});
    this.props.fetchAllGroups(e.currentTarget.value);
  }


  render() {
    return(
      <div className='search-bar'>
        <div className='search-bar-left'>
          <input className='search-input' type='text' placeholder='e.g. tech' value={this.state.name} onChange={this.updateSearch} />
          <img className='search-icon' src="https://s3.amazonaws.com/meetnow-DEV/meetNow/searchicon.png" alt="search-icon" />
          <div className='within-miles'>within 25 miles by location</div>
        </div>

        <div className='search-bar-right'>
          <button onClick={this.props.toggleCalendar} className='groups-button'>Groups</button>
          <button onClick={this.props.toggleCalendar} className='calendar-button'>Calendar</button>
        </div>


      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllGroups: (filter) => dispatch(fetchAllGroups(filter))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
