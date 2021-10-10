import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, confromingProps) => {
    const propError = checkPropTypes(
        component.PropTypes,
        confromingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
};
