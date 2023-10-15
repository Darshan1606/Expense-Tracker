import { GIVETAKE_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const givetakeNavigationConfig = [
  {
    key: "apps.givetake",
    path: `${GIVETAKE_PREFIX_PATH}`,
    title: "Give & Take",
    icon: "givetake",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default givetakeNavigationConfig;
