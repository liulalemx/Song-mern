import { call, put, takeEvery } from "redux-saga/effects"
import { getSongs, addSong, updateSong, deleteSong } from "./slices/songSlice"
import axios from "axios"
import { Song } from "./types/Song"

function* getSongsSaga() {
  const songs: Song[] = yield call(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/v1/songs`
      )
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  })
  yield put(getSongs(songs))
}

function* createSongSaga(action: { data: Song }) {
  const createdSong: Song = yield call(async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/v1/songs`,
        action.data
      )
      return res.data
    } catch (error) {
      console.log(error)
    }
  })

  yield put(
    addSong({
      id: createdSong._id,
      title: createdSong.title,
      artist: createdSong.artist,
      album: createdSong.album,
      genre: createdSong.genre,
      publishYear: createdSong.publishYear,
    })
  )
}

function* updateSongSaga(action: { data: Song; id: string }) {
  const updatedSong: { message: string; data: Song } = yield call(async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/v1/songs/${action.id}`,
        action.data
      )
      return res.data
    } catch (error) {
      console.log(error)
    }
  })
  yield put(updateSong(updatedSong.data))
}

function* deleteSongSaga(action: { id: string }) {
  const deletedSong: Song = yield call(async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/v1/songs/${action.id}`
      )
      return res.data.data
    } catch (error) {
      console.log(error)
    }
  })
  yield put(deleteSong({ id: deletedSong._id }))
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", getSongsSaga)
  yield takeEvery("CREATE_SONG", createSongSaga)
  yield takeEvery("UPDATE_SONG", updateSongSaga)
  yield takeEvery("DELETE_SONG", deleteSongSaga)
}

export default songSaga
