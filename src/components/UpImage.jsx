import { useState, useContext } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig'; // ייתכן שתצטרך להתאים את הנתיב לקובץ firebase.js שלך
import { v4 } from 'uuid';
import cvContext from '../context/cvContext';

const UpImage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const { formData, setFormData } = useContext(cvContext);

  const uploadImage = async (e) => {
      e.preventDefault();
    try {
      if (imageUpload === null) return;

      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      await uploadBytes(imageRef, imageUpload);

     
      const imageUrl = await getDownloadURL(imageRef);
      setFormData({...formData, imageUrl: imageUrl});
      
      
      alert(`Image uploaded successfully! URL: ${imageUrl}`);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    
    setImageUpload(selectedImage);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
};

export default UpImage;

