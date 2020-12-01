import axios from "axios";
import React from "react";
import { useState } from "react";

function Form() {
  const [name, setState] = useState("");

  const Handel = () => {
    axios
      .post("https://wardi.me/wp-json/bestgator/v1/sendJson", name)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center my-5">
          <form>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                id="exampleInputEmail1"
                name="date"
                aria-describedby="emailHelp"
                value={name}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </form>
          <button className="btn btn-primary" onClick={Handel}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
