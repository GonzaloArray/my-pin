import Banner from '../assets/pixel_banner.webp'

interface Props {
  banner: string
}

export const BannerUser = ({banner}: Props) => {
  return (
    <div>
      <img
        src={banner ?? Banner}
        alt="Banner User"
        className="absolute border-b-2 border-blue-950 top-0 left-0 right-0 z-0"
      />
    </div>
  );
};
