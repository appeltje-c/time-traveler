import { Canvas } from '@react-three/fiber'
import OfficeImperialTobacco from './models/OfficeImperialTobacco'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import { Tinker } from 'tinker-tools'
import { AppBar, Chip, Container, Divider, Paper, styled, Typography } from '@mui/material'


function App() {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Tinker hidden={true} />

      <AppBar position='static' color="primary" enableColorOnDark>
        <Container maxWidth="xl">
          <Typography
            variant="h6"
            noWrap
            component="a">
            Martijn Benjamin
          </Typography>
        </Container>
      </AppBar>

      <Grid container spacing={2} height={'100vh'} sx={{ paddingRight: 2, paddingTop: 2 }}>

        <Grid size={{ xs: 6, md: 8 }}>
          <Canvas shadows className='r3f'>
            <OfficeImperialTobacco />
          </Canvas>
        </Grid>

        <Grid size={{ xs: 6, md: 4 }} sx={{ paddingBottom: 20 }}>
          <Item>
            <Typography variant='h5' color='#fff'>
              <b>Imperial Tobacco</b>
            </Typography>
            <Typography variant='body1'>
              Analyst / Developer
            </Typography>
            <Divider sx={{ marginTop: 2 }} />
            <Chip label="Stack" sx={{ marginTop: 3, marginBottom: 1 }} />
            <Typography variant='body1'>
              <li> Java </li>
              <li> JSP </li>
              <li> Oracle </li>
              <li> PL/SQL </li>
              <li> SOAP </li>
              <li> XML </li>
            </Typography>




          </Item>

        </Grid>
      </Grid>
    </Box>
  )
}

export default App
