import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFileRequest } from '../../actions/postActions';

const UploadMedia = ({ onUploadSuccess }) => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      console.error('No file selected');
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      console.log(selectedFile,"selectedFileselectedFile")
      const response = await dispatch(uploadFileRequest(selectedFile));
      onUploadSuccess(response.payload);
    }
  };
 
  return (
    <div className="upload-media">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default UploadMedia;
