function makeActionCreator(type: any, ...argNames: any[]) {
    return function (...args: any[]) {
        let action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    };
}

export {
    makeActionCreator
};

