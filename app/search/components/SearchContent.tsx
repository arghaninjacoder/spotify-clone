"use client";

import LikedButton from "@/components/LikedButton";
import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import type { FC } from "react";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0)
    return (
      <div className="flex w-full flex-col gap-y-2 px-6 text-neutral-400">
        No songs found.
      </div>
    );
  return (
    <div className="flex w-full flex-col gap-y-2 px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex w-full items-center gap-x-4">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          <LikedButton songId={song?.id} />
        </div>

        // TODO: add like button here
      ))}
    </div>
  );
};
export default SearchContent;
