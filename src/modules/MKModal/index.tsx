import MKModalContainer from './Addons/components/MKModalContainer';
import MKModalHeader from './Addons/components/MKModalHeader';
import MKModalFooter from './Addons/components/MKModalFooter';
import MKModalBody from './Addons/components/MKModalBody';

const MKModal = Object.assign(MKModalContainer, {
  Header: MKModalHeader,
  Footer: MKModalFooter,
  Body: MKModalBody
});

export default MKModal;
