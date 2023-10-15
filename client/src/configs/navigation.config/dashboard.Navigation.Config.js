import { DASHBOARD_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const dashboardNavigationConfig = [
  {
    key: "apps.dashboard",
    path: `${DASHBOARD_PREFIX_PATH}`,
    title: "Dashboard",
    icon: "dashboard",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default dashboardNavigationConfig;
