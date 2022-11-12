import PropTypes from 'prop-types';
import { StyledMessage } from 'components/Phonebook/Message/Message.style';

function Message({ text }) {
  return <StyledMessage>{text}</StyledMessage>;
}

Message.prototype = {
  text: PropTypes.string.isRequired,
};

export default Message;
