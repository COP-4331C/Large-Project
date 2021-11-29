import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MainLogo from "./MainLogo";
import AccountMenuMobile from "./AccountMenuMobile";
import Grid from "@mui/material/Grid";
import {Theme} from "./Theme";
import SearchBar from "./SearchBar";

export default function HomeNavBar(props) {


  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: Theme.palette.primary.dark}}>
          <Grid container spacing={2}>

            {/** ************************** Logo ***************************************/}
            <Grid item xs={6} sm={3} md={3} sx={{textAlign:"left"}}>
              <MainLogo/>
            </Grid>

            {/** ******************** Search Bar ***************************************/}
            {/*Note: HomePage.js calls HomeNavBar.js who calls SearchBar. So, props are
                     passed down from HomePage.js to HomeNavBar, then to the SearchBar
                     and vice versa. Thus, HomeNavBar.js passes the onKeyDown and onClick
                     event handler functions down to the SearchBar component. So, when
                     the user presses enter or resets the search in the SearchBar component,
                     the SearchBar trigger those two events (These two functions are located
                     in the HomePage.js file*/}
            <SearchBar
              onKeyDown={props.onKeyDown}
              onClick={props.onClick}
              xs="none"
              sm="flex"
              md="flex"
              bgColor={0.15}
              bgColorHover={0.25}
              searchBarColumns={6}
              xIconColor="secondary"
            />

            {/** ************************** Avatar and My Skills ***************************************/}
            <Grid item xs={6} sm={3} md={3} sx={{justifyContent:"right"}}>
                <AccountMenuMobile loggedUserAvatar={props.loggedUserAvatar}/>
            </Grid>
            
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
