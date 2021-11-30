import React from "react";
interface ContainerProps {}

const BodyContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="wrapper">
      <br></br>
      <br></br>
      <div className="container">
        <form autoComplete="off" className="form-group">
          <input type="text" placeholder="Enter Activities" className="form-control" required disabled />
          <br></br>
          <div>
            <button type="submit" style={{ width: 100 + "%" }} className="btn btn-success" disabled>
              Add
            </button>
            <div className="error-msg">Please register or login to use application</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BodyContainer;
