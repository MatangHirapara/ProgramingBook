import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import './detail.css'
import { useNavigate } from 'react-router-dom';

const ENDPOINT = "http://localhost:4500/";
const ListPage = () => {
    const [searchItem, setSearchItem] = useState("");
    const [item, setItem] = useState([])

    const navigate = useNavigate()

    const fetchData = () => {
        fetch(`${ENDPOINT}item`)
            .then((res) => res.json())
            .then((data) => setItem((prv) => prv.concat(data)))
    };

    const fetchLength = () => {
        setTimeout(() => {
            fetchData()
        }, 100)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className='searchBar'>
                <input
                    type="text"
                    placeholder='search isbn no...'
                    className='textFiled'
                    onChange={(e) => setSearchItem(e.target.value)}
                />
            </div>
            <InfiniteScroll
                dataLength={item.length}
                next={fetchLength}
                hasMore={true}
                loader={searchItem ? <h4>Loading...</h4> : <h2>Please search the book...</h2>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >

                {(searchItem && searchItem.length > 2) &&
                    item.filter((val) => {
                        if (searchItem === "") {
                            return val;
                        } else if (parseInt(val.isbn).toString().toLowerCase().includes(searchItem?.toLowerCase())) {
                            return val;
                        }
                    })
                        .map((val, key) => {
                            return (
                                <Card sx={{ width: "15rem", marginTop: "2rem" }} key={key}>
                                    <CardContent onClick={() => navigate(`/detail/${val.isbn}`)}>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                                            {val.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                                            {val.isbn}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            );
                        })}
            </InfiniteScroll>
        </div>
    )
}

export default ListPage