import React from 'react';
import { useGetProductCategoriesQuery } from '../services/productCategoriesApi';

const ProductsCategories = () => {
    const { data: productCategoriesList, isFetching, isError } = useGetProductCategoriesQuery();
    console.log(productCategoriesList)
    if (isFetching) {
        return <h1 className='mt-5' style={{marginTop:"40vh !important;"}}>Loading ...</h1>
    }
    if (isError) {
        return <h1 className='mt-5' >Please Check your internet connection.</h1>
    }
    return (
        <div>
            <div className="modal fade" id="new-order" tabindex="-1" role="dialog" aria-hidden="true">
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
            <div class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 class="mb-3">Category List</h4>
                                    <p class="mb-0">Use category list as to describe your overall core business from the provided list. <br />
                                        Click the name of the category where you want to add a list item. .</p>
                                </div>
                                <a href="page-add-category.html" class="btn btn-primary add-list"><i class="las la-plus mr-3"></i>Add Category</a>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="table-responsive rounded mb-3">
                                <table class="data-table table mb-0 tbl-server-info">
                                    <thead class="bg-white text-uppercase">
                                        <tr class="ligth ligth-data">
                                            <th>
                                                <div class="checkbox d-inline-block">
                                                    <input type="checkbox" class="checkbox-input" id="checkbox1" />
                                                    <label for="checkbox1" class="mb-0"></label>
                                                </div>
                                            </th>
                                            <th>Image</th>
                                            <th>Code</th>
                                            <th>Category</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="ligth-body">
                                        {

                                            productCategoriesList.map((category, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div class="checkbox d-inline-block">
                                                            <input type="checkbox" class="checkbox-input" id="checkbox2" />
                                                            <label for="checkbox2" class="mb-0"></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <img src="../assets/images/table/product/01.jpg" class="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                            <div>
                                                                {category.name}
                                                                <p class="mb-0"><small>This is test Product</small></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CREM01</td>
                                                    <td>Beauty</td>
                                                    <td>
                                                        <div class="d-flex align-items-center list-action">
                                                            <a class="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                                                href="#"><i class="ri-eye-line mr-0"></i></a>
                                                            <a class="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"
                                                                href="#"><i class="ri-pencil-line mr-0"></i></a>
                                                            <a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                                                href="#"><i class="ri-delete-bin-line mr-0"></i></a>
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