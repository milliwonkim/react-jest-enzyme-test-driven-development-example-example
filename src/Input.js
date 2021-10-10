import React from 'react';
import PropTypes from 'prop-types';

function Input({ success, secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState('');

    if (success) {
        return <div data-test='component-input'></div>;
    }

    return (
        <div data-test='component-input'>
            <form className='form-inline'>
                <input
                    data-test='input-box'
                    className='mb-2 mx-sm-3'
                    type='text'
                    placeholder='enter guess'
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <button
                    data-test='submit-button'
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentGuess('');
                    }}
                    className='btn btn-primary mb-2'>
                    Submit
                </button>
            </form>
        </div>
    );
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
};

export default Input;
