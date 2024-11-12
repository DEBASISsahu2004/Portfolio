import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import PropTypes from 'prop-types';

const ReviewCard = ({
    img,
    name,
    email,
    body,
}) => {
    return (
        <figure
            className={cn(
                "relative w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-solid border-2 border-white-500 h-[150px]"
            )}
        >
            <div className="flex flex-row items-center gap-2 overflow-y-scroll mb-3">
                <img className="rounded-full" width="40" height="40" alt="avatar" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-normal dark:text-white/40">{email}</p>
                </div>
            </div>
            <q className="text-sm">{body}</q>
        </figure>
    );
};

ReviewCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export function Marque({reviews}) {
    return (
        <div>
            <Marquee pauseOnHover className="[--duration:30s]">
                {reviews.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
        </div>
    );
}

Marque.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    })).isRequired,
};