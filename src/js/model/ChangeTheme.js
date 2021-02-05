const ChangeTheme = type => {
    localStorage.setItem('theme', type);
    return localStorage.getItem('theme');
}
export default ChangeTheme;