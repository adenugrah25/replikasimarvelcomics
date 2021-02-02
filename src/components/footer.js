import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer () {
    return (
        <div style={styles.root}>
            <h1 style={styles.copyright}>Copyright 2021 © @adenugrah25</h1>
            <ul style={styles.ul}>
                <li style={styles.li}><FacebookIcon fontSize="small"/></li>
                <li style={styles.li}><InstagramIcon fontSize="small"/></li>
                <li style={styles.li}><TwitterIcon fontSize="small"/></li>
                <li style={styles.li}><GitHubIcon fontSize="small"/></li>
            </ul>
        </div>
    )
}

const styles = {
    root : {
        height : 70,
        width : '100%',
        // backgroundColor : '#130f40',
        backgroundColor : 'rgba(30, 39, 46, 0.3)',
        // backgroundColor: "#f2f2f2",
        // backgroundColor : '#48C9B0',
        // padding : '2% 3%',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    copyright : {
        fontSize : 16,
        color : 'black'
    },

    ul : {
        textDecoration : 'none'
    },

    li : {
        display : 'inline-block',
        color : 'black',
        marginLeft : 15,
        cursor : 'pointer'
    }
}
export default Footer