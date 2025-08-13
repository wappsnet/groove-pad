import { Children, cloneElement, FC, isValidElement } from 'react';

import { Modal, View, ModalProps, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface MKModalContainerProps extends ModalProps {
  visible: boolean;
  close: () => void;
}

const MKModalContainer: FC<MKModalContainerProps> = ({ children, close, visible, ...props }) => (
  <Modal visible={visible} transparent statusBarTranslucent {...props}>
    <View style={styles.container}>
      <View style={styles.content}>
        {Children.toArray(children).map((child) => {
          if (isValidElement(child)) {
            return (
              <>
                {cloneElement(child, {
                  ...child.props,
                  close
                })}
              </>
            );
          }

          return null;
        })}
      </View>
      <TouchableOpacity style={styles.overLay} onPress={close} />
    </View>
  </Modal>
);

export default MKModalContainer;
