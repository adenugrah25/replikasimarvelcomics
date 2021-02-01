import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getContent } from "../actions";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import ListSubheader from "@material-ui/core/ListSubheader";

// import IconButton from "@material-ui/core/IconButton";
// import InfoIcon from "@material-ui/icons/Info";
// import { Grid } from "@material-ui/core";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Axios.get(
      "http://gateway.marvel.com/v1/public/comics?ts=1588223122&apikey=535527fdf2cb9d7c41e5b0e605430a0b&hash=f41c4e716bb0df47d61e34cef3122d64"
    )
      .then((res) => {
        console.log(res["data"]["data"]["results"]);
        // this.setState({ data: res["data"]["data"]["results"] });
        this.props.getContent(res["data"]["data"]["results"]);
      })
      .catch((err) => console.log(err));
  }

  renderCard = () => {
    return this.props.content.map((item, index) => {
      return (
        <Card style={styles.card} key={item.id} elevation={7}>
          <Link to={`/detail/${item.id}`}>
          <CardActionArea style={styles.contentArea}>

            <CardMedia
              image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              component="img"
              style={styles.contentImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.creators.available <= 0
                  ? ""
                  : item.creators.items[0].name}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Link>
        </Card>
      );
    });
  };

  render() {
    console.log(this.props.content);
    return (
      <div style={styles.root}>
        <h1 style={styles.title}>Content</h1>
        <div style={styles.cardContainer}>{this.renderCard()}</div>
      </div>
    );
  }
}

const styles = {
  gridList: {
    width: 1000,
    height: 1000,
  },
  card: {
    flexBasis: "19%", //baergantung pada container
    minWidth: "300px",
    marginBottom: "1%",
    marginRight: "1%",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    height: "auto",
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: "2% 7%",
  },
  title: {
    fontSize: 50,
    fontWeight: 600,
    margin: "2% 0px",
  },
  cardContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
};

const mapStateToProps = (state) => {
  return {
    content: state.content,
  };
};

export default connect(mapStateToProps, { getContent })(Content);
