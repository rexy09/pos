import React from "react";

const Home = () => {
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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card card-transparent card-block card-stretch card-height border-none">
                                <div className="card-body p-0 mt-lg-2 mt-0">
                                    <h3 className="mb-3">Hi Graham, Good Morning</h3>
                                    <p className="mb-0 mr-4">Your dashboard gives you views of key performance or business process.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-4 card-total-sale">
                                                <div className="icon iq-icon-box-2 bg-info-light">
                                                    <img src="../assets/images/product/1.png" className="img-fluid" alt="" />
                                                </div>
                                                <div>
                                                    <p className="mb-2">Total Sales</p>
                                                    <h4>31.50</h4>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar mt-2">
                                                <span className="bg-info iq-progress progress-1" style={{ transition: "width 2s_ease 0s", width: "85%" }} data-percent="85">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-4 card-total-sale">
                                                <div className="icon iq-icon-box-2 bg-danger-light">
                                                    <img src="../assets/images/product/2.png" className="img-fluid" alt="" />
                                                </div>
                                                <div>
                                                    <p className="mb-2">Total Cost</p>
                                                    <h4>$ 4598</h4>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar mt-2">
                                                <span className="bg-danger iq-progress progress-1" style={{ transition: "width 2s_ease 0s", width: "70%" }} data-percent="70">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card card-block card-stretch card-height">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-4 card-total-sale">
                                                <div className="icon iq-icon-box-2 bg-success-light">
                                                    <img src="../assets/images/product/3.png" className="img-fluid" alt="" />
                                                </div>
                                                <div>
                                                    <p className="mb-2">Product Sold</p>
                                                    <h4>4589 M</h4>
                                                </div>
                                            </div>
                                            <div className="iq-progress-bar mt-2">
                                                <span className="bg-success iq-progress progress-1" style={{ transition: "width 2s_ease 0s", width: "75%" }} data-percent="75">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Overview</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton001"
                                                data-toggle="dropdown">
                                                This Month<i className="ri-arrow-down-s-line ml-1"></i>
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right shadow-none"
                                                aria-labelledby="dropdownMenuButton001">
                                                <a className="dropdown-item" href="#">Year</a>
                                                <a className="dropdown-item" href="#">Month</a>
                                                <a className="dropdown-item" href="#">Week</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="layout1-chart1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Revenue Vs Cost</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton002"
                                                data-toggle="dropdown">
                                                This Month<i className="ri-arrow-down-s-line ml-1"></i>
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right shadow-none"
                                                aria-labelledby="dropdownMenuButton002">
                                                <a className="dropdown-item" href="#">Yearly</a>
                                                <a className="dropdown-item" href="#">Monthly</a>
                                                <a className="dropdown-item" href="#">Weekly</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="layout1-chart-2" style={{ minHeight: "360px", position: "relative" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Top Products</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton006"
                                                data-toggle="dropdown">
                                                This Month<i className="ri-arrow-down-s-line ml-1"></i>
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right shadow-none"
                                                aria-labelledby="dropdownMenuButton006">
                                                <a className="dropdown-item" href="#">Year</a>
                                                <a className="dropdown-item" href="#">Month</a>
                                                <a className="dropdown-item" href="#">Week</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled row top-product list-unstyled row top-product mb-0 slick-initialized slick-slider mb-0">
                                        <li className="col-lg-3">
                                            <div className="card card-block card-stretch card-height mb-0">
                                                <div className="card-body">
                                                    <div className="bg-warning-light rounded">
                                                        <img src="../assets/images/product/01.png" className="style-img img-fluid m-auto p-3" alt="image" />
                                                    </div>
                                                    <div className="style-text text-left mt-3">
                                                        <h5 className="mb-1">Organic Cream</h5>
                                                        <p className="mb-0">789 Item</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-3">
                                            <div className="card card-block card-stretch card-height mb-0">
                                                <div className="card-body">
                                                    <div className="bg-danger-light rounded">
                                                        <img src="../assets/images/product/02.png" className="style-img img-fluid m-auto p-3" alt="image" />
                                                    </div>
                                                    <div className="style-text text-left mt-3">
                                                        <h5 className="mb-1">Rain Umbrella</h5>
                                                        <p className="mb-0">657 Item</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-3">
                                            <div className="card card-block card-stretch card-height mb-0">
                                                <div className="card-body">
                                                    <div className="bg-info-light rounded">
                                                        <img src="../assets/images/product/03.png" className="style-img img-fluid m-auto p-3" alt="image" />
                                                    </div>
                                                    <div className="style-text text-left mt-3">
                                                        <h5 className="mb-1">Serum Bottle</h5>
                                                        <p className="mb-0">489 Item</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-lg-3">
                                            <div className="card card-block card-stretch card-height mb-0">
                                                <div className="card-body">
                                                    <div className="bg-success-light rounded">
                                                        <img src="../assets/images/product/02.png" className="style-img img-fluid m-auto p-3" alt="image" />
                                                    </div>
                                                    <div className="style-text text-left mt-3">
                                                        <h5 className="mb-1">Organic Cream</h5>
                                                        <p className="mb-0">468 Item</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-transparent card-block card-stretch mb-4">
                                <div className="card-header d-flex align-items-center justify-content-between p-0">
                                    <div className="header-title">
                                        <h4 className="card-title mb-0">Best Item All Time</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <div><a href="#" className="btn btn-primary view-btn font-size-14">View All</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-block card-stretch card-height-helf">
                                <div className="card-body card-item-right">
                                    <div className="d-flex align-items-top">
                                        <div className="bg-warning-light rounded">
                                            <img src="../assets/images/product/04.png" className="style-img img-fluid m-auto" alt="image" />
                                        </div>
                                        <div className="style-text text-left">
                                            <h5 className="mb-2">Coffee Beans Packet</h5>
                                            <p className="mb-2">Total Sell : 45897</p>
                                            <p className="mb-0">Total Earned : $45,89 M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-block card-stretch card-height-helf">
                                <div className="card-body card-item-right">
                                    <div className="d-flex align-items-top">
                                        <div className="bg-danger-light rounded">
                                            <img src="../assets/images/product/05.png" className="style-img img-fluid m-auto" alt="image" />
                                        </div>
                                        <div className="style-text text-left">
                                            <h5 className="mb-2">Bottle Cup Set</h5>
                                            <p className="mb-2">Total Sell : 44359</p>
                                            <p className="mb-0">Total Earned : $45,50 M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-block card-stretch card-height-helf">
                                <div className="card-body">
                                    <div className="d-flex align-items-top justify-content-between">
                                        <div className="">
                                            <p className="mb-0">Income</p>
                                            <h5>$ 98,7800 K</h5>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown">
                                                <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton003"
                                                    data-toggle="dropdown">
                                                    This Month<i className="ri-arrow-down-s-line ml-1"></i>
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-right shadow-none"
                                                    aria-labelledby="dropdownMenuButton003">
                                                    <a className="dropdown-item" href="#">Year</a>
                                                    <a className="dropdown-item" href="#">Month</a>
                                                    <a className="dropdown-item" href="#">Week</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="layout1-chart-3" className="layout-chart-1"></div>
                                </div>
                            </div>
                            <div className="card card-block card-stretch card-height-helf">
                                <div className="card-body">
                                    <div className="d-flex align-items-top justify-content-between">
                                        <div className="">
                                            <p className="mb-0">Expenses</p>
                                            <h5>$ 45,8956 K</h5>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown">
                                                <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton004"
                                                    data-toggle="dropdown">
                                                    This Month<i className="ri-arrow-down-s-line ml-1"></i>
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-right shadow-none"
                                                    aria-labelledby="dropdownMenuButton004">
                                                    <a className="dropdown-item" href="#">Year</a>
                                                    <a className="dropdown-item" href="#">Month</a>
                                                    <a className="dropdown-item" href="#">Week</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="layout1-chart-4" className="layout-chart-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Order Summary</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton005"
                                                data-toggle="dropdown">
                                                This Month<i className="ri-arrow-down-s-line ml-1"></i>
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right shadow-none"
                                                aria-labelledby="dropdownMenuButton005">
                                                <a className="dropdown-item" href="#">Year</a>
                                                <a className="dropdown-item" href="#">Month</a>
                                                <a className="dropdown-item" href="#">Week</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap align-items-center mt-2">
                                        <div className="d-flex align-items-center progress-order-left">
                                            <div className="progress progress-round m-0 orange conversation-bar" data-percent="46">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value text-secondary">46%</div>
                                            </div>
                                            <div className="progress-value ml-3 pr-5 border-right">
                                                <h5>$12,6598</h5>
                                                <p className="mb-0">Average Orders</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center ml-5 progress-order-right">
                                            <div className="progress progress-round m-0 primary conversation-bar" data-percent="46">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value text-primary">46%</div>
                                            </div>
                                            <div className="progress-value ml-3">
                                                <h5>$59,8478</h5>
                                                <p className="mb-0">Top Orders</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div id="layout1-chart-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
export default Home