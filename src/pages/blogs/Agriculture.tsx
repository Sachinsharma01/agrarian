import React from 'react';
import BlogCard from "../../components/blogs";

const Blog = () => {
    document.title = 'Agrarian | Agriculture'
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 blog-banner">
                        <div className="container h-100">
                            <div className="row d-flex h-100 justify-content-center align-items-center">
                                <div className="col-6">
                                    <h2 className='fs-1 text-center text-light'>Agriculture</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center my-3">
                    </div>
                    <div className="col-12">
                        <div className="container-fluid">
                            <div className="row gap-3 mt-4 d-flex justify-content-evenly align-items-center flex-wrap">
                                <BlogCard link='agrarian' image='/assets/h2-slide1.jpg' title='Agricultural Pollution and the Environment: What
AGRARIAN Be Done?'/>
                                <BlogCard link='agri_motivation' image='/assets/blogs/blog-2/adaptability.jpg'
                                          title='How To Be Successful In The Agriculture Industry.?'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;