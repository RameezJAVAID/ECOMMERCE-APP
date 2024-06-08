import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'; 
type PropsType = {
    datasource: any[], 
    gridCols: {
        key: string,
        label: string,
        displayField?: any
    }[]
}

export default function BAGrid(props: PropsType) {
    const { datasource, gridCols } = props; 
    const navigate = useNavigate(); 

    return (
        <Grid container spacing={3}>
            {datasource.map((row, rowIndex) => (
                <Grid item xs={12} sm={6} md={4} key={rowIndex} onClick={() => navigate(`/products/${row.id}`)}>
                    <Card
                        style={{
                            height:"400px",
                            cursor: 'pointer', 
                            transition: 'transform 0.2s', 
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            marginBottom:'40px',
                            marginTop:'40px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                    >
                        <CardMedia
                            component="img"
                            height="200" 
                            image={row['image']}
                            alt="Product Image"
                            style={{
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px'
                            }}
                        />
                        <CardContent
                            style={{
                                padding: '10px' 
                            }}
                        >
                            {gridCols.map((col, colIndex) => (
                                <div key={colIndex} style={{ marginBottom: '8px' }}>
                                    <Typography variant="body1" gutterBottom>
                                        {col.displayField ? col.displayField(row) : row[col.key]} 
                                    </Typography>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
