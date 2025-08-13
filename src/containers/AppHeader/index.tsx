import { FC, ReactNode } from 'react';

import { useNavigation } from '@react-navigation/core';
import { Text } from 'react-native';

import MKButton from 'modules/MKButton';
import MKIcon from 'modules/MKIcon';
import MKTypo from 'modules/MKTypo';
import MKView from 'modules/MKView';

import { styles } from './styles';

interface AppHeaderProps {
  title?: ReactNode;
  back?: boolean;
}

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
        <MKTypo type="h3" truncate>
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
