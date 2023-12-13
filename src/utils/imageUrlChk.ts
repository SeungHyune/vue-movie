export const imageUrlChk = (
  imageName: string,
  imagecheckName: string
): boolean => {
  if (imageName === imagecheckName) return true;
  return false;
};
