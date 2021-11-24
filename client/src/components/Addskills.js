import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Divider, Fade} from "@mui/material";
import {styled} from '@mui/material/styles';
import SaveIcon from "@mui/icons-material/Save";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import axios from 'axios';
import { Modal } from '@mui/material';

export default function Addskills(props){

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

//skills to be learnt 
const [aboutMeText, setAboutMeText] = useState("learn Web-Development"); 

//explanation of skill
const [aboutMeText2, setAboutMeText2] = useState(" We will teach you basics of JavaScript, CSS, HTML and how to utilize MERN Stack! ");   


//City and State
const [cityAdd, setCityAdd] = useState("Oralndo");
const [stateAdd, setStateAdd] = useState("Florida");

const [cityAddTemp, setcityAddTemp] = useState("");
const [stateAddTemp, setstateAddTemp] = useState("");

//Skills explanation display/edit mode variable
const [aboutMeText2Temp, setAboutMeText2Temp] = useState("");
const [aboutMeTextTemp, setAboutMeTextTemp] = useState("");




// const [imageOpacity, setImageOpacity] = useState(1);
// const [photo, setPhoto] = useState(profileImage)
const [editPermission, setEditPermission] = useState(true);
const [mousePointer, setMousePointer] = useState('');
const [disableImageUpload, setDisableImageUpload] = useState(true)


//If the user goes over the designated Character Space for either Skills or its explanation
const [aboutMeTextError, setAboutMeTextError] = useState({
  state: false,
  text: ""
})

const [aboutMeText2Error, setAboutMeText2Error] = useState({
  state: false,
  text: ""
})


// Handles the onClick event of the Save button
function handleSave() {
  let okToSaveData = true;

  if(!validateTextMaxLength(aboutMeTextTemp, 50)) {
    okToSaveData = false
    setAboutMeTextError({
      state: true,
      text: "Must be less than 15 characters (There are " + aboutMeTextTemp.length + ")"
    });
  }

  if(!validateTextMaxLength(aboutMeText2Temp, 100)) {
    okToSaveData = false
    setAboutMeText2Error({
      state: true,
      text: "Must be less than 30 characters (There are " + aboutMeText2Temp.length + ")"
    });
  }

  if(okToSaveData) {
    setCityAdd(cityAddTemp);
    setStateAdd(stateAddTemp);
    setAboutMeText(aboutMeTextTemp);
    setAboutMeText2(aboutMeText2Temp);

    const userId = props.match.params.userId;
    const token = localStorage.getItem('token_data');
  
    //value to commit to Backend changable_fields
    const payload = {
      summary: aboutMeTextTemp, 
      title:    aboutMeTextTemp,
      description: aboutMeText2Temp,
      price: 50,
      status: "Teaching",
      state: stateAddTemp,
      city: cityAddTemp
    };
  
      console.log(token);
      // axios.post(`/api/skills/user/${!userId ? "" : userId}`, payload,{

      axios.post(`/api/skills/`, payload,{
        headers: { 'Authorization': `Bearer ${token}`}
    })
    .then((res) => {
      console.log("success")
    })
    .catch((err) => {
      console.log(err);
    })

handleClose();  }
}


function handleCancelButton() {
  clearTextValidationErrorMessages();
  handleClose();
  // exitEditMode();
}

function validateTextMaxLength(text, max) {
  if(text.length <= max) {
    return 1;
  } else {
    return 0;
  }
}

function clearTextValidationErrorMessages() {
  setAboutMeTextError({
    state: false,
    text: ""
  });
  setAboutMeText2Error({
    state: false,
    text: ""
  });
}


function handleOnChangeAboutMeText(e) {
  setAboutMeTextTemp(e.target.value);
}

function handleOnChangeAboutMeText2(e) {
  setAboutMeText2Temp(e.target.value);
}

function handleOnChangeCityAddress(e) {
  setcityAddTemp(e.target.value);
}

function handleOnChangeStateAddress(e) {
  setstateAddTemp(e.target.value);
}


const Input = styled('input')({
  display: 'none',
});

function handlePhoto(e) {
  if (editPermission) {
    alert("Profile picture processing coming soon");
    // Uploaded image should be in e.target.files or e.target.files[0]
    // Axios Post will go here
    // Request to backend with image for cropping and resizing.
  }
}

useEffect(() => {
  try {
    // TODO: Add code to setEditPermission = true if the logged user is
    //  the owner of the profile page. For now, we'll keep the
    //  setEditPermission = true below. (Note: we can't set editPermission,
    //  to then read its state immediately; it does not work.

    if (editPermission) {
      setDisableImageUpload(false);
      setMousePointer("pointer");
    } else {
      setDisableImageUpload(true);
      setMousePointer("");
    }

  } catch (e) {
    console.log(e.message);
  }

}, []);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container justifyContent="center">


      {/* //start of card// */}
      <Card  sx={{ maxWidth: 345,border: 4, borderRadius:5, borderColor:"black", width: "300px"}}>
      
      {/* //start of the image-header// */}
      <Box position="relative">
        <label htmlFor="icon-button-file">
          <Input
            accept=".png, .jpg, .jpeg"
            id="icon-button-file"
            type="file"
            name="photo"
            // onChange={handlePhoto}
            // disabled={disableImageUpload}
          />
          {/** **************************** Image ********************** **/}
          <div style={{
              background: "url(https://blog.tutorming.com/hs-fs/hubfs/how-to-learn-chinese.jpg?width=749&name=how-to-learn-chinese.jpg)",
              backgroundSize: "300px",
              width: 300,
              height: 150,
              display: "block",
              cursor: mousePointer,
            }}

            alt={"user"}
            // onMouseOver={handleOnMouseOverImage}
            // onMouseLeave={handleOnMouseLeaveImage}
          />
          </label>  
      </Box>
          

      <CardContent style={{paddingLeft: 0,paddingRight:0, paddingTop:0}}>

        {/*************************** What Skills can be taught (Edit Mode) ************************************/}
            <TextField
              label="How to ..."
              multiline
              variant="filled"
              rows={2}
              value={aboutMeTextTemp}
              fullWidth
              onChange={handleOnChangeAboutMeText}
              // sx={{display: displayEditFields, color: "black",marginTop: "10px"}}
              // helperText={aboutMeTextError.text}
              // error={aboutMeTextError.state}
            />

        {/*************************** Explanation on what can be taught (Edit Mode) ************************************/}
            <TextField
              label="Brief explanation of the skill"
              // color="secondary"
              // className={classes.root}
              multiline
              variant="filled"
              rows={2}
              value={aboutMeText2Temp}
              fullWidth
              onChange={handleOnChangeAboutMeText2}
              // sx={{display: displayEditFields,color:"black", marginTop: "10px"}}
              helperText={aboutMeText2Error.text}
              error={aboutMeText2Error.state}
            />

        {/* **********************************************************************************************/}
        
        {/*************************** LOCATION (Edit Mode) ************************************/}

          <Grid container>
            <Grid item xs={6}>
              <TextField
                label="City"
                variant="filled"
                rows={1}
                value={cityAddTemp}
                fullWidth
                onChange={handleOnChangeCityAddress}
                // sx={{display: displayEditFields,color:"black", marginTop: "10px"}}
                // helperText={aboutMeText2Error.text}
                // error={aboutMeText2Error.state}
              />
            </Grid>
            <Grid item xs={6}>
            <TextField
              label="State"
              variant="filled"
              rows={1}
              value={stateAddTemp}
              fullWidth
              onChange={handleOnChangeStateAddress}
              // sx={{display: displayEditFields,color:"black", marginTop: "10px"}}
              // helperText={aboutMeText2Error.text}
              // error={aboutMeText2Error.state}
            />
            </Grid>

          </Grid>
            

            

              

         {/******************** Cancel+SAVE Button *********************/}
        <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'safe center',
              flexWrap: "wrap-reverse"
            }}>
              <Grid container justifyContent="center" style={{paddingTop: "10px"}}>
                
                <Grid item xs={3}>
                  {/* <Fade in={fade}> */}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleCancelButton}
                      // sx={{display: displayButton}}
                    > <CancelPresentationIcon/>
                    </Button>
                  {/* </Fade> */}
                </Grid>

                <Grid item xs={3}>
                  {/* <Fade in={fade}> */}
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={handleSave }
                      // type="submit"
                      // onClick={editSkills }
                      // sx={{display: displayButton}}
                    ><SaveIcon/>
                    </Button>

                  {/* </Fade> */}
                </Grid>

              </Grid>
              
              {/******************** Cancel+SAVE Button DONE *********************/}
              
            </Box>
      </CardContent>
    </Card>
    </Grid>
    </Modal>
    </div>
  );
}