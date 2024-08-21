import type { Comment } from '../../types/types';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Comment[];
};

const ReviewsList = ({ reviews }: ReviewsListProps): JSX.Element => (
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
    <ReviewsForm />
  </section>
);
export default ReviewsList;
