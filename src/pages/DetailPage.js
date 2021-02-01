import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
import { Container } from '@material-ui/core';

import { getContentDetail } from "../actions";
import { findByLabelText } from "@testing-library/react";

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
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

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(
      `https://gateway.marvel.com/v1/public/comics/${id}?ts=1588223122&apikey=535527fdf2cb9d7c41e5b0e605430a0b&hash=f41c4e716bb0df47d61e34cef3122d64`
    )
      .then((res) => {
        console.log(res["data"]["data"]["results"]);
        // this.props.getContent(res['data']['data']['results'])
        this.props.getContentDetail(res["data"]["data"]["results"]);
      })
      .catch((err) => console.log(err));
  }

  render() {
      console.log(this.props.contentDetail)
      console.log(this.props.contentDetail ? this.props.contentDetail[0].creators.items[0].role : '')
    return (
      <div>
        <Link to="/">
          <span>Back to Series</span>
        </Link>
        {this.props.contentDetail.map((item, index) => {
          const published = new Date(item.dates[0].date);
          return (
            <Container key={index} style={styles.containerr}>
              <div key={index}>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.thumbnail.path}
                />
              </div>
             <div style={styles.typo}>
             <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.creators.available <= 0
                  ? ""
                  : item.creators.items[0].name}
              </Typography>
              <Typography>{published.toDateString()}</Typography>
              <Typography>{`${item.creators.items[0] ? item.creators.items[0].role : null} : ${item.creators.items[0] ? item.creators.items[0].name : null}`}</Typography>
              <Typography>{`Description : ${item.description}`}</Typography>
             </div>
            </Container>
          );
        })}
      </div>
    );
  }
}

const styles = {
    containerr : {
        display : 'flex',
        flexDirection : 'row',
        
    },
    typo : {
        marginLeft : '20px'
    }
}

const mapStateToProps = (state) => {
  return {
    contentDetail: state.content,
  };
};

export default connect(mapStateToProps, { getContentDetail })(DetailPage);
