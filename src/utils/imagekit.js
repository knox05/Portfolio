const BASE_URL = "https://ik.imagekit.io/n4vls6fyzk/Portfolio/";

export const getImage = (
  path,
  {
    width = 400,
    height,
    quality = 60,
    format = "webp",
    crop = "at_max",
  } = {}
) => {
  let url = `${BASE_URL}${path}?tr=w-${width},q-${quality},f-${format}`;

  if (height) {
    url += `,h-${height},c-${crop}`;
  }

  return url;
};