import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch } from "../slices/songSlice";
import { getStatsFetch } from "@/slices/statSlice";
import { Song } from "../types/Song";
import Container from "@/components/ui/container";
import SongList from "@/components/SongList";
import Loading from "@/components/Loading";
import StatsCard from "@/components/StatsCard";
import { Stat } from "@/types/Stat";

const Home = () => {
  const dispatch = useDispatch();
  const songs = useSelector(
    (state: { songs: { songs: Song[] } }) => state.songs.songs,
  );
  const isLoading = useSelector(
    (state: { songs: { isLoading: boolean } }) => state.songs.isLoading,
  );
  const stats = useSelector(
    (state: { stats: { stats: Stat } }) => state.stats.stats,
  );

  useEffect(() => {
    if (songs.length === 0) {
      dispatch(getSongsFetch());
      dispatch(getStatsFetch());
    }
  }, [dispatch, songs.length]);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/hero-image.png)` }}
            className="rounded-2xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center max-h-[25vh] w-full"
          >
            <div className="h-full w-full flex justify-center items-center text-center gap-x-8 px-4">
              <div className="flex flex-col justify-center text-left gap-y-2 text-white">
                <p className="text-xl font-medium">Your Playlist</p>
                <h1 className="text-4xl font-bold">Statistics</h1>
                <p className="text-lg text-wrap">
                  Enjoy vivid emotions with this stunning music collection.
                  <br /> Each song is a story.
                </p>
              </div>
              {Object.keys(stats).length ? (
                <div className="p-2 flex flex-col gap-y-4 flex-grow items-center">
                  <div className="flex gap-x-4">
                    <StatsCard name="Songs" amount={songs.length} />
                    <StatsCard name="Albums" amount={stats.albums.amount} />
                  </div>
                  <div className="flex gap-x-4">
                    <StatsCard name="Artists" amount={stats.artists.amount} />
                    <StatsCard name="Genres" amount={stats.genres.amount} />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <SongList items={songs} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
