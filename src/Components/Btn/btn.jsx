import PropTypes from 'prop-types';
import s from './btn.module.scss'
const Btn = ({ handleLoadMore }) => {
  return (
    <div className={s.btnwrp}>
      <button onClick={handleLoadMore} type="button" className={"s.btn"}>
        Load more
      </button>
    </div>
  );
};

Btn.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Btn;