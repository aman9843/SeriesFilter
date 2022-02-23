import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';

const BootcardCamp = ({bootcamp}) => {
  
  return (
    <div>
        <Card>
            <CardHeader
              avatar= {<Avatar />}
              title={<Typography variant="h6">{bootcamp.name}</Typography>}
            />
            <CardContent>

            <Typography variant='caption'>{bootcamp.description}</Typography>
            <Typography variant='h6'gutterBottom>{bootcamp.price}</Typography>


            <Rating

            value={bootcamp.rating}
            readOnly
            name={bootcamp.name}
            size="small"
            precision={0.5}
            
            
            />

            </CardContent>
            <CardActions>
                <Button variant='contained' size='small' color='primary'>Review</Button>
                <Button size="small" color='primary'>Watch</Button>
            </CardActions>

            
        </Card>
    </div>
  )
}

export default BootcardCamp