import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'


const currentPhoto = {
    name: 'Park Bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1     

};
const mockToggleModal= jest.fn()


afterEach(cleanup);


describe('Modal Component', () => {
    it('renders', () => {
        <Modal />
    });

    it('Matches snapshot dom node structure', () => {
        const {asFragment} = render(
            <Modal 
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal}
            />
        )
        expect(asFragment()).toMatchSnapshot()
    })

});

describe('Click Event', () => {
    it('calls on close hanler', () => {
        const {getByText} = render(<Modal 
        
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})

