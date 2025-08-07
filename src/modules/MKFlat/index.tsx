import React, { ReactNode } from "react";
import { View, SectionList, SectionListProps } from "react-native";
import MKSpinner from "modules/MKSpinner";
import { styles } from "./styles";

interface FlatContentProps<T> extends SectionListProps<T> {
  header?: ReactNode;
  footer?: ReactNode;
  loading?: boolean;
  empty?: ReactNode;
}

const MKFlat = <T,>({
  header,
  footer,
  sections,
  loading,
  renderItem,
  renderSectionHeader,
  ListEmptyComponent,
  onEndReached,
  style = {},
  empty,
}: FlatContentProps<T>) => {
  return (
    <View style={[styles.container, style]}>
      {header ? (
        <View style={styles.header}>
          <View style={styles.headerWrapper}>{header}</View>
        </View>
      ) : null}
      <View style={styles.content}>
        <SectionList
          style={[styles.flatList, style]}
          sections={sections}
          refreshing={loading}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          progressViewOffset={100}
          keyExtractor={(item, index) => `${item}-${index}`}
          stickySectionHeadersEnabled={false}
          renderItem={({ section, item, separators, index }) =>
            renderItem ? (
              <View key={index} style={styles.flatListItem}>
                {renderItem({ section, item, separators, index })}
              </View>
            ) : null
          }
          renderSectionHeader={({ section }) =>
            renderSectionHeader ? (
              <View key={section.title} style={styles.sectionHeader}>
                {renderSectionHeader({ section })}
              </View>
            ) : null
          }
          ListEmptyComponent={ListEmptyComponent}
        />
        {loading && <MKSpinner />}
        {!sections.length && empty}
      </View>
      {footer && (
        <View style={styles.footer}>
          <View style={styles.footerWrapper}>{footer}</View>
        </View>
      )}
    </View>
  );
};

export default MKFlat;
