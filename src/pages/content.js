import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import ListSubheader from "@material-ui/core/ListSubheader";

// import IconButton from "@material-ui/core/IconButton";
// import InfoIcon from "@material-ui/icons/Info";
// import { Grid } from "@material-ui/core";

const style = {
  gridList: {
    width: 1000,
    height: 1000,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
};

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
        this.setState({ data: res["data"]["data"]["results"] });
      })
      .catch((err) => console.log(err));
  }

  moveDetail() {}

  render() {
    return (
      <div>
        <h1>Content</h1>

        <div style={style.root}></div>

        <GridList cellHeight={200} style={style.gridList}>
          <GridListTile
            key="Subheader"
            cols={3}
            style={{ height: "auto" }}
          ></GridListTile>

          {this.state.data.map((item, idx) => {
            return (
              <GridListTile key={idx}>
                <Link to={`/detail/${item.id}`}>
                  <div>
                    <img
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={item.thumbnail.path}
                    />
                  </div>
                </Link>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.creators.available <= 0
                    ? ""
                    : item.creators.items[0].name}
                </Typography>
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default Content;
