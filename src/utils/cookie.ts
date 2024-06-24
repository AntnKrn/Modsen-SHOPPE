export const getCookieByName = (cookieName: string): string => {
  const cookiesArray = document.cookie.split('; ');
  const keysAndValuesOfCookieArray = cookiesArray.map((item) =>
    item.split('='),
  );
  const indexOfCookieName = keysAndValuesOfCookieArray.findIndex(
    (item) => item[0] === cookieName,
  );
  if (!keysAndValuesOfCookieArray[indexOfCookieName]) return null;

  return keysAndValuesOfCookieArray[indexOfCookieName][1];
};

export const clearCookieByName = (cookieName: string): void => {
  document.cookie =
    cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
