import React from 'react'


function listNama(props) {
    return (
        <>
            <div>
                <h2>Anggota Kelompok</h2>
            </div>
            <div>
                {props.data.map((data) => (
                        <h3 key={data.key}>{data.nama}<br/>{data.nim}<br/> Kelompok {data.kelompok}</h3>
                ))}
            </div>
        </>
    )
}

export default listNama
