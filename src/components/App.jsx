import React, { useState, useEffect} from 'react'
import Searchbar from './Searchbar/Searchbar'
 import  ButtonLoad  from './ButtonLoad/ButtonLoad'
 import ImageGallery from './ImageGallery/ImageGallery';
 import { Notify } from 'notiflix/build/notiflix-notify-aio';

    import getAllPhotos from '../api/api'
    import { Container } from '@mui/material';
    import Loader from './Loader/Loader';

   const App =(prev)=> {
const[searchQuery, setSearchQuery]=useState('');
const[gallery, setGallery]=useState([]);
const[currentPage, setCurrentPage]=useState(1);
const[quantityPage, setQuantityPage]=useState(null);
const[error, setError]=useState(null);
const[isLoading, setIsLoading]=useState(false);

    
    // componentDidMount;


useEffect((prev)=>{
  if ( currentPage || searchQuery)
  fetchGallery();
}, [currentPage, searchQuery]);
  
    
  

  const fetchGallery = async () => {
    setIsLoading(true);
    try {

       const { hits,totalHits } = await getAllPhotos(
         searchQuery, currentPage );
      
      if (!hits.length) {
      //  alert(
      //     'Sorry, there are no images matching your search query. Please try again.'
      //   );
      Notify.failure(
             'Sorry, there are no images matching your search query. Please try again.'
         )
        return;
       }
     
       if (hits.length === 0) {
         setError( 'Not data found' );
       }


      if (hits.length > 0) {
        setGallery(prevGallery => [...prevGallery, ...hits]);
        setQuantityPage(Math.ceil(totalHits / 12));
      }

       
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsLoading( false );
    }
  };

  const hendleFormSubmit = (searchQuery) => {
    setCurrentPage(1);
      setQuantityPage(null);
      setGallery([]);
      setError(null);
      setSearchQuery(searchQuery);

    
  };

  const handleBtnLoad = () => {
    setCurrentPage(prevPage => 
       prevPage + 1);
  };


 
  // const { error, gallery, isLoading, showModal,largeImageURL, tags, } = this.state;
  
  // console.log(gallery);
   return (
    <Container maxWidth="xl">


          <Searchbar  onSubmit={hendleFormSubmit}/>   
        
         {isLoading && <Loader />}
         {gallery && gallery.length > 0 && <ImageGallery hits={gallery} />}
         {currentPage < quantityPage && (
          <ButtonLoad handleBtnLoad={handleBtnLoad} />
        )}


     
     </Container>
   )
 }


export default App;












// import React, { Component } from 'react'
// import Searchbar from './Searchbar/Searchbar'
//  import  ButtonLoad  from './ButtonLoad/ButtonLoad'
//  import ImageGallery from './ImageGallery/ImageGallery';
//  import { Notify } from 'notiflix/build/notiflix-notify-aio';

//     import getAllPhotos from '../api/api'
//     import { Container } from '@mui/material';
//     import Loader from './Loader/Loader';

//    class App extends Component {


//     state = {
//       searchQuery: '',
//       gallery: [],
//       currentPage: 1,
//       quantityPage: null,
//       error: null,
//      isLoading: false,
  
//     };
//     componentDidMount;



//   componentDidUpdate(prevProps, prevState) {
//     if (
//       this.state.currentPage !== prevState.currentPage ||
//       this.state.searchQuery !== prevState.searchQuery
//     ) {
//       this.fetchGallery();
//     }
//   }

//   fetchGallery = async () => {
//     this.setState({ isLoading: true });
//     try {

//       const { hits,totalHits } = await getAllPhotos(
//         this.state.searchQuery,
//         this.state.currentPage
//       );
      
//       if (!hits.length) {
//       //  alert(
//       //     'Sorry, there are no images matching your search query. Please try again.'
//       //   );
//       Notify.failure(
//              'Sorry, there are no images matching your search query. Please try again.'
//          )
//         return;
//        }
     
//        if (hits.length === 0) {
//          this.setState({ error: 'Not data found' });
//        }


//       if (hits.length > 0) {
//         this.setState(prev => ({
//           gallery: [...prev.gallery, ...hits],
//           quantityPage: Math.ceil(totalHits / 12),
//         }));
//       }
//     } catch (err) {
//       this.setState({ error: err.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   hendleFormSubmit = (searchQuery) => {
//     this.setState({ currentPage: 1,
//       quantityPage: null,
//       gallery: [],
//       error: null,
//       searchQuery, });

//     // console.log(searchQuery);
//   };

//   handleBtnLoad = () => {
//     this.setState(prev => ({
//       currentPage: prev.currentPage + 1,
//     }));
//   };

// render() {
//   const {
//     gallery,
//     isLoading,
//     currentPage,
//     quantityPage,
//   } = this.state;
//   // const { error, gallery, isLoading, showModal,largeImageURL, tags, } = this.state;
  
//   console.log(gallery);
//    return (
//     <Container maxWidth="xl">


//           <Searchbar  onSubmit={this.hendleFormSubmit}/>   
        
//          {isLoading && <Loader />}
//          {gallery && gallery.length > 0 && <ImageGallery hits={gallery} />}
//          {currentPage < quantityPage && (
//           <ButtonLoad handleBtnLoad={this.handleBtnLoad} />
//         )}


     
//      </Container>
//    )
//  }
// }

// export default App

























