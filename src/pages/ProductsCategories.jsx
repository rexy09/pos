import React from 'react';
import { useGetProductCategoriesQuery } from '../services/productCategoriesApi';
import { CheckInternetConnection, Loader } from '../components';


const ProductsCategories = () => {
    const { data: productCategoriesList, isFetching, isError } = useGetProductCategoriesQuery();
    console.log(productCategoriesList)
    if (isFetching) {
        return <Loader />
    }
    if (isError) {
        return <CheckInternetConnection />
    }
    return (
        <div>
            <div className="modal fade" id="new-order" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="popup text-left">
                                <h4 className="mb-3">New Order</h4>
                                <div className="content create-workform bg-body">
                                    <div className="pb-3">
                                        <label className="mb-2">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter Name or Email" />
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                                            <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                            <div className="btn btn-outline-primary" data-dismiss="modal">Create</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Category List</h4>
                                    <p className="mb-0">Use category list as to describe your overall core business from the provided list. <br />
                                        Click the name of the category where you want to add a list item. .</p>
                                </div>
                                <a href="page-add-category.html" className="btn btn-primary add-list"><i className="las la-plus mr-3"></i>Add Category</a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <table className="data-table table mb-0 tbl-server-info">
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                    <label for="checkbox1" className="mb-0"></label>
                                                </div>
                                            </th>
                                            <th>Image</th>
                                            <th>Code</th>
                                            <th>Category</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {

                                            productCategoriesList.map((category, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="checkbox d-inline-block">
                                                            <input type="checkbox" className="checkbox-input" id="checkbox2" />
                                                            <label for="checkbox2" className="mb-0"></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src="../assets/images/table/product/01.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                            <div>
                                                                {category.name}
                                                                <p className="mb-0"><small>This is test Product</small></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CREM01</td>
                                                    <td>Beauty</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                                                href="#"><i className="ri-eye-line mr-0"></i></a>
                                                            <a className="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                                                href="#"><i className="ri-pencil-line mr-0"></i></a>
                                                            <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                                                href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))

                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ProductsCategories