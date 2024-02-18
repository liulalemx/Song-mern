import { useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CreateSongs = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [publishYear, setPublishYear] = useState("");

  const navigate = useNavigate();
  const handleSaveSong = () => {
    const data = {
      title,
      artist,
      album,
      genre,
      publishYear: parseInt(publishYear),
    };
    dispatch({ type: "CREATE_SONG", data: data });
    navigate("/");
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <BackButton />
      <h1 className="text-3xl my-4">Create Song</h1>
      <div className="flex flex-col border-2 border-primary/50 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my4">
          <label className="text-xl mr-4 text-gray-500">Artist</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my4">
          <label className="text-xl mr-4 text-gray-500">Album</label>
          <input
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my4">
          <label className="text-xl mr-4 text-gray-500">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-primary m-8 text-background font-bold"
          onClick={handleSaveSong}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateSongs;
