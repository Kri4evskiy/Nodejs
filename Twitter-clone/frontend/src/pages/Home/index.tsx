import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import {
  Container,
  Typography,
  InputAdornment,
  Avatar,
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
  List,
  Button,
  Paper,
} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Tweet } from '../../components/Tweet'
import { SideMenu } from '../../components/SideMenu'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'

import { AddTweetForm } from '../../components/AddTweetForm'
import { useHomeStyles } from './theme'
import { SearchTextField } from '../../components/SearchTextfield'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../store/ducks/tweets/actionCreators'
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors'

export const Home = (): React.ReactElement => {
  const dispatch = useDispatch()
  const classes = useHomeStyles()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <Container className={classes.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} variant='outlined'>
            <Paper className={classes.tweetsHeader} variant='outlined'>
              <Typography variant='h6'>Главная</Typography>
            </Paper>
            <Paper>
              <div className={classes.addForm}>
                <AddTweetForm classes={classes} />
              </div>
              <div className={classes.addFormBottomLine} />
            </Paper>
            {isLoading ? (
              <div className={classes.tweetsCentred}><CircularProgress color='secondary' /></div>
            ) : (
              tweets.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  text={tweet.text}
                  user={tweet.user}
                  classes={classes}
                />
              ))
            )}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              variant='outlined'
              placeholder='Поиск по Твиттеру'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper
                className={classes.rightSideBlockHeader}
                variant='outlined'
              >
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary='Киев'
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component='li' />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary='#коронавирус'
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: 163 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component='li' />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary='Беларусь'
                    secondary={
                      <Typography component='span' variant='body2'>
                        Твитов: 11 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component='li' />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper
                className={classes.rightSideBlockHeader}
                variant='outlined'
              >
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt='Remy Martin'
                      src='https://cdn.pixabay.com/photo/2020/01/29/17/09/snowboard-4803050_960_720.jpg'
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary='Dock Of Shame'
                    secondary={
                      <Typography component='span' variant='body2'>
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color='primary'>
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component='li' />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
