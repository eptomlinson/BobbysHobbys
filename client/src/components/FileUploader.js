import React, {useState} from 'react';


function ImageUploader(props) {
const [imgUrl, setImage] = useState()
const [loading, setLoading] = useState(false)

const uploadImage = async e => {
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'ethereal')
  setLoading(true)
  const res = await fetch(
    'https://api.cloudinary.com/v1_1/dmoc5klfw/image/upload',
    {
      method: 'POST',
      body: data
    }
  )
  const file = await res.json()

  console.log(file.secure_url);

  setImage(file.secure_url)
  setLoading(false)


}


  return (
    <div className="App">
      <p>Upload Image</p>
      <input 
      type='file'
      name='file'
      placeholder='Upload an image'
      onChange={uploadImage}
      style={{margin: 15, textAlign: 'center'}}
      />
      {loading ? (
        <p>Creating Image URL...</p>
      ): (
        <input name="image" value={imgUrl} onChange={props.onChange}/>
      )}
    </div>
  );
}




export default ImageUploader;