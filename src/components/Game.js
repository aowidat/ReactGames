import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detialsAction";
import { Link } from "react-router-dom";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const StringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layouId={StringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${StringPathId}`}>{name}</motion.h3>
        <p>Relaeased Date {released}</p>
        <motion.img
          layoutId={`image ${StringPathId}`}
          src={image}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
