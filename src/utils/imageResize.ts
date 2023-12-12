export const ImageResize = (url: string, size: string, reSize: string) => {
  if (url) {
    return url.replace(size, reSize);
  }
};
