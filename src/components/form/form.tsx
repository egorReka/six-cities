import { STARS_COUNT } from '../../const';

import { Fragment } from 'react';

import { ChangeEvent, useState } from 'react';

export default function Form(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {Array.from({ length: STARS_COUNT }, (_, i) => (
          <Fragment key={`Star-${i}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={STARS_COUNT - i}
              id={`${STARS_COUNT - i}-stars`}
              type="radio"
              checked={rating === STARS_COUNT - i}
              onChange={handleInputChange}
            />
            <label
              htmlFor={`${STARS_COUNT - i}-stars`}
              className="reviews__rating-label
              form__rating-label"
              title="good"
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
