import { React, useState } from 'react';
import { useGetProductCategoriesQuery, useAddProductCategoriesMutation, useEditProductCategoriesMutation, useDeleteProductCategoriesMutation } from '../services/productCategoriesSlice';
import { CheckInternetConnection, Loader, EmptyTable } from '../components';
import 'react-toastify/dist/ReactToastify.css';

const ProductsCategories = () => {
    // Hooks Section

    // Deleting All Products Categories
    const [deletecategoryid, setDeleteCatId] = useState();
    const [deletecategoryname, setDeleteCatName] = useState();
    const [useDeleteProductCategories] = useDeleteProductCategoriesMutation()
    const deleteProductCategoriesSubmit = (e) => {
        e.preventDefault();
        useDeleteProductCategories({ id: deletecategoryid })
    }

    // Editing All Products Categories
    const [categoryname, setEditCatName] = useState();
    const [categoryid, setEditCatId] = useState();
    const [editProductCategories] = useEditProductCategoriesMutation()
    const editProductCategorySubmit = (e) => {
        e.preventDefault();
        if (categoryname == '' || categoryname.length < 4) {
            alert('Please use a relevant name');
    
        } else {
            editProductCategories({ id: categoryid, name: categoryname })

        }
    }

    // Adding All Products Categories
    const [newproductcategory, setNewProductCategory] = useState('')
    const [addProductCategories] = useAddProductCategoriesMutation()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newproductcategory == '' || newproductcategory.length < 4) {
            alert('Please use a relevant name');
        } else {
            addProductCategories({ name: newproductcategory })
            // setNewProductCategory('')
        }
    }

    // Fetching All Products Categories
    const { data: productCategoriesList, isFetching, isError } = useGetProductCategoriesQuery();
    if (isFetching) {
        return <Loader />
    }
    if (isError) {
        return <CheckInternetConnection />
    }
    return (
        <div>
            {/* Adding Product Category Model */}
            <div className="modal fade" id="new-product-category" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="popup text-left">
                                <h4 className="mb-3">Add New Product Category</h4>
                                <div className="content create-workform bg-body">
                                    <form>
                                        <div className="pb-3">
                                            <label className="mb-2">Category name</label>
                                            <input type="text" className="form-control" value={newproductcategory} id="new-productcategory" onChange={(e) => setNewProductCategory(e.target.value)} placeholder="Product category name" />
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                                                <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                                <div className="btn btn-outline-primary" onClick={handleSubmit} data-dismiss="modal">Create</div>
                                            </div>
                                        </div>
                                    </form>

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
                                <a data-toggle="modal" data-target="#new-product-category" className="btn btn-primary add-list"><i className="las la-plus mr-3"></i>Add Category</a>
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
                                            <th>Category name</th>
                                            <th>Category code</th>

                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {
                                            productCategoriesList == 0 ?
                                            <EmptyTable name='Category'/>
                                            :productCategoriesList.map(category => (

                                                <tr key={category.id}>
                                                    <td>
                                                        <div className="checkbox d-inline-block">
                                                            <input type="checkbox" className="checkbox-input" id="checkbox2" />
                                                            <label for="checkbox2" className="mb-0"></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                {category.name}
                                                                {/* <p className="mb-0"><small>This is test Product</small></p> */}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CREM01</td>

                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <a className="badge badge-info mr-2" title="" data-original-title="View"
                                                                href="#"><i className="ri-eye-line mr-0"></i></a>
                                                            <a className="badge bg-success mr-2" data-toggle="modal" onClick={() => { setEditCatName(category.name); setEditCatId(category.id); }} data-target="#edit-product-category" title="" data-original-title="Edit"
                                                                href="#"><i className="ri-pencil-line mr-0"></i></a>
                                                            <a className="badge bg-warning mr-2" data-toggle="modal" onClick={() => { setDeleteCatName(category.name); setDeleteCatId(category.id); }} data-target="#delete-product-category" title="" data-original-title="Delete"
                                                                href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                                        </div>
                                                    </td>
                                                    {/* Editing Product Category Model */}
                                                    <div className="modal fade" id="edit-product-category" tabIndex="-1" role="dialog" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-body">
                                                                    <div className="popup text-left">
                                                                        <h4 className="mb-3">Edit Product Category</h4>
                                                                        <div className="content create-workform bg-body">
                                                                            <form>
                                                                                <div className="pb-3">
                                                                                    <label className="mb-2">Category name</label>
                                                                                    <input type="text" className="form-control" value={categoryname} id="new-productcategory" onChange={(e) => setEditCatName(e.target.value)} />
                                                                                </div>
                                                                                <div className="col-lg-12 mt-4">
                                                                                    <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                                                                                        <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                                                                        <div className="btn btn-outline-primary" onClick={editProductCategorySubmit} data-dismiss="modal">Edit</div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Deleting Product Category Model */}
                                                    <div className="modal fade" id="delete-product-category" tabIndex="-1" role="dialog" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-body">
                                                                    <div className="popup text-left">
                                                                        <h4 className="mb-3">Delete Product Category</h4>
                                                                        <div className="content create-workform bg-body">

                                                                            <div className="pb-3">
                                                                                <h5 className="mb-2">Are you sure your want to delete ?</h5>
                                                                                <p style={{ color: "red" }}>{deletecategoryname}</p>
                                                                            </div>
                                                                            <div className="col-lg-12 mt-4">
                                                                                <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                                                                                    <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                                                                    <div className="btn btn-outline-primary" onClick={deleteProductCategoriesSubmit} data-dismiss="modal">Delete</div>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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