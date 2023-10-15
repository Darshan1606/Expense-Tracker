import { REPORTS_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const reportsNavigationConfig = [
  {
    key: "apps.reports",
    path: `${REPORTS_PREFIX_PATH}`,
    title: "Reports",
    icon: "reports",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default reportsNavigationConfig;
