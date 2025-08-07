import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { reducer } from 'store';

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof reducer>> = useSelector;
