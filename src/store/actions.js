import * as types from './mutation-types'
import { shuffle } from 'common/js/util'
import { playMode } from 'common/js/config'

function findIndex (list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export const selectPlay = function ({ commit, state }, { songs, index }) {
  commit(types.SET_SEQUENCE_LIST, songs)
  if (state.playMode === playMode.shuffle) {
    let randomList = shuffle(songs)
    commit(types.SET_PLAYLIST, randomList)
    index = findIndex(randomList, songs[index])
  } else {
    commit(types.SET_PLAYLIST, songs)
  }
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = function ({commit}, { songs }) {
  commit(types.SET_PLAY_MODE, playMode.shuffle)
  commit(types.SET_SEQUENCE_LIST, songs)
  let randomList = shuffle(songs)
  commit(types.SET_PLAYLIST, randomList)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}
