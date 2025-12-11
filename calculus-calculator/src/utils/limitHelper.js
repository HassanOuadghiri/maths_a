export function calculateLimit(func, point, direction = 'both') {
    const delta = 1e-5; // A small value to approach the limit
    let leftLimit = null;
    let rightLimit = null;

    if (direction === 'left' || direction === 'both') {
        leftLimit = func(point - delta);
    }
    if (direction === 'right' || direction === 'both') {
        rightLimit = func(point + delta);
    }

    if (leftLimit !== null && rightLimit !== null) {
        if (Math.abs(leftLimit - rightLimit) < 1e-5) {
            return leftLimit; // Limits are equal
        } else {
            return 'Limit does not exist'; // Limits are not equal
        }
    } else if (leftLimit !== null) {
        return leftLimit;
    } else if (rightLimit !== null) {
        return rightLimit;
    }

    return null; // Limit could not be determined
}

export function evaluateLimitAtInfinity(func, direction = 'both') {
    const largeValue = 1e5; // A large value to approach infinity
    if (direction === 'left') {
        return func(-largeValue);
    } else if (direction === 'right') {
        return func(largeValue);
    } else {
        const leftLimit = func(-largeValue);
        const rightLimit = func(largeValue);
        if (Math.abs(leftLimit - rightLimit) < 1e-5) {
            return leftLimit; // Limits are equal
        } else {
            return 'Limit does not exist'; // Limits are not equal
        }
    }
}