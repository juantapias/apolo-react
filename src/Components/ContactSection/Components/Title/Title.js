import React, { Fragment } from 'react';
//Material components
import Typography from '@material-ui/core/Typography/Typography';

const Title = ({title}) => {
  return (
    <Fragment>
      <Typography variant="h6" align="center">
        {title}
      </Typography>
    </Fragment>
  );
}

export default Title;