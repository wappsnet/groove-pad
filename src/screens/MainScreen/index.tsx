import { FC, useEffect, useRef } from "react";
import { Linking, TouchableOpacity, View } from "react-native";
import {
  getConfigsThunk,
  getConfigsLoading,
  getTips,
} from "store/slices/configs";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppNavigation } from "hooks/useAppNavigation";
import { MAIN_MENU } from "definitions/menu";
import Intl from "services/intl";
import MKIcon from "modules/MKIcon";
import MKScreen from "modules/MKScreen";
import MKImage from "modules/MKImage";
import MKSlider from "modules/MKSlider";
import MKCard from "modules/MKCard";
import MKTypo from "modules/MKTypo";
import MKGrid from "modules/MKGrid";
import MKButton from "modules/MKButton";
import MKSheet from "modules/MKSheet";
import AppHeader from "containers/AppHeader";
import { styles } from "./styles";
import MKRange from "../../modules/MKRange";

const MainScreen: FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const sheetRef = useRef<{ hide: () => void; open: () => void }>(null);
  const tips = useAppSelector(({ configs }) => getTips(configs));
  const loading = useAppSelector(({ configs }) => getConfigsLoading(configs));

  useEffect(() => {
    dispatch(getConfigsThunk());
  }, [dispatch]);

  return (
    <MKScreen>
      <MKScreen.Header>
        <AppHeader title={Intl.t("screens.main.header")} />
      </MKScreen.Header>
      <MKScreen.Body>
        <View style={styles.container}>
          <View style={styles.slider}>
            <MKSlider
              data={tips || []}
              refreshing={loading}
              renderItem={({ item, index }) => {
                return (
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
                );
              }}
              loop
            />
          </View>

          <View style={styles.menu}>
            <MKGrid.Row>
              {MAIN_MENU.map((item) => (
                <MKGrid.Col key={item.screen} size={3}>
                  <MKCard onClick={() => navigation.navigate(item.screen)}>
                    <MKCard.Body>
                      <MKIcon.Custom style={styles.menuIcon} icon={item.icon} />
                      <MKTypo type="label" center bold truncate>
                        {item.title}
                      </MKTypo>
                    </MKCard.Body>
                  </MKCard>
                </MKGrid.Col>
              ))}
            </MKGrid.Row>
            <MKButton
              onPress={() => {
                sheetRef.current?.open();
              }}
            >
              <MKTypo type="label">{"Open Sheet"}</MKTypo>
            </MKButton>
            <MKGrid.Row>
              <MKGrid.Col size={12}>
                <MKRange />
              </MKGrid.Col>
            </MKGrid.Row>
          </View>
        </View>
      </MKScreen.Body>
      <MKScreen.Footer />
      <MKSheet ref={sheetRef}>
        <MKTypo type="label">{"Open Sheet"}</MKTypo>
      </MKSheet>
    </MKScreen>
  );
};

export default MainScreen;
