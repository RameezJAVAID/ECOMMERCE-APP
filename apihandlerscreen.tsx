import React, { useState } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import BAGrid from '../components/BGrid';
import CircularProgress from '@mui/material/CircularProgress';



export default function ApiHandlerScreen() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);

    const getApiData = () => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res, "Success Response")
                setData([...res.data]);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const postApiData = () => {

        axios.post('https://jsonplaceholder.typicode.com/todos', {
            userId: 1,
            title: 'ABC title',
            completed: true
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })

    };


    const putApiData = () => {

        axios.put('https://jsonplaceholder.typicode.com/todos/1', {
            userId: 1,
            title: 'XYZ title edit',
            completed: false
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })

    };

    const deleteApiData = () => {
        axios.delete('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })

    };


    return (
        <Box style={{textAlign:"center"}}>
            <Button  variant="contained" onClick={getApiData} disabled={loading}><PublicIcon />Show Products</Button>
            {/* <Button variant="contained" onClick={postApiData} disabled={loading}><PublicIcon />POST Api</Button>
            <Button variant="contained" onClick={putApiData} disabled={loading}><PublicIcon />Put Api</Button>
            <Button variant="contained" onClick={deleteApiData} disabled={loading}><PublicIcon />Delete Api</Button> */}

            <BAGrid

                gridCols={[
                    {
                        key: 'title',
                        label: 'Product Title'
                    },
                    {
                        key: 'price',
                        label: 'Product Price'
                    },
                    {
                        key: 'category',
                        label: 'Product category'
                    },


                    // {
                    //     key: '',
                    //     label: 'Delete',
                    //     displayField: (row: any) => <Button onClick={() => {
                    //         console.log(row)
                    //     }} variant="contained">Delete</Button>
                    // },
                ]} datasource={data} />

            {loading && <CircularProgress style={{ marginTop: 20}} />}

        </Box>
    );
}

