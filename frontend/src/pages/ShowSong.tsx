import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import { Song } from "@/types/Song"

const ShowSong = () => {
  const [song, setSong] = useState<Song>()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)

    axios
      .get(`${import.meta.env.VITE_API_URL}/v1/songs/${id}`)
      .then((response) => {
        setSong(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [id])

  return (
    <div className="p-4 flex flex-col items-center">
      <BackButton />
      <h1 className="text-3xl my-4">Song Details</h1>
      {loading ? (
        <p>...</p>
      ) : (
        <div className="flex flex-col border-2 border-primary/50 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{song!.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Artist</span>
            <span>{song!.artist}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Album</span>
            <span>{song!.album}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Genre</span>
            <span>{song!.genre}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{song!.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(song!.createdAt!).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(song!.updatedAt!).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowSong
