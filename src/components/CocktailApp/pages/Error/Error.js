const Error = ({ massage }) => {
  return (
    <div className="tc">
      {!massage && <button className="btn">Back To Home</button>}
      <h2>{massage ? massage : "This Page Not Found"} </h2>
    </div>
  );
};

export default Error;
