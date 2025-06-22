import {cn} from "@/lib/utils";
import {Marquee} from "@/components/magicui/marquee";
import {reviews} from "@/assets/assets";
import Image,{StaticImageData} from "next/image";


const firstRow = reviews.slice(0,reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: StaticImageData;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-full cursor-pointer overflow-hidden rounded-xl border p-2 md:p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Reviews() {
    return (
        <section id='reviews' className='py-10 bg-white md:py-16 px-4 lg:py-20'>
            <main className='w-full sm:w-11/12 mx-auto'>
                <div className="flex items-center flex-col">
                    <h1 className='tag font-header text-lg mb-2'>Reviews</h1>
                    <p className='font-bold text-3xl lg:text-5xl tracking-tight font-header'>What are people saying about us?</p>
                </div>
            </main>
            <div className="relative flex mt-20 h-[700px] w-full flex-row items-center justify-center overflow-hidden">
                <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee pauseOnHover vertical className="[--duration:30s] ">
                    {thirdRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover vertical className="[--duration:25s] lg:flex flex-col hidden ">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
            </div>
        </section>
    );
}
