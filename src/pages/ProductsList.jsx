import { React, useEffect, useState } from 'react';
import { useGetProductListQuery, useAddProductMutation, useEditProductMutation, useDeleteProductMutation } from '../services/productListSlice';
import { useGetProductCategoriesQuery } from '../services/productCategoriesSlice';
import { CheckInternetConnection, Loader, EmptyTable } from '../components';

const ProductsList = () => {
    // Hooks Section
    var baseurl = 'http://127.0.0.1:8000'

    // Fetching All Products
    const { data: productList, isFetching, isError } = useGetProductListQuery();
    const { data: productCategoriesList } = useGetProductCategoriesQuery();

    // Editing All Products
    // - Cloning Fetched Object
    // const [editproductprofile, setEditProduct] = useState({})

    // - Capturing new inputs
    const [editproductid, setEditProductId] = useState(null)
    const [editproductname, setEditProductName] = useState(null)
    const [editproductcategory, setEditProductCategory] = useState(null)
    const [editproductbardcode, setEditProductBarcode] = useState(null)
    const [editproductbrand, setEditProductBrand] = useState(null)
    const [editproductspecification, setEditProductSpecification] = useState(null)
    const [editproductStoked, setEditProductStoked] = useState(false)
    const [editproductdescription, setEditProductDescription] = useState(null)
    const [editproductminquantity, setEditProductMinQuantity] = useState(null)
    const [editproductwholesaleprice, setEditProductWholesalePrice] = useState(null)
    const [editproductretailprice, setEditProductRetailPrice] = useState(null)
    const [editproductimage, setEditProductImage] = useState(null)
    const [imagetobase64, setEditProductImageBase64] = useState(null)


    let extractedThumbnail

    const [useEditProduct] = useEditProductMutation()
    const handleStocked = (e) => {
        e.preventDefault();
        setEditProductStoked(!editproductStoked)
    }


    // Thumbanil Image to base64
    // const ThumbnailBase64Converter = (e) => {
    //     var file = e.target.files[0];
    //     var reader = new FileReader();
    //     reader.onloadend = () => {
    //         extractedThumbnail = reader.result;
    //         setEditProductImage(extractedThumbnail)
    //     };
    //     reader.readAsDataURL(file);

    // }



    const handleCapturedProductData = (e) => {
        e.preventDefault();

        const thumbnailImage = new FormData();
        thumbnailImage.append('editproductimage',editproductimage)
        
        var editproductprofile = {
            id: parseInt(editproductid),
            category: parseInt(editproductcategory),
            name: editproductname,
            barcode: editproductbardcode,
            brand: editproductbrand,
            specification: editproductspecification,
            description: editproductdescription,
            stocked: editproductStoked,
            min_quantity: parseInt(editproductminquantity),
            wholesale_price: parseFloat(editproductwholesaleprice),
            retail_price: parseFloat(editproductretailprice),
            image: thumbnailImage
        }
        
        useEditProduct(editproductprofile)
    }

    // Deleting All Products
    const [deleteproductname, setDeleteProductName] = useState('')
    const [deleteproductid, setDeleteProductId] = useState()
    const [deleteProduct] = useDeleteProductMutation()
    const deleteProductSubmit = (e) => {
        e.preventDefault()
        deleteProduct({ id: deleteproductid })
    }

    // Adding All Products
    const [productprofile, setAddNewProduct] = useState({})
    const [productthumbnail, setProductThumbnail] = useState(null)
    const [productphotos, setProductPhotos] = useState(null)
    const [productcategory, setProductCategory] = useState(0)
    const [productminquantity, setProductMinQuantity] = useState(0)
    const [productwholesaleprice, setProductWholesalePrice] = useState(0)
    const [productretailprice, setProductRetailPrice] = useState(0)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddNewProduct(values => ({ ...values, [name]: value }))
    }

    const [addProduct] = useAddProductMutation()
    const addProductSubmit = (e) => {
        e.preventDefault();

        // const imageData1 = new FormData()
        // imageData1.append("productthumbnail", productthumbnail)

        // const imageData2 = new FormData()
        // imageData2.append('name', productphotos)

        // console.log(productthumbnail)

        // var extractedThumbnail
        // var reader = new FileReader();
        // reader.onloadend = () => {
        //     extractedThumbnail = reader.result;
        // console.log(extractedThumbnail)

        // };
        // // reader.readAsDataURL(productthumbnail);
        // reader.readAsText(productthumbnail);

        var injectedObjects = {
            category: parseInt(productcategory),
            min_quantity: parseInt(productminquantity),
            wholesale_price: parseFloat(productwholesaleprice),
            retail_price: parseFloat(productretailprice),
            image: productthumbnail.name,
            product_images: productphotos
        }
        var updatedproductprofile = { ...productprofile, ...injectedObjects }
        addProduct(updatedproductprofile)
    }
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
            </div>      <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex flex-wrap flex-wrap align-items-center justify-content-between mb-4">
                                <div>
                                    <h4 className="mb-3">Product List</h4>
                                    <p className="mb-0">The product list effectively dictates product presentation and provides space<br /> to list your products and offering in the most appealing way.</p>
                                </div>
                                <a data-toggle="modal" data-target="#new-product" className="btn btn-primary add-list"><i className="las la-plus mr-3"></i>Add Product</a>
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
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Barcode</th>
                                            <th>Category</th>
                                            <th>Brand</th>
                                            <th>Description</th>
                                            <th>Specification</th>
                                            <th>Min quantity</th>
                                            <th>Wholesale price</th>
                                            <th>Retail price</th>
                                            <th>Stocked</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {
                                            productList.length == 0 ?
                                                <EmptyTable name='Products' />
                                                :
                                                productList.map(product => (
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox d-inline-block">
                                                                <input type="checkbox" className="checkbox-input" id="checkbox2" />
                                                                <label for="checkbox2" className="mb-0"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src='' className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                            </div>
                                                        </td>
                                                        <td>{product.name}</td>
                                                        <td>{product.barcode}</td>
                                                        <td>{product.category}</td>
                                                        <td>{product.brand}</td>
                                                        <td>{product.description}</td>
                                                        <td>{product.specification}</td>
                                                        <td>{product.min_quantity}</td>
                                                        <td>{product.wholesale_price}</td>
                                                        <td>{product.retail_price}</td>
                                                        <td>{product.stocked ? <h6 className='badge bg-success'>Stocked</h6>
                                                            : <h6 className='badge badge-danger'>Not Stocked</h6>
                                                        }</td>
                                                        <td>
                                                            <div className="d-flex align-items-center list-action">
                                                                <a className="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                                                    href="#"><i className="ri-eye-line mr-0"></i></a>
                                                                <a className="badge bg-success mr-2" onClick={() => { setEditProductName(product.name); setEditProductCategory(product.category); setEditProductBarcode(product.barcode); setEditProductBrand(product.brand); setEditProductSpecification(product.specification); setEditProductDescription(product.description); setEditProductMinQuantity(product.min_quantity); setEditProductWholesalePrice(product.wholesale_price); setEditProductRetailPrice(product.retail_price); setEditProductId(product.id); setEditProductStoked(product.stocked); setEditProductImage(product.image) }} data-toggle="modal" data-target="#edit-product" data-placement="top" title="" data-original-title="Edit"
                                                                    href="#"><i className="ri-pencil-line mr-0"></i></a>
                                                                <a className="badge bg-warning mr-2" onClick={() => { setDeleteProductName(product.name); setDeleteProductId(product.id) }} data-toggle="modal" data-target="#delete-product" data-placement="top" title="" data-original-title="Delete"
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
                {/* Adding Product Model */}
                <div className="modal fade" id="new-product" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="popup text-left">
                                    <h4 className="mb-3">Add New Product</h4>
                                    <div className="content create-workform bg-body">
                                        <form>
                                            <div className='row'>
                                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12'>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product name</label>
                                                        <input type="text" className="form-control" name='name' value={productprofile.name || ""} onChange={handleChange} placeholder="Product name" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product category</label>
                                                        <select value={productcategory} onChange={(e) => setProductCategory(e.target.value)} className="form-control" aria-label="">
                                                            <option selected>Select category</option>
                                                            {
                                                                productCategoriesList == undefined ? <h1>Loading...</h1> :
                                                                    productCategoriesList.map(category => (
                                                                        <option value={category.id}>{category.name}</option>
                                                                    ))
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product barcode</label>
                                                        <input type="text" className="form-control" name='barcode' value={productprofile.barcode} onChange={handleChange} placeholder="Product barcode" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product brand</label>
                                                        <input type="text" className="form-control" name='brand' value={productprofile.brand} onChange={handleChange} placeholder="Product brand" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product specification</label>
                                                        <input type="text" className="form-control" name='specification' value={productprofile.specification} onChange={handleChange} placeholder="Product specification" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product description</label>
                                                        <input type="text" className="form-control" name='description' value={productprofile.description} onChange={handleChange} placeholder="Product description" />
                                                    </div>
                                                </div>
                                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12'>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product min quantity</label>
                                                        <input type="number" className="form-control" name='productminquantity' value={productminquantity} onChange={(e) => setProductMinQuantity(e.target.value)} placeholder="Product min quantity" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product wholesale price</label>
                                                        <input type="number" className="form-control" name='productwholesaleprice' value={productwholesaleprice} onChange={(e) => setProductWholesalePrice(e.target.value)} placeholder="Product wholesale price" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product retail price</label>
                                                        <input type="number" className="form-control" name='productretailprice' value={productretailprice} onChange={(e) => setProductRetailPrice(e.target.value)} placeholder="Product retail price" />
                                                    </div>
                                                    {
                                                        productthumbnail != null ?
                                                            <div>
                                                                <img src={URL.createObjectURL(productthumbnail)} style={{ height: "200px", width: "200px" }} /> <h6>{productthumbnail.name}</h6>
                                                            </div> :
                                                            <h6></h6>
                                                    }

                                                    <div className="pb-3">
                                                        <label className="mb-2">Product thumbnail</label><br></br>
                                                        <input type="file" accept="image/*" onChange={(e) => setProductThumbnail(e.target.files[0])} placeholder="Product thumbnail" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product images</label><br></br>
                                                        <input type="file" accept="image/*" multiple onChange={(e) => setProductPhotos(e.target.files)} placeholder="Product photos" />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-12 mt-4">
                                                <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                                                    <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                                    <div className="btn btn-outline-primary" onClick={addProductSubmit} data-dismiss="modal">Create</div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Editing Product Model */}
                <div className="modal fade" id="edit-product" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="popup text-left">
                                    <h4 className="mb-3">Edit Product</h4>
                                    <div className="content create-workform bg-body">
                                        <form encType='multipart/form-data'>
                                            <div className='row'>
                                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product name</label>
                                                        <input type="text" className="form-control" name='editproductname' value={editproductname} onChange={(e) => setEditProductName(e.target.value)} placeholder="Product name" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product category</label>
                                                        <select value={editproductcategory} onChange={(e) => setEditProductCategory(e.target.value)} className="form-control" aria-label="">
                                                            <option selected>Select category</option>
                                                            {
                                                                productCategoriesList == undefined ? <h1>Loading...</h1> :
                                                                    productCategoriesList.map(category => (
                                                                        <option value={category.id}>{category.name}</option>

                                                                    ))
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product barcode</label>
                                                        <input type="text" className="form-control" name='barcode' value={editproductbardcode} onChange={(e) => setEditProductBarcode(e.target.value)} placeholder="Product barcode" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product brand</label>
                                                        <input type="text" className="form-control" name='brand' value={editproductbrand} onChange={(e) => setEditProductBrand(e.target.value)} placeholder="Product brand" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product specification</label>
                                                        <input type="text" className="form-control" name='specification' value={editproductspecification} onChange={(e) => setEditProductSpecification(e.target.value)} placeholder="Product specification" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product description</label>
                                                        <input type="text" className="form-control" name='description' value={editproductdescription} onChange={(e) => setEditProductDescription(e.target.value)} placeholder="Product description" />
                                                    </div>
                                                </div>
                                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product Stoked</label><br></br>
                                                        <input type="checkbox" name='productstoked' value='Any' checked={editproductStoked} onChange={handleStocked} />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product min quantity</label>
                                                        <input type="number" className="form-control" name='productminquantity' value={editproductminquantity} onChange={(e) => setEditProductMinQuantity(e.target.value)} placeholder="Product min quantity" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product wholesale price</label>
                                                        <input type="number" className="form-control" name='productwholesaleprice' value={editproductwholesaleprice} onChange={(e) => setEditProductWholesalePrice(e.target.value)} placeholder="Product wholesale price" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product retail price</label>
                                                        <input type="number" className="form-control" name='productretailprice' value={editproductretailprice} onChange={(e) => setEditProductRetailPrice(e.target.value)} placeholder="Product retail price" />
                                                    </div>
                                                    <div className="pb-3">
                                                        <label className="mb-2">Product thumbnail</label><br></br>
                                                        <input type="file" accept="image/png,image/jpeg" name='editproductimage' onChange={(e) => setEditProductImage(e.target.files[0])} />
                                                    </div>
                                                    {/* {
                                                editproductimage != null ?
                                                    <div>
                                                        <img src={URL.createObjectURL(editproductimage)} style={{ height: "200px", width: "200px" }} /> <h6>{editproductimage.name}</h6>
                                                    </div> :
                                                    <h6></h6>
                                            } */}

                                                    <div className="pb-3">
                                                        <label className="mb-2">Product images</label><br></br>
                                                        <input type="file" accept="image/png,image/jpeg" multiple onChange={(e) => setProductPhotos(e.target.files)} placeholder="Product photos" />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-12 mt-4">
                                                <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                                                    <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                                    <button className="btn btn-outline-primary" onClick={handleCapturedProductData} type='submit' data-dismiss="modal">Edit</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Deleting Product Model */}
                <div className="modal fade" id="delete-product" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="popup text-left">
                                    <h4 className="mb-3">Delete Product</h4>
                                    <div className="content create-workform bg-body">

                                        <div className="pb-3">
                                            <h5 className="mb-2">Are you sure your want to delete ?</h5>
                                            <p style={{ color: "red" }}>{deleteproductname}</p>
                                        </div>
                                        <div className="col-lg-12 mt-4">
                                            <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                                                <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                                <div className="btn btn-outline-primary" onClick={deleteProductSubmit} data-dismiss="modal">Delete</div>
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
export default ProductsList