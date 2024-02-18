import { Card, CardContent, CardFooter } from "./ui/card";
import { Song } from "@/types/Song";
import { useState } from "react";
import SongModal from "./SongModal";

interface SongCardProps {
  data: Song;
}

const SongCard: React.FC<SongCardProps> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div onClick={() => setShowModal(true)}>
      <div className=" outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
        <Card className="rounded-lg border-2">
          <CardContent className="pt-4">
            <div className="flex items-center justify-center relative bg-foreground/5 dark:bg-background rounded-lg transition all duration-300 hover:scale-105">
              <p className=" aspect-square object-cover rounded-lg  text-5xl">
                {data.title.charAt(0).toUpperCase()}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="font-semibold text-lg">
                {data.title.toUpperCase()}
              </p>
              <p className="text-sm text-primary/80">{data.artist}</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      {showModal && (
        <SongModal song={data} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default SongCard;
