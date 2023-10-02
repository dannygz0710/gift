export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=2GMdIKNCw3ht7x7tw0mHcFHRpNmMLWnx&q=${ category }`;
    
   const respuesta = await fetch( url );
   const {data} = await respuesta.json();
   const gifs = data.map( img => {
   return{
       id: img.id,
       title: img.title,
       url:img.images?.downsized_medium.url,
   }
   })
     
 return (gifs);
  
   }