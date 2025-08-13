import MKCardBody from './Addons/components/MKCardBody';
import MKCardContainer from './Addons/components/MKCardContainer';
import MKCardFooter from './Addons/components/MKCardFooter';
import MKCardHeader from './Addons/components/MKCardHeader';

const MKCard = Object.assign(MKCardContainer, {
  Body: MKCardBody,
  Header: MKCardHeader,
  Footer: MKCardFooter
});

export default MKCard;
