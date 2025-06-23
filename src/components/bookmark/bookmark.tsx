import { FC, MouseEventHandler } from "react";
import { Offer } from "../../types/types";
import { useUpdateFavorites } from "../../services/queries";

type BookmarkProps = {
  placement: "property" | "place-card";
  isFavorite: boolean;
  id: Offer["id"];
};

const Bookmark: FC<BookmarkProps> = ({
  placement = "property",
  isFavorite = false,
  id,
}) => {
  const mutation = useUpdateFavorites(id);

  const iconSizes: Record<
    BookmarkProps["placement"],
    { width: number; height: number }
  > = {
    property: {
      width: 31,
      height: 33,
    },
    "place-card": {
      width: 18,
      height: 19,
    },
  };

  const handleBookmarkClick: MouseEventHandler<HTMLButtonElement> = () => {
    const status = isFavorite ? 0 : 1;
    mutation.mutate(status);
  };

  return (
    <button
      className={[
        `${placement}__bookmark-button button`,
        isFavorite && `${placement}__bookmark-button--active`,
      ].join(" ")}
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg
        className={`${placement}__bookmark-icon`}
        width={iconSizes[placement].width}
        height={iconSizes[placement].height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? "In bookmarks" : "To bookmarks"}
      </span>
    </button>
  );
};

export default Bookmark;
