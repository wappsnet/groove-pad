import { FC } from 'react';
import { Text, View } from 'react-native';
import MKTypo from 'modules/MKTypo';
import MKButton from 'modules/MKButton';
import MKIcon from 'modules/MKIcon';
import { styles } from './styles';

type AppHeaderProps = {
  title?: string;
};

const AppHeader: FC<AppHeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MKButton type="tertiary">
          <MKIcon.Awesome icon="arrow-left" />
        </MKButton>
      </View>
      <Text style={styles.middle}>
        <MKTypo type="h1" truncate>
          {title}
        </MKTypo>
      </Text>
      <View style={styles.right}>
        <MKButton type="tertiary">
          <MKIcon.Awesome icon="cog" />
        </MKButton>
      </View>
    </View>
  );
};

export default AppHeader;
