import axios from "axios";
import {
  popluarGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popluarData = await axios.get(popluarGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popluarData.data.results,
      upcomingGames: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searchedGames: searchGames.data.results,
    },
  });
};
