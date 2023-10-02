import React from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";





export const GifGriditem = ({ title, url }) => {



  return (
    <Grid item xs={12}  sm={6} md={4} lg={3}>
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="300"
        image={url}
      />
      <CardContent>
        <Typography variant="h6"
          color="primary"
          align="center"
        >
          <p> {title}</p>
        </Typography>
      </CardContent>
    </Card>
    </Grid>

  )
}



GifGriditem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}