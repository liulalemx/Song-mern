import { call, put, takeEvery } from "redux-saga/effects"
import { getStats } from "./slices/statSlice"
import axios from "axios"
import { Stat } from "./types/Stat"

function* getStatsSaga() {
  const stats: Stat = yield call(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/v1/stats`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  })
  yield put(getStats(stats))
}

function* statsSaga() {
  yield takeEvery("stats/getStatsFetch", getStatsSaga)
}

export default statsSaga
