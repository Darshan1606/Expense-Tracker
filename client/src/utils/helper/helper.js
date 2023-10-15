// set date format YYYY-MM-DD
export const formatDateInYYYYMMDD = (givenDate) => {
  const inputDate = new Date(givenDate);
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

// count months between two dates
export function countMonthsBetweenDates(startDate) {
  startDate = new Date(startDate);
  const endDate = new Date();

  // Calculate the difference in years and months
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  // Calculate the total number of months
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

  return totalMonths;
}

// convert date to DD, MMM YYYY format
export function formatDateToDDMMMYYYY(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Parse the input date string into a Date object
  const date = new Date(inputDate);

  // Extract day, month, and year components
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Format the date
  const formattedDate = `${day}, ${month} ${year}`;

  return formattedDate;
}

// calculate total hour and minutes
export function calculateHourAndMinutes(hours, minutes) {
  // Calculate the total minutes
  let totalMinutes = hours * 60 + minutes;

  // Calculate hours and minutes
  let formattedHours = Math.floor(totalMinutes / 60);
  let formattedMinutes = totalMinutes % 60;

  // Convert to HH:MM format
  let formattedTime =
    formattedHours.toString().padStart(2, "0") +
    ":" +
    formattedMinutes.toString().padStart(2, "0");

  return formattedTime;
}
