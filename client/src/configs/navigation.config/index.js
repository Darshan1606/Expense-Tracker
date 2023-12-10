import dashboardNavigationConfig from "./dashboard.Navigation.Config";
import configurationsNavigationConfig from "./configurations.Navigation.Config";
import expenseNavigationConfig from "./expense.Navigation.Config";
import incomeNavigationConfig from "./income.Navigation.Config";
import givetakeNavigationConfig from "./givetake.Navigation.Config";

const navigationConfig = [
  ...dashboardNavigationConfig,
  ...expenseNavigationConfig,
  ...incomeNavigationConfig,
  ...givetakeNavigationConfig,
  ...configurationsNavigationConfig,
];

export default navigationConfig;
