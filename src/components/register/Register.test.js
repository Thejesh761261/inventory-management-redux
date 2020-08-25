import React from 'react';
import Register from './Register';
import { mount, configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
configure({ adapter: new Adapter() })

describe("Register page",function(){

it('login component renders without crashing', ()=>{
        shallow(<Register />);
    })

it(" check Username field", () => {
    const wrapper = mount(<input type="date" placeholder="Enter DoB" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("date");
    expect(input.prop("placeholder")).toEqual("Enter DoB");
  });

  it(" check password field", () => {
    const wrapper = mount(<input type="password" placeholder="Enter Password" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("password");
    expect(input.prop("placeholder")).toEqual("Enter Password");
  });

  it(" check email field", () => {
    const wrapper = mount(<input type="email" placeholder="This will be your Username" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("email");
    expect(input.prop("placeholder")).toEqual("This will be your Username");
  });

  it(" check phone number field", () => {
    const wrapper = mount(<input type="number" name="pno" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("number");
    expect(input.prop("name")).toEqual("pno");
  });

  
})

