import { Song } from "@/types/Song";
import {
  X,
  Music,
  User,
  Disc,
  AudioWaveform,
  Info,
  Trash,
  Pencil,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ModalProps {
  song: Song;
  onClose: () => void;
}

const SongModal: React.FC<ModalProps> = ({ song, onClose }) => {
  return (
    <div
      className="fixed bg-foreground/80 transition all duration-300  top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-background rounded-xl p-4 flex flex-col relative items-center gap-y-2"
      >
        <X
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-primary text-white rounded-lg">
          {song.publishYear}
        </h2>
        <div className="flex justify-center items-center gap-x-2">
          <Music size={40} className="text-primary" />
          <h2 className="my-1 text-5xl">{song.title}</h2>
        </div>
        <div className="flex flex-col justify-start items-center gap-x-2">
          <User className="text-primary" />
          <h2 className="my-1 text-xl">{song.artist}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <Disc className="text-primary text-2xl" />
          <h2 className="my-1">{song.album}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <AudioWaveform className="text-primary text-2xl" />
          <h2 className="my-1">{song.genre}</h2>
        </div>
        <div className="flex gap-x-10">
          <Link to={`/songs/details/${song.id}`}>
            <Info className="text-2xl text-green-800 hover:text-black" />
          </Link>
          <Link to={`/songs/edit/${song.id}`}>
            <Pencil className="text-2xl text-yellow-600 hover:text-black" />
          </Link>
          <Link to={`/songs/delete/${song.id}`}>
            <Trash className="text-2xl text-red-600 hover:text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SongModal;
