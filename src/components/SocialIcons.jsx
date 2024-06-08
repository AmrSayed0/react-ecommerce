import {
  RiDribbbleFill,
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 pr-4">
      <Link
        to="/"
        className="text-[#08d9d6] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiYoutubeFill />
      </Link>
      <Link
        to="/"
        className="text-[#ff7675] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiInstagramFill />
      </Link>
      <Link
        to="/"
        className="text-[#98eaec] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiTwitterXFill />
      </Link>
      <Link
        to="/"
        className="text-[#504eebfa] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiFacebookFill />
      </Link>
      <Link
        to="/"
        className="text-[#00a8cc] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        to="/"
        className="text-[#d2ea4c] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiDribbbleFill />
      </Link>
      <Link
        to="/"
        className="text-[#6e5494] text-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default SocialIcons;
