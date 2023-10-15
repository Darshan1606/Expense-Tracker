import { INCOME_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const incomeNavigationConfig = [
  {
    key: "apps.income",
    path: `${INCOME_PREFIX_PATH}`,
    title: "Income",
    icon: "income",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default incomeNavigationConfig;
