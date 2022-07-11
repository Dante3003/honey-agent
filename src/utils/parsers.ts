export const parseDate = (date: string) => {
  return Intl.DateTimeFormat().format(new Date(date));
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
