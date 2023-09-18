
 import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  padding: 0,

};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
          <img src= 
"https://pixabay.com/get/g9fa88d8f527c93fc8a7a32f6b024c94e43ce0ad33aec7b27556725b8cacb75118bbe0e52abd5d11511f607cb820adbab988faa0ca4988dafcd481afa6fc78855_1280.jpg" alt="Image" style={{ width: '100%',   marginBottom: -50, }} />
            
          
        </Box>
      </Modal>
    </div>
  );
}




// import React, { Component } from 'react'
// import css from './Modal.module.css'
// import {createPortal} from 'react-dom';



// const modalRoot= document.querySelector('#modal-root');
// export default class Modal extends Component {

 
// 	componentDidMount() {
//         console.log(' modal DidMount');
		
//         document.addEventListener('keydown', this.handleKeyEsc);  
//         };
    
	
// componentWillUnmount() {
//         console.log('modal WillUnmount ');
// 		document.removeEventListener('keydown', this.handleKeyEsc)
// 	}
	
//  handleKeyEsc = (e) => {
// 		if (e.code === 'Escape') this.props.onClose()
// 		// console.log('Esc');
// 	}
// 	handlBackdropClick= event =>{
//         console.log('BackdropClick');
//         if(event.target===event.currentTarget) {
//             this.props.onClose();
//         }
//     }
 	
// // 		const { children, toggleModal } = this.props
// render() {
//     return createPortal(
//         <div className={css.modalBackdrop} onClick={this.handlBackdropClick}>
// <div className={css.modalContent}>{this.props.children} </div> 
// </div>,
// modalRoot,
//     );
// }

// }







