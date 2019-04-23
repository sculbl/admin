let httpRequestList = []
export default httpRequestList

export const clearHttpRequestingList = () => {
  if (httpRequestList.length > 0) {
    httpRequestList.map((item) => {
      for (let key in item) {
        item[key]()
      }
    })
    httpRequestList = []
  }
}
