import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar(params) {

    const location = useLocation();
    const navigate = useNavigate();


    const sidebar_change = (name) => {
        if (name) {
            navigate(name);
            document.getElementById('root').classList.remove('dash-main-class-add');
        }
    };

    // const urlName = window.location.href.substr(
    //     window.location.href.lastIndexOf('/') + 1
    // );

    

    return (
        <React.Fragment>
            <div className="sidebar-main-section">
                <div className="sidebar-main-section-inner">
                    <ul className="sidebar-main-inner-menu">
                        <li
                            onClick={() => {
                                sidebar_change("/dashboard");
                            }}
                        >
                            <bdi className={location.pathname === "/dashboard" ? "active" : ""}>
                                <svg width="18" height="18" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.806396" width="6.5" height="10.5" rx="1.25" stroke="#9DC44D" stroke-width="2" />
                                    <rect x="0.75" y="14.8064" width="6.5" height="6.5" rx="1.25" stroke="#9DC44D" stroke-width="2" />
                                    <rect x="10.75" y="10.8064" width="6.5" height="10.5" rx="1.25" stroke="#9DC44D" stroke-width="2" />
                                    <rect x="10.75" y="0.806396" width="6.5" height="6.5" rx="1.25" stroke="#9DC44D" stroke-width="2" />
                                </svg>
                                <span>Dashboard</span>
                            </bdi>
                        </li>
                        <li
                            onClick={() => {
                                sidebar_change("/approval");
                            }}
                        >
                            <bdi className={location.pathname === "/approval" ? "active" : ""}>
                                <svg width="18" height="18" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33301 10.5994L5.1545 6.98827C5.80537 6.37322 6.86065 6.37322 7.51152 6.98826L11.333 10.5994M9.66634 9.02446L10.9878 7.77572C11.6387 7.16068 12.694 7.16068 13.3449 7.77572L14.6663 9.02446M9.66634 4.29972H9.67467M2.99967 13.7492H12.9997C13.9201 13.7492 14.6663 13.0441 14.6663 12.1743V2.72481C14.6663 1.85501 13.9201 1.1499 12.9997 1.1499H2.99967C2.0792 1.1499 1.33301 1.85501 1.33301 2.72481V12.1743C1.33301 13.0441 2.0792 13.7492 2.99967 13.7492Z" stroke="#9DC44D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Approval Images</span>
                            </bdi>
                        </li>
                    </ul>

                    <a href='/'>
                        <div className="logout-div">
                            <bdi className="">
                                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5558 0H2.44421C1.79597 0 1.17427 0.257515 0.715894 0.715894C0.257515 1.17427 0 1.79597 0 2.44421L0 7.33368H2.44421V2.44421H19.5558V19.5558H2.44421V14.6674H0V19.5558C0 20.204 0.257515 20.8257 0.715894 21.2841C1.17427 21.7425 1.79597 22 2.44421 22H19.5558C20.204 22 20.8257 21.7425 21.2841 21.2841C21.7425 20.8257 22 20.204 22 19.5558V2.44421C22 1.79597 21.7425 1.17427 21.2841 0.715894C20.8257 0.257515 20.204 0 19.5558 0V0Z" fill="#EB5757" />
                                    <path d="M8.65974 15.3823L10.3892 17.1118L16.5003 11.0007L10.3892 4.88965L8.65974 6.61911L11.8187 9.77911H0V12.2233H11.8187L8.65974 15.3823Z" fill="#EB5757" />
                                </svg>
                                <span className="comn-txt-class purple-txt">Logout</span>
                            </bdi>
                        </div>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}