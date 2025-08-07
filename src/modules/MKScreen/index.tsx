import MKScreenContainer from './Addons/components/MKScreenContainer';
import MKScreenBody from './Addons/components/MKScreenBody';
import MKScreenHeader from './Addons/components/MKScreenHeader';
import MKScreenFooter from './Addons/components/MKScreenFooter';

const MKScreen = Object.assign(MKScreenContainer, {
  Body: MKScreenBody,
  Header: MKScreenHeader,
  Footer: MKScreenFooter
});

export default MKScreen;
