import { useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { db } from '../../../../firebaseinit';

const storage = getStorage();

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      setUploading(true);

      uploadBytes(storageRef, image)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            // Save the image URL to Firestore
            db.collection('images').add({
              imageUrl: downloadURL,
              // Additional data if needed
            });
            setUploading(false);
            setImage(null);
          });
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          setUploading(false);
        });
    }
  };

  return (
    <div>
      <h2>Team logo Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!image || uploading}>
        Upload
      </button>
      {uploading && <p>Uploading...</p>}
    </div>
  );
};

export default ImageUploadForm;
