export const Number = number => {
    let regex = /[0-9]/g;
    let result = regex.test(number);
    return result;
};