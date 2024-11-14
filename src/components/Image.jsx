/* eslint-disable */

/** 
 * This component  
 * 
 */
// Define the Image component using props path and size, and alt text for accessibility.  
const Image = ({ path, size = "w1280", alt }) => {

  // Function to create the image URL 
  const getImageUrl = (path, size) => {
    const baseUrl = "https://image.tmdb.org/t/p/";
    return `${baseUrl}${size}${path}`;
  };

  const imageUrl = getImageUrl(path, size);

  // Render the image element with the constructed URL and alt text
  return <img src={imageUrl} alt={alt} />;
};

export default Image;