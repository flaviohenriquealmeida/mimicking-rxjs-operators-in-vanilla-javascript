export const debounceTime = milliseconds => {

    let timer = 0;
    return fn => () => {

        clearTimeout(timer);
        timer = setTimeout(fn, milliseconds);
    };
};

export const take = times => {

    let requestCounter = 0;
    return fn => () => {

        requestCounter++;
        if (requestCounter <= times) fn();
    };
}

export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value);


