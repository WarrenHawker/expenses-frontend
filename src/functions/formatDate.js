export function formatDate(dateString) {
  // Parse the dateString into a Date object
  const date = new Date(dateString);

  // Array of suffixes for day of the month
  const suffixes = ['th', 'st', 'nd', 'rd'];

  // Get day, month, and year from the Date object
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Determine the suffix for the day (e.g., "st" for 1st, "nd" for 2nd, etc.)
  let suffix;
  if (day >= 11 && day <= 13) {
    suffix = 'th'; // Special case for 11th to 13th
  } else {
    suffix = suffixes[day % 10] || 'th';
  }

  // Array of month names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Format the date as "24th July 2024" (for example)
  const formattedDate = `${day}${suffix} ${months[monthIndex]} ${year}`;

  return formattedDate;
}
