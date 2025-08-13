import { FC, ReactNode, useMemo, useState } from 'react';

import { MKPortalContext } from '../../definitions';
import { MKPortalProviderProps } from '../../types';

const MKPortalProvider: FC<MKPortalProviderProps> = ({ children }) => {
  const [gates, setGates] = useState<Record<string, ReactNode>>({});

  const context = useMemo(
    () => ({
      gates,
      teleport: (name: string, element: ReactNode) => {
        setGates({
          ...gates,
          [name]: element,
        });
      },
    }),
    [gates],
  );

  return (
    <MKPortalContext.Provider value={context}>
      {children}
      {Object.values(gates)}
    </MKPortalContext.Provider>
  );
};

export default MKPortalProvider;
