import React,{Component} from 'react';
import {RoomContext} from '../context';
import Room from './Room';
import {Grid,createMuiTheme,ThemeProvider} from '@material-ui/core';
import Loading from './Loading';
import Title from './Title';
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
                    <Title title="Featured Rooms"/>
                    {loading?<Loading/>:rooms}
                </Grid>
            </ThemeProvider>
        )
    }
};

export default FeaturedRooms; 