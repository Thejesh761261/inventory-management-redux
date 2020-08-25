import React from 'react';
import Login from './Login';
import { mount, configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
configure({ adapter: new Adapter() })

describe("Login page",function(){

it('login component renders without crashing', ()=>{
        shallow(<Login />);
    })

it(" check Username field", () => {
    const wrapper = mount(<input type="text" placeholder="Enter Username" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("placeholder")).toEqual("Enter Username");
  });

  it(" check password field", () => {
    const wrapper = mount(<input type="password" placeholder="Enter Password" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("password");
    expect(input.prop("placeholder")).toEqual("Enter Password");
  });

  
})

