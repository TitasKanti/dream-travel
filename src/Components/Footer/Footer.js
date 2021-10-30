import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="py-8 w-full mt-20 bg-gray-700">
            <div className="container mx-auto px-8">
                <div className="grid md:grid-cols-5 no-underline w-full text-white">
                    <div className="h-10 w-10 self-center mr-2 flex flex-row">
                        {/* <img src={icon} alt="icon" /> */}

                        <Link to="/home" className="md:text-3xl no-underline text-grey-darkest hover:text-blue-200 font-sans font-bold">Dream Travel</Link><br />
                    </div>

                    <div className="block sm:table-cell">
                        <p className="uppercase text-grey text-sm sm:mb-6">Links</p>
                        <ul className="list-reset no-underline text-xs mb-6">
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">FAQ</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Help</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Support</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="block sm:table-cell">
                        <p className="uppercase text-grey text-sm sm:mb-6">Legal</p>
                        <ul className="list-reset text-xs mb-6">
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Terms</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Privacy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="block sm:table-cell">
                        <p className="uppercase text-grey text-sm sm:mb-6">Social</p>
                        <ul className="list-reset text-xs mb-6">
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Facebook</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Linkedin</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Twitter</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="block sm:table-cell">
                        <p className="uppercase text-grey text-sm sm:mb-6">Company</p>
                        <ul className="list-reset text-xs mb-6">
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Official Blog</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">About Us</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <Link to="#" className="text-grey hover:text-blue-200">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center pb-2 text-white">
                {/* <small><i><a href="http://www.unsplash.com">Logos and images sourced from Freepik</a></i></small> <br /> */}
                <small>© 2021 TK-tech-zone/DreamTravel</small>
            </div>
        </div>

    );
};

export default Footer;