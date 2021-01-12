import React,{Component} from 'react';
import {RoomContext} from '../context';
import Room from './Room';
import {Grid,Typography,createMuiTheme,ThemeProvider} from '@material-ui/core';
import Loading from './Loading';
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
        let {loading,featuredRooms: rooms}=this.context;
        rooms = rooms.map((room:any) => {
            return <Grid item md={4} sm={6} xs={12} key={room.id}><Room room={room}/></Grid>
        });

        return(
            <ThemeProvider theme={theme}>
                <Grid container>
                    <Grid item md={12} sm={12}>
                        <Typography variant="h4" component="h4" align="center">
                            Featured Rooms
                        </Typography>
                    </Grid>
                    {loading?<Loading/>:rooms}
                </Grid>
            </ThemeProvider>
        )
    }
};

export default FeaturedRooms; 