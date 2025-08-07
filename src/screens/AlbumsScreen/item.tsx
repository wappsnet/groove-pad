import React, { FC } from 'react';
import { AlbumDto } from 'store/slices/albums/types';
import { Text, View } from 'modules/MKTypo';
import BkgImage from 'modules/MKImage';
import { styles } from './styles';

const AlbumItem: FC<AlbumDto> = ({ name, authors, description, image }) => {
  return (
    <View style={styles.container}>
      <BkgImage
        style={styles.image}
        source={{
          uri: image
        }}
      />
      <View style={styles.info}>
        <Text type="h5">{name}</Text>
        <Text type="h6">{authors.map((author) => author.name).join(',')}</Text>
        <Text type="p">{description.substring(0, 40).concat('...')}</Text>
      </View>
    </View>
  );
};

export default AlbumItem;
