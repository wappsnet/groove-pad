import { createContext, ReactNode } from 'react';
import { MKPortalContextProps } from '../types';

export const MKPortalContext = createContext<MKPortalContextProps>({
  gates: {},
  teleport: (gateName: string, element: ReactNode) => {
    return { [gateName]: element };
  }
});
