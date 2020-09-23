import React, { Fragment } from 'react';
//Material components
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
//Data
import { DataContact } from '../../../../Data/Contact/DataContact';

const ContactMenu = () => {
  return (
    <Fragment>
      <List>
        {
          DataContact.map((item, index) => {
            return (
              <ListItem key={index} className="list-item">
                <ListItemText
                  primary={item.content}
                />
              </ListItem>
            );
          })
        }
      </List>
    </Fragment>
  );
}

export default ContactMenu;