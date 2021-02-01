import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { connect } from 'react-redux'

import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

// import contentAction from './actions/contenAction'
import { getContent } from '../actions/contentAction'

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }

    // fetchArticleDetails() {
    //     return function(dispatch) {
    //       return Axios.get('https://gateway.marvel.com/v1/public/comics/${id}?ts=1588223122&apikey=535527fdf2cb9d7c41e5b0e605430a0b&hash=f41c4e716bb0df47d61e34cef3122d64')
    //         .then(({ res }) => {
    //             this.props.getContent(res['data']['data'['results']])
    //       })
    //       .catch((err) => console.log(err))
    //     };
    //   }

    componentDidMount(){
        const id = this.props.match.params.id;
        Axios.get(`https://gateway.marvel.com/v1/public/comics/${id}?ts=1588223122&apikey=535527fdf2cb9d7c41e5b0e605430a0b&hash=f41c4e716bb0df47d61e34cef3122d64`)
        .then((res) => {
            disp
            // this.props.getContent(res['data']['data']['results'])
        })
        .catch((err) => console.log(err))
    
    }

    render() { 
        
        return ( 
           <div>
           <Link to='/' >
              <span>Back to Series</span>
           </Link>
                {this.state.data.map((item, index) => {
                const published = new Date(item.dates[0].date);
                return(
                    <GridListTile key={index}>

                    <div key={index}>
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.thumbnail.path}/>
                    </div> 
                    <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.creators.available <= 0
                    ? ""
                    : item.creators.items[0].name}
                </Typography>
                <Typography>{published.toDateString()}</Typography>
                <Typography>{`${item.creators.items[0].role} : ${item.creators.items[0].name}`}</Typography>
                <Typography>{`Description : ${item.description}`}</Typography>
                    </GridListTile>
                )
            })}
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        content: null
    }
}
 
export default connect(mapStateToProps, { getContent })(DetailPage)