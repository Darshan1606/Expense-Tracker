import React from "react";
import {
  CONFIGURATION_PREFIX_PATH,
  DASHBOARD_PREFIX_PATH,
  EXPENSE_PREFIX_PATH,
  GIVETAKE_PREFIX_PATH,
  INCOME_PREFIX_PATH,
  SAVING_PREFIX_PATH,
} from "constants/route.constant";
import { ADMIN } from "constants/roles.constant";

const appsRoute = [
  {
    key: "apps.dashboard",
    path: `${DASHBOARD_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Dashboard")),
    authority: [ADMIN],
  },
  {
    key: "apps.expense",
    path: `${EXPENSE_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Expense")),
    authority: [ADMIN],
  },
  {
    key: "apps.saving",
    path: `${SAVING_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Saving")),
    authority: [ADMIN],
  },
  {
    key: "apps.income",
    path: `${INCOME_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Income")),
    authority: [ADMIN],
  },
  {
    key: "apps.givetake",
    path: `${GIVETAKE_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Income")),
    authority: [ADMIN],
  },
  {
    key: "apps.expenseCategory",
    path: `${CONFIGURATION_PREFIX_PATH}/expense-category`,
    component: React.lazy(() => import("views/Configurations/ExpenseCategory")),
    authority: [ADMIN],
  },
];

export default appsRoute;
