import css from '../css/style.css'
import { Search } from  './model/Search'
import DefaultSchem from './model/DefaultSchem'
import RenderCountry from './view/RenderCountry'
import { countryDetails } from './view/countryDetails'
import getAllCountry from './model/GetAllCountry'
import { searchCountryList } from './view/searchCountryList'
import AlertUser from './view/AlertUser'
import Loading from './view/Loading'
import ChangeTheme from './model/ChangeTheme'
import FilterList from './view/FilterList'
import changeThemeLabel from './view/changeThemeLabel'
import Map from './view/Map';
import GetPhoto from './model/GetPhotos'
import RenderPhoto from './view/Photo'

(function () {
    //Searching Country list
    async function ctrlAllCountryList() {
        Loading(true)
        const allCountry = await getAllCountry();
        const def = DefaultSchem(allCountry)
        RenderCountry(def)
        Loading(false)
        // Searching Country Name List
        searchCountryList(allCountry)
    }

    //When Url change load Country Details
    const handleUrlChange = async path => {
        const url = path.currentTarget.location.hash.split('/');
        if (url[0].toString().toLowerCase() === '#details') {
            if (/[a-zA-Z0-9]/gi.exec(url[url.length - 1])) {
                const getAllDetails = new Search(url[url.length - 1]);
                try {
                    Loading(true)
                    const req = await getAllDetails.searchByName();
                    await countryDetails(req);
                    Loading(false);
                    Map(req.cords);
                    const photo = new RenderPhoto(await GetPhoto()(req.name));
                    photo.renderPhoto();
                } catch (error) {
                    AlertUser('Something went wrong.:(', 'danger');
                    return;
                }
            }
            return;
        }
        return;
    }

    //Load country details already in the urlbox
    window.addEventListener('load', eve => {
        handleUrlChange(eve)
    })

    //Handle Hash change 
    window.addEventListener('hashchange', eve => {
        handleUrlChange(eve)
    })

    //Return back to home page if back button clicked
    const detailsWrp = document.querySelector('.country-details');
    detailsWrp.addEventListener('click', eve => {
        if (eve.target.classList.contains('btn-back')) {
            document.body.style.overflowY = 'scroll';
            detailsWrp.innerHTML = '';
        }
    })
    
    // Search for Country list
    function searchForCountryList() {
        const searchBox = document.querySelector('.input-search');
        const searchTerm = document.querySelector('.search-list');

        //Hide Seaerch Country list if search box is empty
        searchBox.addEventListener('keyup', eve => {
            searchList(eve.target.value)
            if (!eve.target.value) {
                searchTerm.style.display = "none";
            }
            else {
                searchTerm.style.display = "block";
            }
        })

        searchBox.addEventListener('click', () => searchTerm.style.display = "block")

        // Hide Search Country List if the user clicked outside of it
        window.addEventListener('click', eve => {
            const curr = eve.target;
            if (curr.classList.contains('country-name') === false && curr.classList.contains('input-search') === false) {
                searchTerm.style.display = "none";
            }
            return;
        })

        function searchList(value) {
            searchTerm.querySelectorAll('.country-name').forEach(el => {
                if (el.innerHTML.toString().toLowerCase().includes(value.toString().toLowerCase(), 0)) {
                    el.style.display = "block";
                    el.addEventListener('click', eve => {
                        searchBox.value = eve.target.dataset.id;
                    })
                }
                else {
                    el.style.display = "none";
                }
            })
        }
    }

    // Search Country
    async function searchCountry(key) {
        const search = await new Search(key);
        const country = await search.searchByName();
        if (country) {
            countryDetails(country);
        }
        else {
            const msg = 'Please enter valid country name or try its code';
            AlertUser(msg, 'danger');
        }
    }
    const searchBox = document.querySelector('.input-search');
    //HandleSearch country
    searchBox.addEventListener('keypress', eve => eve.keyCode === 13 ? searchCountry(eve.target.value) : false);

    // Handle Dropdown 
    const handleDropDown = () => {
        const drpWrp = document.querySelectorAll('.drp-wrapper');
        drpWrp.forEach(el => {
            el.querySelector('.btn-drp').addEventListener('click', () => {
                el.querySelector('.drp-list').classList.toggle('show-drp')
            })
        })

        //close dropdown if outside clicked
        window.addEventListener('click', eve => {
            if (!eve.target.classList.contains('btn-drp')) {
               document.querySelectorAll('.show-drp').forEach(el => el.classList.remove('show-drp')) 
            }
        })
    }

    //Initial Theme 
    const theme = () => {
        const app = document.querySelector('#app')
        const theme = localStorage.getItem('theme')
        if (theme) {
            app.classList.add(`theme-${theme}`);
        }
        else {
            app.classList.add('theme-light')
        }
        changeThemeLabel(theme);
    }
    //Change theme
    const changeTheme = () => {
        let theme;
        let prevTheme;
        document.querySelectorAll('.btn-theme').forEach(el => {
            el.addEventListener('click', eve => {
                theme = ChangeTheme(eve.target.dataset.id);
                prevTheme = theme === 'light' ? 'dark' : 'light'
                document.querySelector('#app').classList.replace(`theme-${prevTheme}`, `theme-${theme}`)
                changeThemeLabel(theme);
            })
        })
    }

    //Filter Country based on Region
    const handleFilter = () => {
        document.querySelectorAll('.region-list').forEach(el => {
            el.addEventListener('click', eve => {
                const filterId = eve.target.dataset.id;
                FilterList(filterId);
            })
        })
    }
    return {
        initiate: () => {
            theme();
            ctrlAllCountryList()
            searchForCountryList()
            handleDropDown()
            changeTheme()
            handleFilter()
        }
    }
})().initiate()


