import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { getStatsFetch } from "@/slices/statSlice";
import { Stat } from "@/types/Stat";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Albums = () => {
  const dispatch = useDispatch();

  const stats = useSelector(
    (state: { stats: { stats: Stat } }) => state.stats.stats,
  );

  useEffect(() => {
    if (Object.keys(stats).length === 0) {
      dispatch(getStatsFetch());
    }
  }, [dispatch, stats]);

  return (
    <Container>
      {Object.keys(stats).length ? (
        <div>
          <h1 className="p-4 sm:px-6 lg:px-8 text-2xl font-bold">Albums</h1>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {stats.albums.data.map((album, i) => (
                  <div
                    key={i}
                    className=" outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
                  >
                    <Card className="rounded-lg border-2">
                      <CardContent className="pt-4">
                        <div className="flex items-center justify-center relative bg-foreground/5 dark:bg-background rounded-lg transition all duration-300 hover:scale-105">
                          <p className=" aspect-square object-cover rounded-lg  text-5xl">
                            {album._id.charAt(0).toUpperCase()}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex-col items-start">
                        <div>
                          <p className="font-semibold text-lg">{album._id}</p>
                          <p className="text-sm text-primary/80">
                            {album.songs} Songs
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </Container>
  );
};

export default Albums;
