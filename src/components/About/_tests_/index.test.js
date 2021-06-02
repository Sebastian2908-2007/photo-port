import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

// declares components we are testing
describe('About component', () => {
    //renders About test
    // first test verifies the component is rendering
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
    const {asFragment} =render(<About />);
    // checks to see if snapshots match
    expect(asFragment()).toMatchSnapshot();
    })
    

})
