import React from 'react';

const AppCarousel = () => {
    return (
        <>
            <hr />
            <h1 className='text-2xl text-center pb-8'>Submit A Carousel Image</h1>
            <div className='d-flex justify-content-center mt-5'>
                <form onSubmit="{handleSubmit}">
                    <div className='w-25'>
                        <label for='' className='fs-3'>Image</label>
                        <input type='file' accept='image/png, image/gif, image/jpeg' name='image' className='d-block mt-2' />
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