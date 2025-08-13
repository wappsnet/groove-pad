import { FC, useEffect, useState } from 'react';

import { FormattedMessage } from 'react-intl';
import { Linking, TouchableOpacity } from 'react-native';

import { getConfigsThunk, getConfigsLoading, getTips } from 'store/slices/configs';

import { APP_MESSAGES } from 'assets/lang/messages';

import { MAIN_MENU } from 'definitions/menu';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useAppSelector } from 'hooks/useAppSelector';

import MKBottomSheet from 'modules/MKBottomSheet';
import MKButton from 'modules/MKButton';
import MKCard from 'modules/MKCard';
import MKForm from 'modules/MKForm';
import MKGrid from 'modules/MKGrid';
import MKIcon from 'modules/MKIcon';
import MKImage from 'modules/MKImage';
import MKScreen from 'modules/MKScreen';
import MKSlider from 'modules/MKSlider';
import MKTypo from 'modules/MKTypo';
import MKView from 'modules/MKView';

import AppHeader from 'containers/AppHeader';

import { styles } from './styles';

const MainScreen: FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const [sheetVisible, setSheetVisible] = useState(false);
  const tips = useAppSelector(({ configs }) => getTips(configs));
  const loading = useAppSelector(({ configs }) => getConfigsLoading(configs));

  const [rangeValue, setRangeValue] = useState(42);

  useEffect(() => {
    dispatch(getConfigsThunk());
  }, [dispatch]);

  return (
    <MKScreen>
      <MKScreen.Header>
        <AppHeader title={<FormattedMessage {...APP_MESSAGES.appName} />} />
      </MKScreen.Header>
      <MKScreen.Body>
        <MKView style={styles.container}>
          <MKView style={styles.slider}>
            <MKSlider
              data={tips ?? []}
              refreshing={loading}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={styles.sliderItem}
                  onPress={() => {
                    if (item.uri) {
                      Linking.openURL(item.uri);
                    }
                  }}
                >
                  <MKImage
                    style={styles.sliderImage}
                    source={{
                      uri: item.uri,
                    }}
                  />
                </TouchableOpacity>
              )}
              loop
            />
          </MKView>

          <MKView style={styles.menu}>
            <MKGrid.Row>
              {MAIN_MENU.map((item) => (
                <MKGrid.Col key={item.screen} size={3}>
                  <MKCard onClick={() => navigation.navigate(item.screen)}>
                    <MKCard.Body>
                      <MKIcon.Custom style={styles.menuIcon} icon={item.icon} />
                      <MKTypo type="label" center bold truncate>
                        <FormattedMessage {...item.title} />
                      </MKTypo>
                    </MKCard.Body>
                  </MKCard>
                </MKGrid.Col>
              ))}
            </MKGrid.Row>
            <MKButton
              onPress={() => {
                setSheetVisible(true);
              }}
            >
              <MKTypo type="label">{'Open Sheet'}</MKTypo>
            </MKButton>
          </MKView>
          <MKForm.Range
            value={rangeValue}
            onValueChange={(val) => {
              setRangeValue(val);
            }}
          />
        </MKView>
      </MKScreen.Body>
      <MKScreen.Footer />

      {sheetVisible && (
        <MKBottomSheet
          onClose={() => {
            setSheetVisible(false);
          }}
        >
          <MKTypo type="label">{'Sheet'}</MKTypo>
        </MKBottomSheet>
      )}
    </MKScreen>
  );
};

export default MainScreen;
