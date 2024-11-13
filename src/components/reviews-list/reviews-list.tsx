import { FC, useEffect } from 'react';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { useParams } from 'react-router-dom';
import { fetchCommentsAction } from '../../store/api-action';

const ReviewsList: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchCommentsAction(parsedId));
    }
  }, [params, dispatch]);

  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authStatus === AuthorizationStatus.Auth;
  const reviews = useAppSelector((state) => state.reviews);

  return (
    <section className="property__reviews reviews">
      {reviews && (
        <>
          <h2 className="reviews__title">
            Reviews &middot;{' '}
            <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <ul className="reviews__list">
            {reviews.map((comment) => (
              <ReviewsItem key={comment.id} {...comment} />
            ))}
          </ul>
        </>
      )}
      {isAuthorized && <ReviewsForm />}
    </section>
  );
};
export default ReviewsList;
