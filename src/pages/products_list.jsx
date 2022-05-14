import React from 'react';

const Products_List = () => {
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
            </div>      <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Product List</h4>
                                    <p className="mb-0">The product list effectively dictates product presentation and provides space<br /> to list your products and offering in the most appealing way.</p>
                                </div>
                                <a href="page-add-product.html" className="btn btn-primary add-list"><i className="las la-plus mr-3"></i>Add Product</a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <table className="data-tables table mb-0 tbl-server-info">
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox1" />
                                                    <label for="checkbox1" className="mb-0"></label>
                                                </div>
                                            </th>
                                            <th>Product</th>
                                            <th>Code</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Brand Name</th>
                                            <th>Cost</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        <tr>
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
                                                        Organic Cream
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>CREM01</td>
                                            <td>Beauty</td>
                                            <td>$25.00</td>
                                            <td>Lakme</td>
                                            <td>$10.00</td>
                                            <td>10.0</td>
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
                                        <tr>
                                            <td>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox3" />
                                                    <label for="checkbox3" className="mb-0" ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="../assets/images/table/product/02.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        Rain Umbrella
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>UM01</td>
                                            <td>Grocery</td>
                                            <td>$30.00</td>
                                            <td>Sun</td>
                                            <td>$20.00</td>
                                            <td>15.0</td>
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
                                        <tr>
                                            <td>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox4" />
                                                    <label for="checkbox4" className="mb-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="../assets/images/table/product/03.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        Serum Bottle
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>SEM01</td>
                                            <td>Beauty</td>
                                            <td>$50.00</td>
                                            <td>Blushing</td>
                                            <td>$25.00</td>
                                            <td>50.0</td>
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
                                        <tr>
                                            <td>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox5" />
                                                    <label for="checkbox5" className="mb-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="../assets/images/table/product/04.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        Coffee Beans
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>COF01</td>
                                            <td>Food</td>
                                            <td>$32.00</td>
                                            <td>Nescafe</td>
                                            <td>$20.00</td>
                                            <td>50.0</td>
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
                                        <tr>
                                            <td>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox6" />
                                                    <label for="checkbox6" className="mb-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="../assets/images/table/product/05.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        Book Shelves
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>FUN01</td>
                                            <td>Furniture</td>
                                            <td>$30.00</td>
                                            <td>Vintage</td>
                                            <td>$30.00</td>
                                            <td>25.0</td>
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
                                        <tr>
                                            <td>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox7" />
                                                    <label for="checkbox7" className="mb-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="../assets/images/table/product/06.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        Dinner Set
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>DIS01</td>
                                            <td>Grocery</td>
                                            <td>$30.00</td>
                                            <td>Rancher's</td>
                                            <td>$20.00</td>
                                            <td>50.0</td>
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
                                        <tr>
                                            <td>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox8" />
                                                    <label for="checkbox8" className="mb-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="../assets/images/table/product/07.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        Nike Shoes
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>NIS01</td>
                                            <td>Shoes</td>
                                            <td>$78.00</td>
                                            <td>Nike</td>
                                            <td>$50.00</td>
                                            <td>100.0</td>
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
                                        <tr>
                                            <td>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox9" />
                                                    <label for="checkbox9" className="mb-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="../assets/images/table/product/08.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        Computer Glasses
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>COG01</td>
                                            <td>Frames</td>
                                            <td>$25.00</td>
                                            <td>Ray-Ban</td>
                                            <td>$20.00</td>
                                            <td>30.0</td>
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
                                        <tr>
                                            <td>
                                                <div className="checkbox d-inline-block">
                                                    <input type="checkbox" className="checkbox-input" id="checkbox10" />
                                                    <label for="checkbox10" className="mb-0"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src="../assets/images/table/product/09.jpg" className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        Alloy Jewel Set
                                                        <p className="mb-0"><small>This is test Product</small></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>AJS01</td>
                                            <td>Jewellery</td>
                                            <td>$150.00</td>
                                            <td>Jazzin</td>
                                            <td>$50.00</td>
                                            <td>200.0</td>
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="modal fade" id="edit-note" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="popup text-left">
                                    <div className="media align-items-top justify-content-between">
                                        <h3 className="mb-3">Product</h3>
                                        <div className="btn-cancel p-0" data-dismiss="modal"><i className="las la-times"></i></div>
                                    </div>
                                    <div className="content edit-notes">
                                        <div className="card card-transparent card-block card-stretch event-note mb-0">
                                            <div className="card-body px-0 bukmark">
                                                <div className="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom">
                                                    <div className="quill-tool">
                                                    </div>
                                                </div>
                                                <div id="quill-toolbar1">
                                                    <p>Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.Virtual Digital Marketing Course every week on Monday</p>
                                                </div>
                                            </div>
                                            <div className="card-footer border-0">
                                                <div className="d-flex flex-wrap align-items-ceter justify-content-end">
                                                    <div className="btn btn-primary mr-3" data-dismiss="modal">Cancel</div>
                                                    <div className="btn btn-outline-primary" data-dismiss="modal">Save</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products_List