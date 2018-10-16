import { createSwitchNavigator } from 'react-navigation';
import Login from '.././login/Login';
import Loading from '.././loading/Loading';
import Preference from '.././preference/Preference';
import Map from '.././map/Map';
import Event from '.././event/Event';
import Setting from '.././setting/Setting';
import Home from '.././home/Home';
import Activity from '.././activity/Activity';

export default createSwitchNavigator ({
  Loading: Loading,
	Login: Login,
	Activity: Activity,
	Preference: Preference,
	Home: Home,
	Map: Map,
	Event: Event,
});