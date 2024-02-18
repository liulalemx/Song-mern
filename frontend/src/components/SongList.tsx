import SongCard from "./SongCard";
import { Song } from "@/types/Song";

interface SongListProps {
  items: Song[];
}

const SongList: React.FC<SongListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <SongCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SongList;
