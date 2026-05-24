const CLOUDINARY_UPLOAD_SEGMENT = "/image/upload/";
const DEFAULT_TRANSFORMS = "f_auto,q_auto,c_limit";

export const getCloudinaryImageUrl = (url: string, width: number) => {
  if (!url.includes(CLOUDINARY_UPLOAD_SEGMENT)) {
    return url;
  }

  return url.replace(
    CLOUDINARY_UPLOAD_SEGMENT,
    `${CLOUDINARY_UPLOAD_SEGMENT}${DEFAULT_TRANSFORMS},w_${width}/`
  );
};

export const getCloudinarySrcSet = (url: string, widths: number[]) => {
  if (!url.includes(CLOUDINARY_UPLOAD_SEGMENT)) {
    return undefined;
  }

  return widths
    .map((width) => `${getCloudinaryImageUrl(url, width)} ${width}w`)
    .join(", ");
};
