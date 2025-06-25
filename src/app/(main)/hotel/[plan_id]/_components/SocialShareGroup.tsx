"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "next-share";

type ShareProps = {
  id: string;
  title: string;
  description?: string;
  proposer?: string;
  restaurantType?: string;
  location?: string;
};

const SocialShareGroup = ({ id, title, description, proposer, restaurantType, location }: ShareProps) => {
  const url = `https://staymi.vercel.app/hotel/${id}`;
  const hashtag = `#Stay-Mi #${title} #${proposer} #${restaurantType} #${location}`;

  return (
    <div className="mb-2">
      <p className="text-muted-foreground mb-2 text-sm">分享這間飯店</p>
      <ul className="flex gap-3">
        <li>
          <FacebookShareButton url={url} quote={description} hashtag={hashtag}>
            <span title="分享到 Facebook">
              <FacebookIcon size={32} round />
            </span>
          </FacebookShareButton>
        </li>
        <li>
          <LineShareButton url={url} title={title}>
            <span title="分享到 LINE">
              <LineIcon size={32} round />
            </span>
          </LineShareButton>
        </li>
        <li>
          <TwitterShareButton url={url} title={title}>
            <span title="分享到 Twitter">
              <TwitterIcon size={32} round />
            </span>
          </TwitterShareButton>
        </li>
      </ul>
    </div>
  );
};

export default SocialShareGroup;
