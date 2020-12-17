import React from 'react'

import classNames from 'classnames'

import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/NotificationsNone'
import BookmarkIcon from '@material-ui/icons/BookmarkBorder'
import MessageIcon from '@material-ui/icons/MailOutline'
import ListIcon from '@material-ui/icons/ListAlt'
import UserIcon from '@material-ui/icons/PermIdentity'
import RepeatIcon from '@material-ui/icons/Repeat'
import CommentIcon from '@material-ui/icons/ModeCommentOutlined'
import HeartIcon from '@material-ui/icons/FavoriteBorder'
import ShareIcon from '@material-ui/icons/ReplyAllOutlined'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {
  Avatar,
  Container,
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Typography,
  withStyles,
} from '@material-ui/core'
import gray from '@material-ui/core/colors/grey'

const useHomeStyles = makeStyles(() => ({
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
  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center',
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    alignSelf: 'center',
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  tweet: {
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: 'rgb(245,248,250)'
    }
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
    justifyContent: 'space-between',
    width: 450
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
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton
                className={classes.logo}
                aria-label=''
                color='primary'
              >
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <SearchIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant='h6'
              >
                Поиск
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <NotificationsIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant='h6'
              >
                Уведомления
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <MessageIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant='h6'
              >
                Сообщения
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <BookmarkIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant='h6'
              >
                Закладки
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <ListIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant='h6'
              >
                Список
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label=''>
                <UserIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant='h6'
              >
                Профиль
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}></li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant='outlined'>
            <Paper className={classes.tweetsHeader} variant='outlined'>
              <Typography variant='h6'>Главная</Typography>
            </Paper>
            <Paper className={classNames(classes.tweetsHeader, classes.tweet)} variant='outlined'>
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <Avatar
                    alt='User Avatar'
                    src='https://images.unsplash.com/photo-1564931768869-c66430fe1162?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography>
                    <b>Dude</b>
                    <span className={classes.tweetUserName}>@dudetweetter</span>
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Itaque sunt iste accusantium voluptatum deleniti molestias
                    quia, maiores voluptatem error ullam in molestiae eveniet
                    sequi ipsa autem incidunt debitis eos nulla!
                  </Typography>
                  <div className={classes.tweetFooter}>
                    <div>
                      <IconButton>
                        <CommentIcon style={{ fontSize: 20 }} />
                      </IconButton>
                      <span>1</span>
                    </div>
                    <div>
                      <IconButton>
                        <RepeatIcon style={{ fontSize: 20 }} />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton>
                        <HeartIcon style={{ fontSize: 20 }} />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton>
                        <ShareIcon style={{ fontSize: 20 }} />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder='Поиск по Твиттеру' fullWidth />
        </Grid>
      </Grid>
    </Container>
  )
}
