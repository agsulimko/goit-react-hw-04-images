import axios from "axios";
 
const BAZE_URL = 'https://pixabay.com/api/'


 const getAllPhotos = async (value, page) => {

    const { data } = await axios(BAZE_URL, {
        params: {
            key: '38614458-d50fcc5469c58311283d9e834',
             q: `${value}`,
            // q: value,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
             page: page,
             per_page: 12,
        }
    });
    console.log(data);
    return data;
    
}

 export default getAllPhotos;




//  setTimeout(()=> {
    //    fetch('https://pixabay.com/api/?&page=1&key=38614458-d50fcc5469c58311283d9e834&image_type=photo&orientation=horizontal&per_page=12')
    //    .then (res => res.json())
    // //  .then(console.log);
    //  .then (cats => this.setState({cats}));},1000);
    
    
    //   }