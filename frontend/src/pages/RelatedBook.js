import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ENDPOINT = "http://localhost:4500/";
const RelatedBook = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()

    const detail = item.find((el) => {
        return el.isbn === id
    })

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
                        <div style={{width: '40%', margin: 'auto'}}>
                            <img style={{ width: '100%' }} src={detail?.thumbnailUrl} />
                        </div>
                        <div style={{ width: '100%' }}>
                            <h2>{detail?.title}</h2>
                        </div>
                    </div>
                    <div className={'shortDetail'}>
                        <h3>Short-Description</h3>
                        <p>{detail?.shortDescription}</p>
                    </div>
                    <div className={'longDetail'}>
                        <h3>Long-Description</h3>
                        <p>{detail?.longDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedBook