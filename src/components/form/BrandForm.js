import React from "react";

const BrandForm = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="id">
          ID:
          <input type="number" id="id" name="id" />
        </label>
        <label htmlFor="firstname">
          First Name:
          <input type="text" id="firstname" name="firstname" />
        </label>
        <label htmlFor="lastname">
          Last Name:
          <input type="text" id="lastname" name="lastname" />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BrandForm;
