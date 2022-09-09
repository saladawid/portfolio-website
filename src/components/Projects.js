import React from 'react';
import ProjectImg from '../assets/project-doctor-app.png';
import ProjectBuild from '../assets/project_build.png';

export const Projects = () => {

    return (
        <div name="projects" className="w-full h-screen bg-[#327361]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">

                <div className="flex flex-col text-center">
                    <p className="text-3xl sm:text-7xl font-bold text-[#d98014]">Projects</p>
                    <p className="text-2xl sm:text-2xl font-bold text-[#f2f2f2] mt-1 text-[#f2f2f2]">My
                        projects</p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-4">

                    <div style={{backgroundImage: `url(${ProjectImg})`}} className="content-div">
                        <div className="flex flex-col justify-center items-center text-center content-div-child">
                            <p className="text-2xl mb-2 font-bold text-white tracking-wider">App-Doctor</p>
                            <p className="text-2xl font-bold text-white tracking-wider">Technology Stack:</p>
                            <p className="text-2xl font-bold text-[#327361] tracking-wider">Node, Express, MongoDb -
                                Mongoose, React, Bootstrap</p>
                            <div className="flex">
                                <a target="_blank" rel="noreferrer" href="https://doctor-sala.herokuapp.com/">
                                    <button
                                        className="text-center px-4 py-2 mx-4 my-2 bg-white text-black-700 font-bold text-lg hover:bg-[#d98014]">Demo
                                    </button>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/saladawid/doctor-app">
                                    <button
                                        className="text-center px-4 py-2 mx-4 m-2 bg-white text-black-700 font-bold text-lg hover:bg-[#d98014] hover:border-[#d98014]">Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${ProjectBuild})`}} className="content-div">
                        <div
                            className="flex justify-center items-center text-center content-div-child">
                            <p className="text-2xl mb-2 font-bold text-white tracking-wider">In construction</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};