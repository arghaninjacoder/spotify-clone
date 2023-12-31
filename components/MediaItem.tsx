"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import type { FC } from "react";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
  isTruncate?: boolean;
}

const MediaItem: FC<MediaItemProps> = ({
  data,
  onClick,
  isTruncate = false,
}) => {
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data?.id);
    }

    // TODO: default return on player
  };
  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800/50"
    >
      <div className="relative min-h-[48px] min-w-[48px] overflow-hidden rounded-md">
        <Image
          className="object-cover"
          fill
          src={imageUrl || "/images/liked.png"}
          alt="media Item"
        />
      </div>

      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{data.title}</p>
        <p className="text-sm text-neutral-400">
          {isTruncate ? `${data.author.substring(0, 10)}...` : data.author}
        </p>
      </div>
    </div>
  );
};
export default MediaItem;
