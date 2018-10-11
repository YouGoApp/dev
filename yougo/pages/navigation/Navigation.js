import { createSwitchNavigator } from 'react-navigation';
import Login from '.././login/Login';
import Loading from '.././loading/Loading';

export default createSwitchNavigator ({
  Loading: Loading,
	Login: Login,
});