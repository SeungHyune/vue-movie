export const imageResize = (url: string, size: string, reSize: string) => {
  if (url) {
    return url.replace(size, reSize);
  }
};
