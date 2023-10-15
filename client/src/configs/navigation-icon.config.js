import {
  HiArchive,
  HiBadgeCheck,
  HiCurrencyRupee,
  HiDocumentText,
  HiPuzzle,
  HiSwitchHorizontal,
  HiTemplate,
} from "react-icons/hi";

const navigationIcon = {
  dashboard: <HiTemplate />,
  config: <HiPuzzle />,
  expense: <HiArchive />,
  income: <HiCurrencyRupee />,
  saving: <HiBadgeCheck />,
  reports: <HiDocumentText />,
  givetake: <HiSwitchHorizontal />,
};

export default navigationIcon;
