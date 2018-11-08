import { createSwitchNavigator } from 'react-navigation';
import Login from '.././login/Login';
import Loading from '.././loading/Loading';
import Preference from '.././preference/Preference';
import Setting from '.././setting/Setting';
import Home from '.././home/Home';
import Signup from '.././signup/Signup';
import Activity from '.././activity/Activity';

export default createSwitchNavigator ({
  Loading: Loading,
	Login: Login,
	Preference: Preference,
	Home: Home,
	Signup: Signup,
	Activity: Activity,
});