
 import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
 import css from './ImageGallery.module.css'
 

const ImageGallery = ({ hits }) => {
    console.log('hits in ImageGallery  :>> ', hits);
    return (
      <div>
        <ul className={css.listImageGallery}>
          {hits.map(hit => (
            <ImageGalleryItem hit={hit} key={hit.id}  />
           
          ))}
        </ul>
      </div>
    );
  };
  
  export default ImageGallery;


