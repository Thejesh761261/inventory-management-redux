import React from 'react';
import ReactDom from 'react-dom';
import EditProduct from './Editproduct';
import { mount, configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter as Router} from 'react-router-dom'
import {  render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
configure({ adapter: new Adapter() })

describe("Edit Product Page",function(){

    it('EditProduct renders without crashing', ()=>{
        shallow(<EditProduct />);
         })

it(" check product name", () => {
    const wrapper = mount(<input type="text" placeholder="Enter Productname" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("placeholder")).toEqual("Enter Productname");
  });

  it(" check product code", () => {
    const wrapper = mount(<input type="text" placeholder="Enter ProductCode" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("placeholder")).toEqual("Enter ProductCode");
  });

  it(" check product unit price", () => {
    const wrapper = mount(<input type="number" name="uprice" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("number");
    expect(input.prop("name")).toEqual("uprice");
  });

  it(" check product quantity", () => {
    const wrapper = mount(<input type="number" name="quantity" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("number");
    expect(input.prop("name")).toEqual("quantity");
  });
  it(" check product size", () => {
    const wrapper = mount(<input type="text" name="size" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("size");
  });

  it(" check product color", () => {
    const wrapper = mount(<input type="text" name="color" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("color");
  });
  
  it(" check product initial rating", () => {
    const wrapper = mount(<input type="number" name="rating" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("number");
    expect(input.prop("name")).toEqual("rating");
  });
})
