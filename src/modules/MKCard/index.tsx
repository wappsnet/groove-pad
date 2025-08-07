import MKCardContainer from './Addons/components/MKCardContainer';
import MKCardBody from './Addons/components/MKCardBody';
import MKCardHeader from './Addons/components/MKCardHeader';
import MKCardFooter from './Addons/components/MKCardFooter';

const MKCard = Object.assign(MKCardContainer, {
  Body: MKCardBody,
  Header: MKCardHeader,
  Footer: MKCardFooter
});

export default MKCard;
