import PropTypes from "prop-types";

const CardPodex = ({ name, type, image, id }) => {
  return (
    <section id={id} className="cart-podex">
      {/* Correcting the inline style */}
      <h2 style={{ color: "#245bf8" }}>{name}</h2>
      <img src={image} alt={name} />
      <strong>Type: {type}</strong>
    </section>
  );
};

CardPodex.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardPodex;
