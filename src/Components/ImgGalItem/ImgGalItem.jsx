import PropTypes from 'prop-types';
import s from './ImgGalItem.module.scss';

const ImgGalItem = ({ images, onClick }) =>
  images.map(({ id, webformatURL, tags, largeImageURL }) => (
    <div className={s.card} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.img}
        onClick={() => {
          onClick(largeImageURL);
        }}
      />
    </div>
  ));

ImgGalItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImgGalItem;