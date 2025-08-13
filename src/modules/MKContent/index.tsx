import { FC, ReactNode } from 'react';

import { ScrollView, View, ViewProps } from 'react-native';

import MKSpinner from 'modules/MKSpinner';

import { styles } from './styles';

interface ContentProps extends ViewProps {
  header?: ReactNode;
  footer?: ReactNode;
  loading?: boolean;
  onScrollBottom?: () => void;
}

const MKContent: FC<ContentProps> = ({ header, footer, children, onScrollBottom, loading = false, style = {} }) => (
    <View style={[styles.container, style]}>
      {header && (
        <View style={styles.header}>
          <View style={styles.headerWrapper}>{header}</View>
        </View>
      )}
      <ScrollView
        scrollEventThrottle={1}
        removeClippedSubviews
        onScroll={(e) => {
          if (onScrollBottom) {
            const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
            if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20) {
              onScrollBottom();
            }
          }
        }}
        style={styles.contentWrapper}
        contentContainerStyle={styles.content}
      >
        {loading && <MKSpinner />}
        {children}
      </ScrollView>

      {footer && (
        <View style={styles.footer}>
          <View style={styles.footerWrapper}>{footer}</View>
        </View>
      )}
    </View>
  );

export default MKContent;
