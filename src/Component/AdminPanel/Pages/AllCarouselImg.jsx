import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';

const AllCarouselImg = () => {
    const [img, setImg] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:8080/carousel`).then(res => {
            setImg(res.data);
        });
    }, []);
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios
                        .delete(`http://localhost:8080/carousel/${id}`)
                        .then(res => {
                            swal("Poof! Message has been deleted!", {
                                icon: "success",
                            });
                            setImg(img.filter(message => message._id !== id));
                        });

                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    };
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {img.map(carImg => (
                    <div className="col">
                        <div className="card h-100">
                            <img src={`data:image/png;base64,${carImg.image}`} className="card-img-top" alt="..." />
                            <div className="card-body d-flex justify-content-center">
                                <button onClick={() => handleDelete(carImg._id)} className='btn btn-danger'>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllCarouselImg;