import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import { Box, CircularProgress, Typography, Button, Paper } from '@mui/material'; 

const SingleProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [product, setProduct] = useState<any>(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`) 
            .then((res) => {
                setProduct(res.data); 
                setLoading(false); 
            })
            .catch((err) => {
                console.log(err);
                setLoading(false); 
            });
    }, [id]); 

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box padding={2} maxWidth="800px" margin="0 auto">
            {product ? ( 
                <>
                    <Button
                        variant="contained"
                        onClick={() => navigate(-1)}
                        style={{ marginBottom: '20px' }}
                    >
                        Go Back
                    </Button>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h4" marginTop={2} gutterBottom>{product.title}</Typography> 
                        <Box display="flex" justifyContent="center">
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', marginTop: '20px' }}
                            /> 
                        </Box>
                        <Typography variant="h6" marginTop={2}>Price: ${product.price}</Typography>
                        <Typography variant="body1" marginTop={2}>{product.description}</Typography>
                        <Typography variant="body2" marginTop={2}>Category: {product.category}</Typography>
                    </Paper>
                </>
            ) : (
                <Typography variant="h6">Product not found</Typography> 
            )}
        </Box>
    );
};

export default SingleProduct;
