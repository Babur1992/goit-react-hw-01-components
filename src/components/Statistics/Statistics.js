import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}></h2>}

      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.statlist}>
        <li className={style.item}>
          <span className={style.label}>.docx</span>
          <span className={style.percentage}>4%</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>.mp3</span>
          <span className={style.percentage}>14%</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>.pdf</span>
          <span className={style.percentage}>41%</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>.mp4</span>
          <span className={style.percentage}>12%</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
