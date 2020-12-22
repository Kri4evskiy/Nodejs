import ReactBookmarkIcon, { useState } from 'react'
import { Button, IconButton, Typography } from '@material-ui/core'
import { useHomeStyles } from '../pages/Home/theme'

import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/NotificationsNone'
import BookmarkIcon from '@material-ui/icons/BookmarkBorder'
import MessageIcon from '@material-ui/icons/MailOutline'
import ListIcon from '@material-ui/icons/ListAlt'
import UserIcon from '@material-ui/icons/PermIdentity'
import CreateIcon from '@material-ui/icons/Create'
import Hidden from '@material-ui/core/Hidden'
import { ModalBlock } from './ModalBlock'
import { AddTweetForm } from './AddTweetForm'

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)

  const handleCkickOpenAddTweet = (): void => {
    setVisibleAddTweet(true)
  }
  const onCloseAddTweet = (): void => {
    setVisibleAddTweet(false)
  }
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton className={classes.logo} aria-label='' color='primary'>
          <TwitterIcon className={classes.logoIcon} />
        </IconButton>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
              Список
            </Typography>
          </Hidden>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleCkickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant='contained'
          color='primary'
          fullWidth
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
          <div style={{width: 550}}>
          <AddTweetForm classes={classes} maxRows={15} />
        </div>
        </ModalBlock>
      </li>
    </ul>
  )
}
