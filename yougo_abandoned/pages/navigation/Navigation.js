import { createSwitchNavigator } from 'react-navigation';

import Loading from '.././loading/Loading';
import Login from '.././login/Login';
import Signup from '.././signup/Signup';
import Preference from '.././preference/Preference';
import Activity from '.././activity/Activity';
import Recommendation from '.././recommendation/Recommendation';
import Setting from '.././setting/Setting';
import Profile from '.././profile/Profile';
import Description from '.././description/Description';
import RecomRest from '.././recomRest/RecomRest';

export default createSwitchNavigator ({
  Loading: Loading,
	Login: Login,
	Signup: Signup,
	Preference: Preference,
	Activity: Activity,
	Recommendation: Recommendation,
	Setting: Setting,
	Profile: Profile,
	Description: Description,
	RecomRest: RecomRest
});