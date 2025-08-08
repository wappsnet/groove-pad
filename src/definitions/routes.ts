import { NOT_AUTHORIZED } from "definitions/permissions";

export const ROUTES = {
  main: {
    name: "main",
    permissions: [NOT_AUTHORIZED],
  },
  albums: {
    name: "albums",
    permissions: [NOT_AUTHORIZED],
  },
  libraries: {
    name: "libraries",
    permissions: [NOT_AUTHORIZED],
  },
  pads: {
    name: "pads",
    permissions: [NOT_AUTHORIZED],
  },
  music: {
    name: "music",
    permissions: [NOT_AUTHORIZED],
  },
  storybook: {
    name: "storybook",
    permissions: [NOT_AUTHORIZED],
  },
};
