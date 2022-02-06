export const timeScheduler = (store) => (next) => (action) => {
    if (!action.meta || !action.meta.delay) {
        return next(action);
    }

    const timerId = setTimeout(() => {
        return next(action);
    }, action.meta.delay);

    return function cancel() {
        console.log('cancel');
        clearInterval(timerId);
    }
}