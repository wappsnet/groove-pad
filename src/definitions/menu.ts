import { APP_MESSAGES } from 'assets/lang/messages';

import Assets from 'definitions/assets';
import { ROUTES } from 'definitions/routes';

export const MAIN_MENU = [
  {
    title: APP_MESSAGES.albums,
    icon: Assets.icons.musics,
    screen: ROUTES.albums.name,
  },
  {
    title: APP_MESSAGES.artists,
    icon: Assets.icons.libraries,
    screen: ROUTES.libraries.name,
  },
  {
    title: APP_MESSAGES.pads,
    icon: Assets.icons.pads,
    screen: ROUTES.pads.name,
  },
  {
    title: APP_MESSAGES.musics,
    icon: Assets.icons.musics,
    screen: ROUTES.music.name,
  },
];

export const FooterMenu = () => [
  {
    name: 'main',
    title: APP_MESSAGES.homeTitle,
    icon: Assets.icons.home,
    route: ROUTES.main.name,
  },
  {
    name: 'settings',
    title: APP_MESSAGES.settingsTitle,
    icon: Assets.icons.settings,
    route: ROUTES.albums.name,
  },
];
