import { connect } from 'react-redux';

import LoginForm from 'main/components/login-form/login-form';

import { changeLogin, changePassword, login } from 'main/actions/authentication-actions';

export default connect(
    state => ({
        login: state.authInfo.get('login'),
        password: state.authInfo.get('password'),
    }),
    dispatch => ({
        onChangeLogin: userLogin => dispatch(changeLogin(userLogin)),
        onChangePassword: password => dispatch(changePassword(password)),
        onClickLoginBtn: () => dispatch(login()),
    }),
)(LoginForm);
