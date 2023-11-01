import Banner from '../assets/pixel_banner.webp'

export const BannerUser = () => {
  return (
    <div>
      <img
        src={Banner}
        alt="Banner User"
        className="absolute border-b-2 border-blue-950 top-0 left-0 right-0 z-0"
      />
    </div>
  );
};
