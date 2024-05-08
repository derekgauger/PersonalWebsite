import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function SnackBar() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const setOpen = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Box>
  );
}
