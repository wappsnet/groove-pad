import React, { FC, ReactNode, useState } from 'react';
import { MKPortalContext } from '../../definitions';
import { MKPortalProviderProps } from '../../types';

const MKPortalProvider: FC<MKPortalProviderProps> = ({ children }) => {
  const [gates, setGates] = useState<Record<string, ReactNode>>({});

  return (
    <MKPortalContext.Provider
      value={{
        gates,
        teleport: (name, element) => {
          setGates({ ...gates, [name]: element });
        }
      }}
    >
      {children}
      {Object.values(gates)}
    </MKPortalContext.Provider>
  );
};

export default MKPortalProvider;
