import { useContext, useEffect, FC } from "react";
import { MKPortalContext } from "../../definitions";
import { MKPortalConsumerProps } from "../../types";

const MKPortalConsumer: FC<MKPortalConsumerProps> = ({
  gateName,
  children,
}) => {
  const portal = useContext(MKPortalContext);

  useEffect(() => {
    portal.teleport(gateName, children);

    return () => {
      portal.teleport(gateName, null);
    };
  }, [children]);

  return null;
};

export default MKPortalConsumer;
