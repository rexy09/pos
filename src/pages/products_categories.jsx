import React from 'react';

const Products_Categories = () => {
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
            <div className="content-page">
                <div className="container-fluid add-form-list">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Add category</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form action="page-list-category.html" data-toggle="validator">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Image</label>
                                                    <input type="file" className="form-control image-file" name="pic"
                                                        accept="image/*" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Product Name *</label>
                                                    <input type="text" className="form-control" placeholder="Enter Product Name"
                                                        required />
                                                        <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Category *</label>
                                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                                        <option>Beauty</option>
                                                        <option>Grocery</option>
                                                        <option>Food</option>
                                                        <option>Furniture</option>
                                                        <option>Shoes</option>
                                                        <option>Frames</option>
                                                        <option>Jewellery</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Code *</label>
                                                    <input type="text" className="form-control" placeholder="Enter Code"
                                                        required />
                                                        <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Add category</button>
                                        <button type="reset" className="btn btn-danger">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Products_Categories