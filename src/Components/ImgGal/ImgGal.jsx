import ImgGalItem from '../ImgGalItem/ImgGalItem';
import PropTypes from 'prop-types';
import s from './ImgGal.module.css'

const ImgGal = ({ images, onClick }) => {
  return (
    <div className={s.gal}>
      <ImgGalItem images={images} onClick={onClick} />
    </div>
  );
};

ImgGalItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImgGal;