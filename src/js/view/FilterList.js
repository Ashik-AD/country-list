function FilterList(id) {
    const countryList = document.querySelectorAll('.country-list');
    countryList.forEach(el => {
        if (el.dataset.reg === id) {
            el.style.display = "block";
        }
        else {
            el.style.display = "none";
        }
    })
}

export default FilterList;