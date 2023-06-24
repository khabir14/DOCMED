import React, {useState} from "react";

const Search = () => {
        const [isActive, setIsActive] = useState(false);
      
        const toggleSearchForm = () => {
          setIsActive((prevState) => !prevState);
        };
      
        const closeSearchForm = () => {
          setIsActive(false);
        };
    return (
        <form action="" id="search-form">
            <input type="search" placeholder="search here ..." name="" id="search-box" />
            <label htmlFor="search-box" class="fas fa-search"></label>
            <i class="fas fa-times" id="close" onClick={closeSearchForm}></i>
        </form>
    );
};

export default Search;