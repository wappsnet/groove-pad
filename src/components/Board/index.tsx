import { FC } from "react";
import { PadDto } from "store/slices/pads/types";
import MKView from "modules/MKView";
import Pad from "components/Pad";
import { styles } from "./styles";

type BoardProps = {
  pads: PadDto[];
  pressPad: (id: number) => void;
};

const Board: FC<BoardProps> = ({ pads, pressPad }) => {
  return (
    <MKView style={styles.boardContainer}>
      {pads.map((item) => (
        <MKView key={item.id} style={styles.boardItem}>
          <Pad
            onPress={() => {
              pressPad(item.id);
            }}
            {...item}
          />
        </MKView>
      ))}
    </MKView>
  );
};

export default Board;
