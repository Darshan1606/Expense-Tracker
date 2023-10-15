import dashboardNavigationConfig from "./dashboard.Navigation.Config";
import configurationsNavigationConfig from "./configurations.Navigation.Config";
import expenseNavigationConfig from "./expense.Navigation.Config";
import savingNavigationConfig from "./saving.Navigation.Config";
import incomeNavigationConfig from "./income.Navigation.Config";
import givetakeNavigationConfig from "./givetake.Navigation.Config";
import reportsNavigationConfig from "./reports.Nabigation.Config";

const navigationConfig = [
  ...dashboardNavigationConfig,
  ...expenseNavigationConfig,
  ...incomeNavigationConfig,
  ...savingNavigationConfig,
  ...givetakeNavigationConfig,
  ...reportsNavigationConfig,
  ...configurationsNavigationConfig,
];

export default navigationConfig;
