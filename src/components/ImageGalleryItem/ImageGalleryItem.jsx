import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 1200,
  // bgcolor: 'background.paper',
  bgcolor: 'rgba(205, 214, 219, 0)',
  border: 'none',
  boxShadow: 24,
  p: 4,
  padding: 0,
  

};
 
const ImageGalleryItem = ({hit:{webformatURL,largeImageURL, tags},id}) =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true) ;
  const handleClose = () => setOpen(false);
 
 
return(

<>
<li onClick={handleOpen} className="gallery-item" >
  <img src={webformatURL} alt={tags} width={260}height={150}/>
</li>
 <div>

 {/* <Button onClick={handleOpen}>Open modal</Button> */}
 <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
 >
   <Box sx={style}> 
   
     <img src= {largeImageURL}
alt={tags} style={{ width: 800,   marginBottom: -50, }} />
       
     
   </Box>
 </Modal>
</div>
</>

)
}

export  default ImageGalleryItem;





