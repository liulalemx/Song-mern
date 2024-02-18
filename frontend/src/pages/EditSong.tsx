import { useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "../types/Song";

const EditSong = () => {
  const { id } = useParams();

  const songs = useSelector(
    (state: { songs: { songs: Song[] } }) => state.songs.songs,
  );
  const song: Song = songs.find((s: Song) => s.id === id) as Song;

  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [genre, setGenre] = useState(song.genre);
  const [publishYear, setPublishYear] = useState(song.publishYear);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditSong = () => {
    const data = {
      title,
      artist,
      album,
      genre,
      publishYear,
    };

    dispatch({ type: "UPDATE_SONG", data: data, id: id });
    navigate("/");
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Song</h1>
      <div className="flex flex-col border-2 border-primary/50 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my4">
          <label className="text-xl mr-4 text-foreground">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my4">
          <label className="text-xl mr-4 text-foreground">Author</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my4">
          <label className="text-xl mr-4 text-foreground">Author</label>
          <input
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my4">
          <label className="text-xl mr-4 text-foreground">Author</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my4">
          <label className="text-xl mr-4 text-foreground">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(parseInt(e.target.value))}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-primary m-8 text-background font-bold"
          onClick={handleEditSong}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditSong;
