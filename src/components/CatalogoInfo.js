import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    
    root: {
      maxWidth: 445,
      padding: 30,
      margin: '60px auto',
      
    },
  });

function CatalogoInfo({ name, image, price, currency_id, available_quantity, condition  }){

    const classes = useStyles();

    return(
        // construccion de la card
        
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia component="img" height="240" image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >Producto: {name}</Typography>
                <Typography component='p' variant='p' color='textPrimary' >Precio: ${price}</Typography>
                <Typography component='p' variant='p' color='textPrimary' >Moneda: {currency_id}</Typography>
                <Typography component='p' variant='p' color='textPrimary' >Cantidad disponible: {available_quantity}</Typography>
                <Typography component='p' variant='p' color='textPrimary' >Condicion: {condition}</Typography>
                
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" href="#contained-buttons">
                <Link to='/'>
                    Volver
                    </Link>
                </Button>
            </CardActions>           
        </Card>
    );
}

export default CatalogoInfo;