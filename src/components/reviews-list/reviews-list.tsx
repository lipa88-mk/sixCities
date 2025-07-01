import { FC, useEffect } from "react";
import ReviewsForm from "../reviews-form/reviews-form";
import ReviewsItem from "../reviews-item/reviews-item";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AuthorizationStatus } from "../../const";
import { fetchCommentsAction } from "../../store/action";
import { getAuthorizationStatus } from "../../store/user-process/selectors";
import { getComments } from "../../store/site-data/selectors";
import { Route } from "../../routes/cities_.$name.$id";

const ReviewsList: FC = () => {
  const params = Route.useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parsedId = Number(id);
      dispatch(fetchCommentsAction(parsedId));
    }
  }, [params, dispatch]);

  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authStatus === AuthorizationStatus.Auth;
  const reviews = useAppSelector(getComments);

  return (
    <section className="property__reviews reviews">
      {reviews && (
        <>
          <h2 className="reviews__title">
            Reviews &middot;{" "}
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
