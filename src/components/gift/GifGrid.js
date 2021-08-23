import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';





export const GifGrid = ({ category }) => {
 
   const { data:images, loading } = useFetchGifs(category);
  
 return (
        <div>
          <Typography variant="h3"
           gutterBottom
           align="center"
           color="primary"
           >
        {category}
      </Typography>
      <Typography variant="h4"
          color="primary"
           >
       
        {loading && <p>Loading...</p>}
      </Typography>
         
        <Grid container spacing={3}>
        {images.map(img => (
  
          <GifGriditem 
            key={ img.id }
            {...img}
          />
          
        ))}
        </Grid>
        </div>
    )
}

GifGrid.propTypes = {
category: PropTypes.string.isRequired
}

