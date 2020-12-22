import React from 'react'
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
  Paper
} from '@material-ui/core'

import { Tweet } from '../../components/Tweet'
import { SideMenu } from '../../components/SideMenu'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'

import { AddTweetForm } from '../../components/AddTweetForm'
import { useHomeStyles } from './theme'
import { SearchTextField } from '../../components/SearchTextfield'



export const Home = (): React.ReactElement => {
  const classes = useHomeStyles()
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
              <div className={classes.addForm}><AddTweetForm classes={classes} /></div>
              <div className={classes.addFormBottomLine} />
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
              <Paper className={classes.rightSideBlock} variant='outlined'>
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
