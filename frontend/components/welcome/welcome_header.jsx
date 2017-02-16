import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class WelcomeHeader extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
    hashHistory.push('/');
  }

  render(){

    const text = this.props.loggedIn ? "Log out" : "Log in";
    let buttons;
    if (this.props.loggedIn){
      buttons = (<Link onClick={this.handleLogout}>Sign Out</Link>);
    } else {
      buttons = (<Link to="/login">Log in</Link>);
    }

    return(
      <div>
        <Link to='/signup' className='create-button'>Create a MeetNow!</Link>
        <Link to='/' className='logo'><img src={window.assets.logo} /></Link>
        <ul>
          <li><label className='language'>Language</label></li>
          <li><Link to='/login' className='login-button'>Log in</Link></li>
          <li><Link to='/signup' className='signup-button'>Sign up</Link></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeHeader);