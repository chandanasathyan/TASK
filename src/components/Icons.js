import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import "./Icons.css"


const Icons = () => {

    const style = {
        position: 'absolute',
        top: '200px',
        left: '720px',
        transform: 'translate(-50%, -50%)',
        width: 30,
        bgcolor: '#fff',
        border: '2px solid none',
        borderRadius: '50px',
        boxShadow: 24,
        p: 4,
      };
      
      
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);


  return (
    <>
        <div className='icon-div'>
            
           <button type='submit' onClick={handleOpen}><ShareIcon/></button>

          <Modal
             keepMounted
             open={open}
             onClose={handleClose}
             aria-labelledby="keep-mounted-modal-title"
             aria-describedby="keep-mounted-modal-description"
            >
            <Box sx={style}>
               <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                   <a href="https://www.whatsapp.com/"  target="_blank"><WhatsAppIcon/></a>  
               </Typography>
               <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                   <a href="https://www.facebook.com/"  target="_blank"><FacebookIcon/></a>
               </Typography>
               <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                   <a href="https://twitter.com/"  target="_blank"><TwitterIcon/></a>
               </Typography>
               <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                   <a href="https://www.linkedin.com/"  target="_blank"><LinkedInIcon/></a>
               </Typography>
               <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                   <a href="https://mail.google.com/mail/"  target="_blank"><EmailIcon/></a>
               </Typography>
               <Typography id="keep-mounted-modal-description" sx={{ mt: 2  }}>
                   <CloseIcon style={{fontSize:"30px"}} onClick={handleClose}/> 
               </Typography>
            </Box>
          </Modal>
            
        </div>
    </>
  )
}

export default Icons