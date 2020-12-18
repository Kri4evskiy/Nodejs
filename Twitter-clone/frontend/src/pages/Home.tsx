import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {
  Container,
  createStyles,
  InputBase,
  makeStyles,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core'
import gray from '@material-ui/core/colors/grey'

import { Tweet } from '../components/Tweet'
import { SideMenu } from '../components/SideMenu'

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div':{
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main
        },
        '& svg path': {
          fill: theme.palette.primary.main
        }
      }      
    },
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out'
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    alignSelf: 'center',
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: '-5px'
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2)
  },
  tweet: {
    paddingTop: 15,
    paddingLeft: 20,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderRadius: 0,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800,
    },
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    width: 450,
  },
  tweetUserName: {
    color: gray[500],
  },
}))

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      height: 45,
      padding: 0,
    },
  })
)(InputBase)

export const Home = () => {
  const classes = useHomeStyles()
  return (
    <Container className={classes.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant='outlined'>
            <Paper className={classes.tweetsHeader} variant='outlined'>
              <Typography variant='h6'>Главная</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text='asdncnasd sdcnas;dc oihubc ere sxc  sd vwsdvcew sdcscsdc sdcsdcs sdcsdccgbt tgbx dfvui li'
                  user={{
                    fullname: 'Dude',
                    username: 'dudecontact',
                    avatarUrl:
                      'https://cdn.pixabay.com/photo/2015/04/27/22/53/man-742766_960_720.jpg',
                  }}
                  classes={classes}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder='Поиск по Твиттеру' fullWidth />
        </Grid>
      </Grid>
    </Container>
  )
}
