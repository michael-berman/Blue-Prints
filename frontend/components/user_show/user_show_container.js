import { connect } from 'react-redux';

import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(UserShow);
