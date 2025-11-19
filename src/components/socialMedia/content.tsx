import { Link } from "react-router-dom";

export default function SocialMedia(props: {
  urlSocialMedia: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
}) {
  const { urlSocialMedia, imgSrc, imgAlt, title } = props;
  return (
    <Link
      to={urlSocialMedia}
      className="flex gap-x-2 items-center grayscale-100 hover:grayscale-0"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        width={200}
        height={200}
        className="w-1/6"
      />
      <span>{title}</span>
    </Link>
  );
}
