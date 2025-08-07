import Assets from "definitions/assets";
import { ROUTES } from "definitions/routes";
import Intl from "services/intl";

export const MAIN_MENU = [
  {
    title: Intl.t("screens.albums.header"),
    icon: Assets.icons.musics,
    screen: ROUTES.albums.name,
  },
  {
    title: Intl.t("screens.libraries.header"),
    icon: Assets.icons.libraries,
    screen: ROUTES.albums.name,
  },
  {
    title: Intl.t("screens.pads.header"),
    icon: Assets.icons.pads,
    screen: ROUTES.albums.name,
  },
  {
    title: Intl.t("screens.musics.header"),
    icon: Assets.icons.musics,
    screen: ROUTES.albums.name,
  },
];

export const FooterMenu = () => [
  {
    name: "main",
    title: Intl.t("screens.main.header"),
    icon: Assets.icons.home,
    route: ROUTES.main.name,
  },
  {
    name: "settings",
    title: Intl.t("screens.settings.header"),
    icon: Assets.icons.settings,
    route: ROUTES.albums.name,
  },
];
