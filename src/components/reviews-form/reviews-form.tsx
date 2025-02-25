import { ChangeEvent, FC, FormEvent, useState } from 'react';
import {Settings} from '../../const';
import React from 'react';
import { useAppDispatch } from '../../hooks';
import { PostReview } from '../../types/types';
import { postCommentAction } from '../../store/action';
import { useParams } from 'react-router-dom';

const ReviewsForm: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const [rating, setRating] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');

  const onSubmit = (postData: PostReview) => {
    dispatch(postCommentAction(postData));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating !== null && comment.length >= Settings.MIN_COMMENT_LENGTH) {

      onSubmit({id: Number(params.id) , comment, rating: Number(rating) });
    }
  };

  const isSubmitButtonAnabled = (comment.length >= Settings.MIN_COMMENT_LENGTH) && (comment.length <= Settings.MAX_COMMENT_LENGTH) && (rating !== null);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Array.from({ length: Settings.STAR_RATING_MAX }, (v, k) => k).map((_, i) => {
          const el = Settings.STAR_RATING_MAX - i;
          return (
            <React.Fragment key={`${el}-star-input`}>
              <input
                key={`${el}-star`}
                className="form__rating-input visually-hidden"
                name="rating"
                value={el}
                id={`${el}-stars`}
                type="radio"
                onChange={(evt: ChangeEvent<HTMLInputElement>)=>{setRating(evt.target.value);}}
              />
              <label
                htmlFor={`${el}-stars`}
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>

          );})}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        required
        minLength={Settings.MIN_COMMENT_LENGTH}
        maxLength={Settings.MAX_COMMENT_LENGTH}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={(evt: ChangeEvent<HTMLTextAreaElement>)=>{setComment(evt.target.value);}}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{Settings.MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isSubmitButtonAnabled}
        >
          Submit
        </button>
      </div>
    </form>);
};

export default ReviewsForm;
