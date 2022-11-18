import React, { useEffect, useState } from "react";
import UserLayout from '../component/UserLayout';
import { Dropdown, Modal } from 'react-bootstrap';
import RtdDatatable from "../component/DataTable/RtdDatatable";
import UploadImg from "../images/cloud-img.svg";
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import axios from "axios";

import ModalImg from "../images/modal-full-img.png";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function Approval() {

    const [value, setvalue] = useState('');
    const [apiData, setApidata] = useState([]);


    const handleOnchange = (val) => {
        setvalue(val);
    };


    useEffect(() => {
        setCount((count) => count + 1);
        var data = JSON.stringify({
            "page": 1,
            "limit": 15,
            "search": ""
        });

        var config = {
            method: 'post',
            url: 'https://node.staging.rentechdigital.com:3500/api/v1/displayitem',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg2Njg4MDgsImV4cCI6MTY3MTI2MDgwOH0.2V5zH-bCLtfN9_oIWrig1MRzbGs14NLAcHSi9dlNXtk',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data.data);
                setUsers(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const [ViewModel, setViewModel] = useState(false);
    const [EditModel, setEditModel] = useState(false);
    const [DeleteModel, setDeleteModel] = useState(false);
    const [ProductModel, setProductModel] = useState(false);
    const [currentId, setCurrentId] = useState('')
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0);

    //Invoke link when user click
    const invokebutton = () =>{
        // window.location.href='https://swipecart-adminpanel.web.app/#/minified:Jr';
        window.open("https://swipecart-adminpanel.web.app/#/LogInScreen","_blank");
    }

    // show data when user click
    const handleviewdata = () => {
        setViewModel(true)
    }


    //Open form when userclick
    const showedittform = () => {
        setEditModel(true)

    }

    const deleteimage = () => {

        var config = {
            method: 'post',
            url: 'https://node.staging.rentechdigital.com:3500/api/v1/deleteitem/' + currentId,
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg2OTAzNzgsImV4cCI6MTY3MTI4MjM3OH0.ZXG8qNYRWcSuZap5p8qvoZTg-ROw2D176VSXIXGteuc'
            }
        };


        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                getData()
                setDeleteModel(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //show user data when click
    const handleproductmodel = () => {
        setProductModel(true)
        var data = JSON.stringify({
            "page": 1,
            "limit": 15,
            "search": ""
        });

        var config = {
            method: 'post',
            url: 'https://node.staging.rentechdigital.com:3500/api/v1/displayitem',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg2Njg4MDgsImV4cCI6MTY3MTI2MDgwOH0.2V5zH-bCLtfN9_oIWrig1MRzbGs14NLAcHSi9dlNXtk',
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setUsers(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    //Open delete model when user click
    const handleDelete = (data) => {
        console.log('data :: ', data)
        setCurrentId(data)
        setDeleteModel(true)
    }


    const makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }



    const getData = () => {
        var data = JSON.stringify({
            "product": {
                "title": "product",
                "description": "new product is here"
            },
            "meta": {
                "title": "product",
                "metaDescription": "product description here",
                "keyword": [
                    "god",
                    "kailash"
                ]
            },
            "status": {
                "seo": "open",
                "ui": "Raw"
            },
            "collections": {
                "tag": [
                    "shiva",
                    "kailash"
                ],
                "category": [
                    "god"
                ]
            },
            "link": {
                "image_link": makeid(16),
                "ref_link": makeid(16)
            }
        });

        var config = {
            method: 'post',
            url: 'https://node.staging.rentechdigital.com:3500/api/v1/additem',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg2MDM5MTcsImV4cCI6MTY3MTE5NTkxN30.3osY8t74BBuAStdBODKJj5Ng7pfcYRdymY1jsXvwCpI',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log((response.data.data));
                setApidata(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const [option, set_option] = useState({
        sizePerPage: 10,
        search: "",
        selectableRows: true,
        totalRecord: 100,
        page: 0,
        sort: "id",
        order: "ASC",
    });

    const data = [
        {
            id: "1",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "2",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "3",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "4",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "5",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "6",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "7",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "8",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "9",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
        {
            id: "10",
            productname: "Saved audience",
            meta: "2,444,200,000 - 2,875,500,000",
            status: "",
            tags: "",
            category: "God",
            links: "",
            action: "",
        },
    ];


    const columns = [
        {
            value: "id",
            label: "ID",
            options: {
                filter: false,
                sort: false,

            },
        },
        {
            value: "product",
            label: "Product Name",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "text-center" }),
                customBodyRender: (data, i) => {
                    console.log('dta2555 :: ', data)
                    return (
                        <div className="product-txt">
                            <p title="Kingdom king palace shiva Kingdom king palace shiva">{data[i].product.title}</p>
                            <div title="Download this Free Photo about Kingdom king palace shiva india, and ">{data[i].product.description}</div>
                        </div>
                    );
                },
            },
        },
        {
            value: "meta",
            label: "Meta",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (data, i) => {
                    return (
                        <div className="product-txt">
                            <p title="Kingdom king palace shiva Kingdom king palace shiva">{data[i].meta.title}</p>
                            <div title="Download this Free Photo about Kingdom king palace shiva india, and ">{data[i].meta.metaDescription}</div>
                        </div>
                    );
                },
            },
        },
        {
            value: "status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (data, i) => {
                    return (
                        <div className="d-flex align-items-center">
                            <div className="position-relative">
                                <span className="comn-status-class red-bg-stats">{data[i].status.seo}</span>
                                <bdi className="comn-active-class red-active"></bdi>
                            </div>
                            <div className="position-relative">
                                <span className="comn-status-class yellow-bg-stats ms-3">{data[i].status.ui}</span>
                                <bdi className="comn-active-class blue-active"></bdi>
                            </div>

                        </div>
                    );
                },
            },
        },
        {
            value: "tags",
            label: "Tags",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (data, i) => {
                    return (
                        <div className="img-name-tag">
                            {/* <span className="comn-status-class red-bg-stats">{data[i].collections.tag}</span> */}
                            <div className="comn-status-class red-bg-stats">{data[i].collections.tag[i]}</div>

                        </div>
                    );
                },
            },
        },
        {
            value: "category",
            label: "Category",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (data, i) => {
                    return (
                        <div className="img-name-tag">
                            <span className="comn-status-class red-bg-stats">{data[i].collections.category}</span>
                        </div>
                    );
                },

            },
        },
        {
            value: "links",
            label: "Links",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (data, i) => {
                    return (
                        <div className="link-icon-class">
                            <p className="comn-status-class red-bg-stats" >

                                <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 19.5017L13 13.5017M15 8.50171C15 12.3677 11.866 15.5017 8 15.5017C4.13401 15.5017 1 12.3677 1 8.50171C1 4.63572 4.13401 1.50171 8 1.50171C11.866 1.50171 15 4.63572 15 8.50171Z" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </p>
                            <p className="comn-status-class green-bg-stats" onClick={invokebutton}>
                                <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 16.5024H2.5C1.39543 16.5024 0.5 15.607 0.5 14.5024V3.50244C0.5 2.39787 1.39543 1.50244 2.5 1.50244H6.5V3.50244H2.5V14.5024H13.5V10.5024H15.5V14.5024C15.5 15.607 14.6046 16.5024 13.5 16.5024ZM8.2 10.2094L6.79 8.79544L13.083 2.50244H9.5V0.502441H16.5V7.50244H14.5V3.91744L8.2 10.2094Z" fill="#27AE60" />
                                </svg>
                            </p>
                            <p className="comn-status-class sky-bg-stats" onClick={handleviewdata}>
                                <svg width="20" height="20" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13.5017L5.58579 8.91592C6.36683 8.13487 7.63316 8.13487 8.41421 8.91592L13 13.5017M11 11.5017L12.5858 9.91592C13.3668 9.13487 14.6332 9.13487 15.4142 9.91592L17 11.5017M11 5.50171H11.01M3 17.5017H15C16.1046 17.5017 17 16.6063 17 15.5017V3.50171C17 2.39714 16.1046 1.50171 15 1.50171H3C1.89543 1.50171 1 2.39714 1 3.50171V15.5017C1 16.6063 1.89543 17.5017 3 17.5017Z" stroke="#56CCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </p>
                        </div>
                    );
                },
            },
        },
        {
            value: "id",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (data, i) => {
                    return (
                        <div className="action-icon-class">
                            <p className="comn-status-class violet-bg-stats" onClick={handleproductmodel}>
                                {/*  onClick={() => setProductModel(true)} */}
                                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9998 8.00171C13.9998 9.65856 12.6566 11.0017 10.9998 11.0017C9.3429 11.0017 7.99976 9.65856 7.99976 8.00171C7.99976 6.34485 9.3429 5.00171 10.9998 5.00171C12.6566 5.00171 13.9998 6.34485 13.9998 8.00171Z" stroke="#BB6BD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.45801 8.00168C2.73228 3.94459 6.52257 1.00171 11.0002 1.00171C15.4778 1.00171 19.2681 3.94462 20.5424 8.00175C19.2681 12.0588 15.4778 15.0017 11.0002 15.0017C6.52256 15.0017 2.73226 12.0588 1.45801 8.00168Z" stroke="#BB6BD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </p>
                            <p className="comn-status-class blue-bg-stats" onClick={showedittform}>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5858 1.0875C11.3668 0.306447 12.6332 0.306447 13.4142 1.0875C14.1953 1.86854 14.1953 3.13487 13.4142 3.91592L12.6213 4.70882L9.79289 1.88039L10.5858 1.0875Z" fill="#2F80ED" />
                                    <path d="M8.37868 3.2946L0 11.6733V14.5017H2.82842L11.2071 6.12303L8.37868 3.2946Z" fill="#2F80ED" />
                                </svg>
                            </p>
                            <p className="comn-status-class red-bg-stats" onClick={() => handleDelete(data[i].id)}>
                                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.49902 16.5017C1.49902 17.6017 2.39902 18.5017 3.49902 18.5017H11.499C12.599 18.5017 13.499 17.6017 13.499 16.5017V4.50171H1.49902V16.5017ZM3.49902 6.50171H11.499V16.5017H3.49902V6.50171ZM10.999 1.50171L9.99902 0.501709H4.99902L3.99902 1.50171H0.499023V3.50171H14.499V1.50171H10.999Z" fill="#EB5757" />
                                </svg>

                            </p>
                        </div>
                    );
                },
            },
        },
    ];


    const tableCallBack = (option) => {
        set_option(option);
    };





    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="comn-title-main d-block  d-md-flex align-items-center justify-content-between">
                                    <h1 className="mb-0">Approval Images</h1>
                                    <div className='d-sm-flex align-items-center mt-3 mt-md-0'>
                                        <div className="d-block position-relative">
                                            <input
                                                type="search"
                                                className="form-control login-comn-input searchbar ps-5"
                                                placeholder="Search Anything"
                                            />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                fill="#6C6A81"
                                                className="bi bi-search fix-in-icon"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </div>
                                        <div className='ms-sm-3 mt-3 mt-sm-0'>
                                            <button className='filter-btn'>
                                                <a>
                                                    <span>Filter
                                                        <svg width="10" height="6" className='ms-2' viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0L5 5.52773L10 0H0Z" fill="#333333" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </button>
                                            <button onClick={getData} className='filter-btn ms-2'>
                                                <a>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 16" className='me-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0.227051C7.55228 0.227051 8 0.708666 8 1.30277V6.68136H13C13.5523 6.68136 14 7.16297 14 7.75708C14 8.35118 13.5523 8.83279 13 8.83279H8V14.2114C8 14.8055 7.55228 15.2871 7 15.2871C6.44772 15.2871 6 14.8055 6 14.2114V8.83279H1C0.447715 8.83279 0 8.35118 0 7.75708C0 7.16297 0.447715 6.68136 1 6.68136L6 6.68136V1.30277C6 0.708666 6.44772 0.227051 7 0.227051Z" fill="#333333" />
                                                        </svg>
                                                    </span> Add Bulk Device</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="comn-table-black-bg">
                                    <div className="mt-3">
                                        <RtdDatatable option={option} data={apiData} columns={columns} tableCallBack={tableCallBack} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>

            {/* ========== view Modal =============  */}

            <Modal show={ViewModel} onHide={() => setViewModel(false)} size="lg" className="img-popup-modal" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body className="p-0 m-0">
                    <div className="modal-img">
                        <img src={ModalImg} alt="" className="img-fluid" />
                    </div>
                </Modal.Body>
            </Modal>


            {/* ========== Edit Modal =============  */}

            <Modal show={EditModel} onHide={() => setEditModel(false)} size="xl" className="edit-modal-style" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="px-sm-5" closeButton>
                    <h4>Edit the Image</h4>
                </Modal.Header>
                <Modal.Body className="px-sm-5 pt-0">
                    <div className="row">
                        <div className="col-12 order-md-0 order-1 mt-3 mt-md-0">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center ms-auto">
                                    <button className="comn-btn-class cancle-btn-class w-100 me-2" type="submit" >
                                        Cancel
                                    </button>
                                    <button className="comn-btn-class green-bg-btn  w-100 ms-2" type="submit">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 order-0 order-md-1">
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <div className="bdr-field-cust">
                                        <div className="field-cust-tlt">Product</div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div>
                                                    <label className="d-block login-label-text mb-2">
                                                        Title
                                                    </label>
                                                    <input

                                                        type="text"
                                                        className="form-control login-comn-input"
                                                        name="title"
                                                        placeholder="Image Title"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div>
                                                    <label className="d-block login-label-text mb-2">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        rows={3}
                                                        className="form-control login-comn-input pt-2 h-100"
                                                        placeholder="Description..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bdr-field-cust mt-4">
                                        <div className="field-cust-tlt">Meta</div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div>
                                                    <label className="d-block login-label-text mb-2">
                                                        Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control login-comn-input"
                                                        name="title"
                                                        placeholder="Image Title"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div>
                                                    <label className="d-block login-label-text mb-2">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        rows={3}
                                                        className="form-control login-comn-input pt-2 h-100"
                                                        placeholder="Description..."
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <label className="d-block login-label-text mb-2">
                                                    Keywords
                                                </label>
                                                <MultiSelect
                                                    onChange={handleOnchange}
                                                    className="form-control login-comn-input"
                                                    options={options}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <div className="bdr-field-cust">
                                        <div className="field-cust-tlt">Status</div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label className="d-block login-label-text mb-2">
                                                    SEO
                                                </label>
                                                <select className="form-control form-select login-comn-input">
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6">
                                                <label className="d-block login-label-text mb-2">
                                                    UI
                                                </label>
                                                <select className="form-control form-select login-comn-input">
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bdr-field-cust mt-4">
                                        <div className="field-cust-tlt">Collections</div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div>
                                                    <label className="d-block login-label-text mb-2">
                                                        Tags
                                                    </label>
                                                    <MultiSelect
                                                        onChange={handleOnchange}
                                                        className="form-control login-comn-input"
                                                        options={options}
                                                    />
                                                </div>
                                                <div className="mt-2">
                                                    <label className="d-block login-label-text mb-2">
                                                        Category
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control login-comn-input"
                                                        placeholder="Image Title"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bdr-field-cust mt-4">
                                        <div className="field-cust-tlt">Links</div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div>
                                                    <label className="d-block login-label-text mb-2">
                                                        Reference link
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control login-comn-input"
                                                        placeholder="http://abc.xyz"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 mt-2">
                                                <label className="d-block login-label-text mb-2">
                                                    Image link
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control login-comn-input"
                                                    placeholder="http://abc.xyz"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="offer-bg-select p-3">
                                        <img src={UploadImg} alt="Upload File" className="img-fluid" />
                                        <p className="upload-text">Choose file or Drag file here</p>
                                        <label htmlFor="file-upload">
                                            <span type="btn">Choose File</span>
                                        </label>
                                        <input id="file-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>


            {/* ========== Delete Modal =============  */}

            <Modal show={DeleteModel} onHide={() => setDeleteModel(false)} size="md" className="comn-modal-style text-center" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="px-5" closeButton>
                    <h4>Remove Image</h4>
                </Modal.Header>
                <Modal.Body className="px-5 pt-0">
                    <div className="modal-data">
                        <p className="mb-0">Are you sure you want to remove this Image ?</p>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex mt-3">
                            <button className="comn-btn-class cancle-btn-class w-100 me-2" type="submit" onClick={() => setDeleteModel(false)}>
                                No
                            </button>
                            <button className="comn-btn-class w-100 ms-2" type="submit" onClick={deleteimage}>
                                Yes
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            {/* ========== Kingdom King Palace Shiva Modal =============  */}

            <Modal show={ProductModel} onHide={() => setProductModel(false)} size="lg" className="product-modal" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="px-5" closeButton>
                    <h4>Kingdom King Palace Shiva</h4>
                </Modal.Header>
                <Modal.Body className="px-5 pt-0">
                    <div className="modal-data">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,</p>
                        <div>
                            <span>Created at: 10 October, 4:05 PM</span>
                            <span className="ms-3">Updated at: 10 October, 4:05 PM</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex mt-3">
                            <div>
                                <div className="product-modal-detail mb-3">
                                    <div className="w-150"><span>Meta</span></div>
                                    <div><p className="fw-bold">Kingdom King Palace Shiva</p></div>
                                </div>
                                <div className="product-modal-detail mb-3">
                                    <div className="w-150"><span>Meta Description</span></div>
                                    <div className="modal-data ps-3"><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a</p></div>
                                </div>
                                <div className="product-modal-detail mb-3">
                                    <div className="w-150"><span>Meta Keyword</span></div>
                                    <div>
                                        <p className="img-name-tag">
                                            <div className="d-flex flex-wrap">
                                                <span className="comn-status-class red-bg-stats">God</span>
                                                <span className="comn-status-class red-bg-stats">Kailash</span>
                                                <span className="comn-status-class red-bg-stats">Tridev</span>
                                                <span className="comn-status-class red-bg-stats">shiva</span>
                                                <span className="comn-status-class red-bg-stats">Parvati</span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className="product-modal-detail mb-3">
                                    <div className="w-150"><span>Status</span></div>
                                    <div>
                                        <p className="d-flex align-items-center">
                                            <div className="position-relative">
                                                <span className="comn-status-class green-bg-stats">SEO: Approved</span>
                                                <bdi className="comn-active-class green-active"></bdi>
                                            </div>
                                            <div className="position-relative ms-2">
                                                <span className="comn-status-class yellow-txt yellow-bg-stats">UI: In Progress</span>
                                                <bdi className="comn-active-class orange-active"></bdi>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className="product-modal-detail mb-3">
                                    <div className="w-150"><span>Tags</span></div>
                                    <div>
                                        <p className="img-name-tag">
                                            <div className="d-flex flex-wrap">
                                                <span className="comn-status-class red-bg-stats">God</span>
                                                <span className="comn-status-class red-bg-stats">Kailash</span>
                                                <span className="comn-status-class red-bg-stats">Tridev</span>
                                                <span className="comn-status-class red-bg-stats">shiva</span>
                                                <span className="comn-status-class red-bg-stats">Parvati</span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className="product-modal-detail mb-3">
                                    <div className="w-150"><span>Category</span></div>
                                    <div className="ps-1">
                                        <p>God</p>
                                    </div>
                                </div>
                                <div className="product-modal-detail mb-3">
                                    <div className="w-150"><span>Links</span></div>
                                    <div className="w-100">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <p className="d-flex link-div position-relative">
                                                    <span>https://Swipecart.com</span>
                                                    <div className="action-icon-class link-position">
                                                        <p className="comn-status-class green-bg-stats">
                                                            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.5 16.5024H2.5C1.39543 16.5024 0.5 15.607 0.5 14.5024V3.50244C0.5 2.39787 1.39543 1.50244 2.5 1.50244H6.5V3.50244H2.5V14.5024H13.5V10.5024H15.5V14.5024C15.5 15.607 14.6046 16.5024 13.5 16.5024ZM8.2 10.2094L6.79 8.79544L13.083 2.50244H9.5V0.502441H16.5V7.50244H14.5V3.91744L8.2 10.2094Z" fill="#27AE60" />
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="col-lg-6 mt-3 mt-lg-0">
                                                <p className="d-flex link-div-blue position-relative ms-2">
                                                    <span>https://Swipecart.com</span>
                                                    <div className="action-icon-class link-position">
                                                        <p className="comn-status-class sky-bg-stats">
                                                            <svg width="20" height="20" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 13.5017L5.58579 8.91592C6.36683 8.13487 7.63316 8.13487 8.41421 8.91592L13 13.5017M11 11.5017L12.5858 9.91592C13.3668 9.13487 14.6332 9.13487 15.4142 9.91592L17 11.5017M11 5.50171H11.01M3 17.5017H15C16.1046 17.5017 17 16.6063 17 15.5017V3.50171C17 2.39714 16.1046 1.50171 15 1.50171H3C1.89543 1.50171 1 2.39714 1 3.50171V15.5017C1 16.6063 1.89543 17.5017 3 17.5017Z" stroke="#56CCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}