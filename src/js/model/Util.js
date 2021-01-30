export const FormatInter = num => {
    const formater =  new Intl.NumberFormat('us').format(num);
    return formater;
}