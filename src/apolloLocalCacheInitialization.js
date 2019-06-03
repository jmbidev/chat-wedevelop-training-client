const LOCAL_STORAGE_CACHE_INITIALIZED_KEY = 'WEDEVELOP-TRAINING-CHAT-CACHE-INITIALIZED'

const INITIAL_CACHE_DATA = {
  userAccessToken: null
}

export default (cache) => {
  if (!isCacheInitialized()) {
    writeInitialCacheData(cache)
    setCacheInitialized()
  }
}

function isCacheInitialized () {
  return window.localStorage.getItem(LOCAL_STORAGE_CACHE_INITIALIZED_KEY) !== null
}

function writeInitialCacheData (cache) {
  cache.writeData({ data: INITIAL_CACHE_DATA })
}

function setCacheInitialized () {
  window.localStorage.setItem(LOCAL_STORAGE_CACHE_INITIALIZED_KEY, 'true')
}
