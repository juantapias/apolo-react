import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//Material components
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
//Data
import { menuData } from '../../../../Data/Menu/DataMenu';

const AboutUsMenu = () => {
  return (
    <Fragment>
      <List>
        {
          menuData.map((item, index) => {
            return (
              <ListItem key={index} className="list-item">
                <Link to={item.path} className="link-item">
                <ListItemText
                  primary={item.page}
                />
                </Link>
              </ListItem>
            )
          })
        }
      </List>
    </Fragment>
  )
}

export default AboutUsMenu;