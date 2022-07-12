export const parseDate = (date: string) => {
  return Intl.DateTimeFormat().format(new Date(date));
};

export const stringToDate = (date: string): string => {
  if (!date) {
    return "";
  }
  const fromDate = new Date(date);
  return (
    fromDate.getFullYear() +
    "-" +
    (fromDate.getMonth() + 1) +
    "-" +
    fromDate.getDate()
  );
};

export const parsePhoneNumber = (phone: string) => {
  if (!phone) {
    return "";
  }
  return phone.replace(
    /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
    "+$1 ($2) $3-$4-$5"
  );
};
