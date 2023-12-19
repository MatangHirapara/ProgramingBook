import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import { columns } from '../utils/TableColumn';


const ENDPOINT = "http://localhost:4500/";
let selectDetail

const DetailPage = () => {

  const [item, setItem] = useState([])
  const { id } = useParams()

  const detail = item.find((el) => {
    return el.isbn === id
  })
  const getCatg = detail?.categories.map((number) => ({ number }))

  const xyz = getCatg?.map((el) => (
    selectDetail = item.filter((item) => {
      const name = item.title.split(" ")
      return el.number === name.find((item) => item)
    })
  ))
  console.log('xyz', xyz)

  const fetchDeta = () => {
    fetch(`${ENDPOINT}item`)
      .then((res) => res.json())
      .then((data) => setItem(data))
  }

  useEffect(() => {
    fetchDeta()
  }, [])

  

  return (
    <div className="detail">
      <div className='right-container'>
        <h1 className='titleName'>Detail</h1>
        <div className='getDetail'>
          <div className='image'>
            <img style={{ width: '100%' }} src={detail?.thumbnailUrl} />
          </div>
          <div className={'shortDetail'}>
            <h3>Short-Description</h3>
            <p>{detail?.shortDescription}</p>
          </div>
          <div className={'longDetail'}>
            <h3>Long-Description</h3>
            <p>{detail?.longDescription}</p>
          </div>
          <div className='category'>
            <h3 style={{ textAlign: 'center' }}>Categories</h3>
            <ul className='categoryStore'>
              {getCatg?.map((el, index) => {
                return (
                  <li className='categoryList' key={index}>{el.number}</li>
                )
              })}
            </ul>
          </div>
          <div className={'relatedNote'}>
            <h3 style={{ textAlign: 'center' }} className='relatedTitle'>Related-Books-Lists</h3>
            <div className='dataTable'>
              <DataTable
                columns={columns}
                data={selectDetail}
              />
            </div>
            {/* <div>
              {selectDetail?.map((data) => {
                return (
                  <div className='booksList'>
                    <div style={{ width: '10%', margin: 'auto' }}>
                      <img style={{ width: '100%' }} src={data?.thumbnailUrl || ""} />
                    </div>
                    <div className='bookDet'>
                      <h3 style={{ textAlign: 'center' }}>{data?.title}</h3>
                      <p style={{ textAlign: 'center' }}>{data?.shortDescription}</p>
                    </div>
                  </div>
                )
              })}
            </div> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default DetailPage