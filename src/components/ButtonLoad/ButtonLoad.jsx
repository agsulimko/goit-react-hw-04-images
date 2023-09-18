 import Button from '@mui/material/Button'
 import css from './ButtonLoad.module.css'
const ButtonLoad = ({ handleBtnLoad }) => {
    return (
      <div className={css.btnLoder}>
      <Button variant="contained" onClick={handleBtnLoad} type="button">
        Load more
      </Button>
      </div>
    );
  };
  
  export default ButtonLoad;