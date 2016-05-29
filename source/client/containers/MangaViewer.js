import React from 'react'

import MangaViewer from '../components/MangaViewer'

const pages = ["/system/chapters/47/001", "/system/chapters/47/002", "/system/chapters/47/003", "/system/chapters/47/004", "/system/chapters/47/005", "/system/chapters/47/006", "/system/chapters/47/007", "/system/chapters/47/008", "/system/chapters/47/009", "/system/chapters/47/010", "/system/chapters/47/011", "/system/chapters/47/012", "/system/chapters/47/013", "/system/chapters/47/014", "/system/chapters/47/015", "/system/chapters/47/016", "/system/chapters/47/017", "/system/chapters/47/018", "/system/chapters/47/019", "/system/chapters/47/020", "/system/chapters/47/021", "/system/chapters/47/022", "/system/chapters/47/023", "/system/chapters/47/024", "/system/chapters/47/025", "/system/chapters/47/026", "/system/chapters/47/027", "/system/chapters/47/028", "/system/chapters/47/029", "/system/chapters/47/030", "/system/chapters/47/031", "/system/chapters/47/032", "/system/chapters/47/033", "/system/chapters/47/034"]

export default ({ routeParams }) => (
  <MangaViewer pages={pages} />
)
