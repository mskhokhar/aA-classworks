import Signup from './signup';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);