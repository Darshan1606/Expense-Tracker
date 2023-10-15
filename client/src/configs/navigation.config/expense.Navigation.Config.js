import { EXPENSE_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const expenseNavigationConfig = [
  {
    key: "apps.expense",
    path: `${EXPENSE_PREFIX_PATH}`,
    title: "Expense",
    icon: "expense",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default expenseNavigationConfig;
