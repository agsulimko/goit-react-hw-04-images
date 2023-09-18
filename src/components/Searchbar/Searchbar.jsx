import { Component } from 'react'
import TextField from '@mui/material/TextField';
 import Box from '@mui/material/Box';
import css from './Searchbar.module.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
 

export default class Searchbar extends Component {
  state = {
    inputQuery: '',
  };

  handleInputQuery = e => {
    this.setState({ inputQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputQuery.trim() === '') {
      Notify.failure('Enter your request');
      return;
    }
    this.props.onSubmit(this.state.inputQuery.trim());
    this.setState({ inputQuery: '' });
  };

  render() {
    
    console.log(this.state.inputQuery);
		
 return (
  <header className={css.searchbar}>
   
    <form className="form" onSubmit={this.handleSubmit}>

      <Box sx={{ display: 'flex', alignItems: 'center' , justifyContent: 'center'}}>
      <YoutubeSearchedForIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField 
                    //  className="input"
                     type="text"
                     autocomplete="off"
                     autofocus
                    //  placeholder="Search images and photos"
                     name='title'
                     size="small"
                     sx={{ m: 1, width: '35ch'}}
                     style={{ backgroundColor: 'white' }}
                    
                    className='form-control'
                    onChange={this.handleInputQuery}
                    value={this.state.inputQuery}
                    id="input-with-sx" 
                    label="Search images and photos" 
                    variant="outlined"
                    margin="dense"               />  
                   </Box> 
			</form> 
      </header>
  )
}
}

