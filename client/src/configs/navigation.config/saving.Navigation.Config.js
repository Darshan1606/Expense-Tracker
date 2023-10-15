import { SAVING_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const savingNavigationConfig = [
  {
    key: "apps.saving",
    path: `${SAVING_PREFIX_PATH}`,
    title: "Saving",
    icon: "saving",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default savingNavigationConfig;
