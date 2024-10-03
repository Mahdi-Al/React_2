import propTypes from "prop-types";
function Cart({ title, paragraph, a, srcurl, url }) {
  return (
    <>
      <div className="card m-5">
        <img className="card-img-top" src={srcurl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">{paragraph}</p>
          <a href={url} className="btn btn-primary">
            {a}
          </a>
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {
  title: propTypes.string.isRequired,
  paragraph: propTypes.string.isRequired,
  a: propTypes.string.isRequired,
  srcurl: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

export default Cart;
