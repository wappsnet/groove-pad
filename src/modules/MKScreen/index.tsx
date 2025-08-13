import MKScreenBody from './Addons/components/MKScreenBody';
import MKScreenContainer from './Addons/components/MKScreenContainer';
import MKScreenFooter from './Addons/components/MKScreenFooter';
import MKScreenHeader from './Addons/components/MKScreenHeader';

const MKScreen = Object.assign(MKScreenContainer, {
  Body: MKScreenBody,
  Header: MKScreenHeader,
  Footer: MKScreenFooter
});

export default MKScreen;
