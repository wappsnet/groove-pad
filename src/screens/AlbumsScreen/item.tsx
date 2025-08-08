import { FC } from "react";
import { AlbumDto } from "store/slices/albums/types";
import MKTypo from "modules/MKTypo";
import BkgImage from "modules/MKImage";
import MKView from "modules/MKView";
import { styles } from "./styles";

const AlbumItem: FC<AlbumDto> = ({ name, authors, description, image }) => {
  return (
    <MKView style={styles.container}>
      <BkgImage
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <MKView style={styles.info}>
        <MKTypo type="h5">{name}</MKTypo>
        <MKTypo type="h6">
          {authors.map((author) => author.name).join(",")}
        </MKTypo>
        <MKTypo type="p">{description.substring(0, 40).concat("...")}</MKTypo>
      </MKView>
    </MKView>
  );
};

export default AlbumItem;
