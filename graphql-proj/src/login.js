import React, { useState, useContext } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";


export default function Login() {

  return (
      <div>
          <form>
  <label>
    Username:
    <input type="text" name="name" />
  </label>
  <label>
    Password:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
      </div>

  );
}