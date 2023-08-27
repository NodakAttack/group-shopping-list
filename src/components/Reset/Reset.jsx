import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';

function Reset({ resetItems }) {
    return(
        <button onClick={resetItems}><FontAwesomeIcon icon={faMugSaucer} beatFade /></button>
    )
};
export default Reset;