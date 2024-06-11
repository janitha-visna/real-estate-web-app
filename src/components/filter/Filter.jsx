import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        search results for <b>london</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">location</label>
          <input type="text" id="city" name="city" placeholder="location" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartmnet">apartmnet</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">minPrice</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">maxPrice</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="bedroom">bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="bedroom"
          />
        </div>
        <button>
          <img src="./search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
