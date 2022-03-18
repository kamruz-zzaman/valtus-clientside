import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';

const AppCarousel = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
        let formData = new FormData(e.target);
        formData.append('category', 'news');
        axios.post('http://localhost:8080/carousel', formData)
            .then(res => {
                console.log(res);
                swal("Done!", "Carousel uploaded!", "success");
                e.target.reset()
            })
            .catch(err => console.log(err));
    };
    return (
        <>
            <hr />
            <h1 className='text-2xl text-center pb-8'>Submit A Carousel Image</h1>
            <div className='d-flex justify-content-center mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className='w-25'>
                        <label htmlFor='' className='fs-3'>Image</label>
                        <input type='file' required accept='image/png, image/gif, image/jpeg' name='image' className='d-block mt-2' />
                    </div>
                    <button
                        type='submit'
                        className='btn btn-primary mt-5'
                        style={{ fontSize: '1rem' }}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default AppCarousel;