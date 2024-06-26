import Navbar from '../../src/components/navbar.jsx';
import {
  expect,
} from 'chai';
import Window from 'window';

const window = new Window();

describe('components/navbar', () => {
  it('should be a function', () => {
    expect(Navbar,).to.be.a('function',);
  },);
  it('() should be an object', () => {
    const result = Navbar(window,);
    expect(result,).to.be.an('object',);
  },);
},);
