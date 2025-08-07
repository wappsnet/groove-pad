import { FC } from 'react';
import { PadDto } from 'store/slices/pads/types';
import { View } from 'modules/MKTypo';
import Pad from 'components/Pad';
import { styles } from './styles';

type BoardProps = {
  pads: PadDto[];
  pressPad: (id: number) => void;
};

const Board: FC<BoardProps> = ({ pads, pressPad }) => {
  return (
    <View style={styles.boardContainer}>
      {pads.map((item) => (
        <View key={item.id} style={styles.boardItem}>
          <Pad
            onPress={() => {
              pressPad(item.id);
            }}
            {...item}
          />
        </View>
      ))}
    </View>
  );
};

export default Board;
