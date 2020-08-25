import React from 'react';
import ReactDom from 'react-dom';
import AddProduct from './AddProduct';
import { render, cleanup } from '@testing-library/react';

import renderer from "react-test-renderer";

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

it('AddProduct component renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDom.render(<AddProduct></AddProduct>, div)
})

