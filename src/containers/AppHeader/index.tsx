import { FC } from 'react';
import { Text } from 'react-native';
import MKTypo from 'modules/MKTypo';
import MKButton from 'modules/MKButton';
import MKIcon from 'modules/MKIcon';
import MKView from 'modules/MKView';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';

type AppHeaderProps = {
  title?: string;
  back?: boolean;
};

const AppHeader: FC<AppHeaderProps> = ({ title, back = false }) => {
  const navigation = useNavigation();
  return (
    <MKView style={styles.container}>
      <MKView style={styles.left}>
        {back && (
          <MKButton
            type="tertiary"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MKIcon.Awesome icon="arrow-left" />
          </MKButton>
        )}
      </MKView>
      <Text style={styles.middle}>
        <MKTypo type="h1" truncate>
          {title}
        </MKTypo>
      </Text>
      <MKView style={styles.right}>
        <MKButton type="tertiary">
          <MKIcon.Awesome icon="cog" />
        </MKButton>
      </MKView>
    </MKView>
  );
};

export default AppHeader;
