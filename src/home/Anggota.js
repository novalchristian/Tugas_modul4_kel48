import React, {useState} from 'react'
import ListNama from './ListNama'

let data = [
  {nama: "Maulana Ilham Mudhin Ghozali", nim: "21120118120018", kelompok:"11", key:1},
  {nama: "Noval Christian Bagariang", nim: "21120118130060", kelompok:"11", key:2}
]

export default function Counter(props) {
  const [listNama, setListNama] = useState(false)

  const onClickNo = () => {
    setListNama(false)
    alert('Baiklah Kawan')
  }

  const onClickYes = () => {
    setListNama(true)
  }

  return (
    <div>
        <h2 style={{textAlign:"center"}}>
          Apakah anda ingin mengetahui anggota kelompok kami?
        </h2>
        <div style={{display:"block", textAlign:"center"}}>
          <button style={{marginRight:10, padding:10, backgroundColor:"red", color:"white", borderRadius:5}} onClick={onClickNo}>No</button>
          <button style={{padding:10, backgroundColor:"green", color:"white", borderRadius:5}} onClick={onClickYes}>Yes</button>
          {listNama && <ListNama data={data} />}
        </div>
      </div>
  )
}
