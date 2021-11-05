import React, {useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link as RouterLink } from 'react-router-dom';
import InputLabel from "@mui/material/InputLabel";
import {Alert, Collapse, FormHelperText} from "@mui/material";
import AppNavBar from '../components/AppNavBar';
import EditProfile from '../components/EditProfile';
import { Box, grid } from '@mui/system';
import whoa from '../whoa.jpeg';
import twitter from '../twitter.png';
import facebook from '../facebook.png';
import ig from '../ig.png';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function ProfilePage() {

  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4}>
  //         <item>
  //         <img  style={{
  //                           width: 70,
  //                           height: 70,
  //                           borderRadius: 50,
  //                           border: "2px solid",
  //                           borderColor: 'black' }}
  //                           src={whoa}/>
  //         </item>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <item>
  //         <img  style={{
  //                           width: 70,
  //                           height: 70,
  //                           borderRadius: 50,
  //                           border: "2px solid",
  //                           borderColor: 'black' }}
  //                           src={whoa}/>
  //         </item>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <item>
  //         <img  style={{
  //                           width: 70,
  //                           height: 70,
  //                           borderRadius: 50,
  //                           border: "2px solid",
  //                           borderColor: 'black' }}
  //                           src={whoa}/>
  //         </item>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }
  

  return (
    <Grid>
      <AppNavBar/>
     
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.default',
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr' },
          gap: 2,}}>
        

      {/* //1ST component paper// */}
      <Paper
        variant="outlined"
        elevation={3}
        style={{
          position: 'left',
          borderColor: "black",
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          height: '25vh',
          width: 500,
          backgroundColor: 'lightBlue',
          borderRadius:20,
          borderWidth: 2,
          marginTop: 50,
          marginLeft: 20
        }}
      >
        <Grid container direction="row" spacing={3} justifyContent="center" alignItems="flex-start">
          <Grid item xs>

          </Grid>
          <Grid item xs>
            {/********************* Profile Image *********************************/}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* //is this for image form label */}
                  {/* <div>
                    <input type="file" onChange={this.handleChange}/>
                    <img src={this.state.file}/>
                  </div> */}
              <img  style={{
                marginTop: -50,
                width: 70,
                height: 70,
                borderRadius: 200 / 2,
                border: "2px solid",
                borderColor: 'black' }}
                src={whoa}/>
            </Box>
          </Grid>
          <Grid item xs>
            {/********************* Edit Button *********************************/}
            {/*<Box sx={{flexGrow: 1, textAlign: "right"}}>*/}
            <Box sx={{textAlign: "right"}}>
              <IconButton
                color="primary"
                aria-label="edit"
                // onClick={handleOpen}
              >
                <EditOutlinedIcon/>
              </IconButton>
            </Box>
          </Grid>


        </Grid>
          <Grid container spacing={4} justifyContent="center" paddingTop={2}>

            <Grid item xs={6}>
              <FormControl>
              <item>
              <TextField
                id="outlined-read-only-input"
                label="First Name"
                defaultValue="John"
                InputProps={{
                readOnly: true,
                }}
              />
                  </item>
              </FormControl>
            </Grid>

            {/*<Grid item xs={2}>*/}
              {/*<FormControl>*/}
              {/*<item>*/}
              {/*  <TextField*/}
              {/*    id="outlined-read-only-input"*/}
              {/*    label="M.I."*/}
              {/*    defaultValue="Hello World"*/}
              {/*    InputProps={{*/}
              {/*    readOnly: true,*/}
              {/*    }}*/}
              {/*  />*/}
              {/*    </item>*/}
              {/*</FormControl>*/}
            {/*</Grid>*/}

            <Grid item xs={6}>
              <FormControl>
              <item>
                <TextField
                  id="outlined-read-only-input"
                  label="Last Name"
                  defaultValue="Doe"
                  InputProps={{
                  readOnly: true,
                  }}
                />
                  </item>
              </FormControl>
            </Grid>
            
          </Grid>

          {/******************** Contact me Button *********************/}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
                type='submit'
                color='primary'
                variant='contained'
                style={{ marginTop:40 }}
                startIcon={<ForumOutlinedIcon />}
              >
                Contact Me!
            </Button>
          </Box>
        </Paper>
    </Box>

{/* /////////////////////////////////////////////////////////////////////////// */}

     
        
        {/* //2nd component paper// */}
                  {/* //align// */}
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr' },
              gap: 2,}}>

                  {/* //main grid container// */}
                <Grid container spacing={4} justifyContent="left" paddingTop={2} marginLeft={2} >

                  {/* //Main Paper// */}
                  <Paper variant="outlined" elevation={3} style={{
                    position: 'left', 
                    borderColor: "black",
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: 10, 
                    height: '15vh', 
                    width: 500,
                    backgroundColor: 'lightBlue',
                    borderRadius:20,
                    borderWidth: 2,
                    marginTop: 20,
                    marginLeft: 20 }}>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid container item spacing={3} justifyContent="center">
                            <Grid item xs={4}>
                              <item>
                                <img  style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50
                                   }}
                                  src={facebook}/>
                              </item>
                            </Grid>
                            <Grid item xs={4}>
                              <item>
                                <img  style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50
                                  }}
                                  src={ig}/>
                              </item>
                            </Grid>
                            <Grid item xs={4}>
                              <item>
                                <img  style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 50
                                   }}
                                  src={twitter}/>
                              </item>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                          <Grid container item spacing={3} justifyContent="center">
                            <Grid item xs={4} marginTop={2}>
                              <item>
                                <TextField
                                  id="outlined-read-only-input"
                                  label="Facebook ID"
                                  defaultValue="Doe"
                                  InputProps={{
                                  readOnly: true,
                                  }}
                                />
                              </item>
                            </Grid>
                            <Grid item xs={4} marginTop={2}>
                              <item>
                                <TextField
                                  id="outlined-read-only-input"
                                  label="Instagram ID"
                                  defaultValue="Doe"
                                  InputProps={{
                                  readOnly: true,
                                  }}
                                />
                              </item>
                            </Grid>
                            <Grid item xs={4} marginTop={2}>
                              <item>
                                <TextField
                                  id="outlined-read-only-input"
                                  label="Twitter ID"
                                  defaultValue="Doe"
                                  InputProps={{
                                  readOnly: true,
                                  }}
                                />
                              </item>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>

                    </Paper>

                </Grid>    

          </Box>

      {/* /////////////////////////////////////////////////////////////////////////// */}

     
        
        {/* //2nd component paper Done// */}

        <Box sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr' },
              gap: 2,}}>

          <Grid container spacing={4} justifyContent="left" paddingTop={2} marginLeft={2} >
            {/* //Main Paper// */}
            <Paper variant="outlined" elevation={3} style={{
              position: 'left', 
              borderColor: "black",
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: 10, 
              height: '15vh', 
              width: 500,
              backgroundColor: 'lightBlue',
              borderRadius:20,
              borderWidth: 2,
              marginTop: 20,
              marginLeft: 20 }}>

                
              </Paper>
          </Grid>

            

        </Box>

    </Grid>
  );
}