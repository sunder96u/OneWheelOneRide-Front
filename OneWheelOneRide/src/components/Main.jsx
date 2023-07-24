import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import Home from './Home'
import Category from './Category'
import Group from './Group'
import Groups from './Groups'
import Parts from './Parts'
import Product from './Product'
import Trail from './Trail'
import Trails from './Trails'




export default function Main () {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Category" element={<Category />} />
            <Route path="/Group/:<id>" element={<Group />} />
            <Route path="/Groups" element={<Groups />} />
            <Route path="/Parts" element={<Parts />} />
            <Route path="/Product/:<id>" element={<Product />} />
            <Route path="/Trail/:<id>" element={<Trail />} />
            <Route path="/Trails" element={<Trails />} />
        </Routes>
      </>
    )
}