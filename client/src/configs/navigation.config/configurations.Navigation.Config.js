import { CONFIGURATION_PREFIX_PATH } from "constants/route.constant";
import {
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const configurationsNavigationConfig = [
  {
    key: "apps.configurations",
    path: `${CONFIGURATION_PREFIX_PATH}`,
    title: "Configurations",
    icon: "config",
    type: NAV_ITEM_TYPE_COLLAPSE,
    authority: [ADMIN],
    subMenu: [
      {
        key: "apps.expenseCategory",
        path: `${CONFIGURATION_PREFIX_PATH}/expense-category`,
        title: "Expense Category",
        icon: "expense",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN],
        subMenu: [],
      },
    ],
  },
];

export default configurationsNavigationConfig;
