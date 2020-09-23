import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//Material components
import Box from '@material-ui/core/Box/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const SocialMediaMenu = () => {
  return (
    <Fragment>
      <Box display="flex">
        <Link to="" className="social-item">
          <FacebookIcon />
        </Link>
        <Link to="" className="social-item">
          <TwitterIcon />
        </Link>
        <Link to="" className="social-item">
          <InstagramIcon />
        </Link>
      </Box>
    </Fragment>
  )
}

export default SocialMediaMenu;