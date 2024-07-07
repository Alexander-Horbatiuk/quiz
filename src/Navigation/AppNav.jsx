import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Language } from '../components/Steps/Language';
import { Age } from '../components/Steps/Age';
import { Gender } from '../components/Steps/Gender';
import { Books } from '../components/Steps/Books';
import { Hobbies } from '../components/Steps/Hobbies';
import { Loader } from '../components/Loader';

export const AppNav = () => {
    return (
        <div className="content-wrapper">
            <Routes>
                <Route path="/language" element={<Language />} />
                <Route path="/gender" element={<Gender />} />
                <Route path="/age" element={<Age />} />
                <Route path="/books" element={<Books />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/loader" element={<Loader />} />
            </Routes>
        </div>
    );
};
