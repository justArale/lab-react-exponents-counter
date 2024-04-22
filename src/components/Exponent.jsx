const Exponent = ({ num, exponent }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {num}
      <small>{exponent}</small>
    </p>
    <p className="exponent-result">
      {num}
      {Array.apply(null, { length: exponent - 1 }).map(() => ` * ${num}`)}
      <span>=</span> <span className="total">{Math.pow(num, exponent)}</span>
    </p>
  </div>
);

export default Exponent;

// {num ** exponent} would also work for the calculation
