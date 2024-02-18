import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const DeleteSong = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const handleDeleteSong = () => {
    dispatch({ type: "DELETE_SONG", id: id });
    navigate("/");
  };

  return (
    <div className="p-4 flex-col items-center flex">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Song</h1>
      <div className="flex flex-col items-center border-2 border-primary/50 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You sure you want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteSong}
        >
          Yes, Delete it.
        </button>
      </div>
    </div>
  );
};

export default DeleteSong;
