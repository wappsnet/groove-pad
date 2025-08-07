import { ReactNode } from 'react';

export interface MKPortalContextProps {
  gates: Record<string, ReactNode>;
  teleport: MKTeleportFN;
}

export interface MKPortalProviderProps {
  children?: ReactNode;
  portals?: string[];
}

export type MKTeleportFN = (gateName: string, element: ReactNode) => void;

export interface MKPortalConsumerProps {
  gateName: string;
  children: ReactNode;
}
