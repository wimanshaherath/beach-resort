import React,{Component} from 'react';
import {RoomContext} from '../context';
import Room from './Room';
import {Grid,Typography,createMuiTheme,ThemeProvider} from '@material-ui/core';

type Props={

};

type State={

};

const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiGrid: {
        // Name of the rule
        container:{
            // paddingTop:'.2rem',
            boxShadow:'none'
        }
      },
    },
  });
  

class FeaturedRooms extends Component<Props,State>{
    static contextType = RoomContext;
    render(){
        let {featuredRooms: rooms}=this.context;
        rooms = rooms.map((room:any) => {
            return <Grid item md={4} sm={6} xs={12} justify="center" alignItems="center" ><Room key={room.id} room={room}/></Grid>
        });

        return(
            <ThemeProvider theme={theme}>
                <Grid container>
                    <Grid item md={12} sm={12} justify="center" alignItems="center" spacing={4}>
                        <Typography variant="h4" component="h4" align="center">
                            Featured Rooms
                        </Typography>
                    </Grid>
                    {rooms}
                </Grid>
            </ThemeProvider>
        )
    }
};

export default FeaturedRooms; 