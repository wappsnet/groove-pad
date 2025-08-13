import MKModalBody from './Addons/components/MKModalBody';
import MKModalContainer from './Addons/components/MKModalContainer';
import MKModalFooter from './Addons/components/MKModalFooter';
import MKModalHeader from './Addons/components/MKModalHeader';

const MKModal = Object.assign(MKModalContainer, {
  Header: MKModalHeader,
  Footer: MKModalFooter,
  Body: MKModalBody
});

export default MKModal;
