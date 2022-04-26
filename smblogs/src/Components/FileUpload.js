import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const FileUploadComponent = () => {

	const [textArea, setTextArea] = useState("");
	const [blogTitle, setBlogTitle] = useState("");
	const { register, handleSubmit } = useForm();
	const [blogImage, setBlogImage] = useState("");

	const handleTextAreaChange = (e) => {
		setTextArea(e.target.value);
	};

	const handleTitleChange = (e) => {
		setBlogTitle(e.target.value);
	}

	const onFileChange = (e) => {
        setBlogImage(e.target.files[0]);
    }


	const handleBlogSubmit = (e) => {
		var formData = new FormData();
		formData.append('file', blogImage);

		fetch('http://localhost:3001/editor', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify ({
				textArea: textArea,
				blogTitle: blogTitle,
			}),	
		})
		.then(()=> {
			fetch('http://localhost:3001/upload', {
				method: 'post',
				body: formData,
			})
		})
		.then(() => {
			alert('I have submited Successfully, I do not know if It can be retrieved yet')
		});
	}

	return (
			<div className="file-upload-container">
                <div className="row">
                    <form onSubmit={handleSubmit(handleBlogSubmit)}>
                        {/*<h3>React File Upload</h3>*/}
                        <h3>Blog Upload!</h3>
                        <p>Please Enter Your blog and You Must *Add an image</p>
                        <label className="title">Blog Title: </label>
        				<input onChange={handleTitleChange} className="textbox" type="textbox" placeholder="creative name here" value={blogTitle} />
                        <div className="form-group">
                        	<textarea value={textArea} onChange={handleTextAreaChange} rows="10" cols="60"/>
                            <input {...register("picture")} name="picture" onChange={onFileChange} type="file" />
                        </div>
                        <div className="form-group">
                            <input className="button" type="submit" value="Upload Blog" />
                        </div>
                    </form>
                </div>
            </div>
		);
}

export default FileUploadComponent;