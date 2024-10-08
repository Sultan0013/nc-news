// handleVote.js
import { updateVotes } from "../../../api/api";
const handleVote = (
  voteChange,
  article_id,
  setVotes,
  votes,
  setVoteError,
  setHasAgreed,
  setHasDisagreed
) => {
  setVoteError(null);

  const newVotes = votes + voteChange;
  setVotes(newVotes);

  voteChange === 1
    ? (setHasAgreed(true), setHasDisagreed(false))
    : (setHasAgreed(false), setHasDisagreed(true));

  const votesInfo = { inc_votes: voteChange };
  updateVotes(article_id, votesInfo)
    .then(setVotes)
    .catch((err) => {
      setVotes(votes);
      setVoteError(err);
      setHasAgreed(false);
      setHasDisagreed(false);
    });
};

export default handleVote;
