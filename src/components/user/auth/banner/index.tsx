import { UserAuthBannerImage } from "./styles";

const UserAuthBanner = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <UserAuthBannerImage role="presentation" {...props} />;
};

export default UserAuthBanner;
