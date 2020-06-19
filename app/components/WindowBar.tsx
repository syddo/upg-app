import React from 'react';
import { Grid, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';

export default function WindowBar() {
  return (
    <>
      <Grid
        container
        alignItems="flex-start"
        justify="flex-end"
        direction="row"
      >
        <Button color="inherit">
          <MinimizeIcon />
        </Button>
        <Button color="inherit">
          <CloseIcon />
        </Button>
      </Grid>
    </>
  );
}
