import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  icon: string; // path to its static path or url
  iconBackgroundColor?: string;
  iconAlt: string;
  url: string;
  urlText?: JSX.Element | string;
  urlTextColor?: string;
  urlIconColor?: string;
}

const OtherCard = ({
  urlIconColor = 'black',
  url = '/',
  urlText = 'Learn more',
  urlTextColor = 'text-black', // tailwind color
  icon = '/assets/images/products/icon-aggregation.svg',
  iconAlt = 'Finantier Icon',
  iconBackgroundColor = 'rgba(83, 206, 147, 0.1)',
  description,
  title,
}: Props) => {
  return (
    <>
      <div className="px-5 py-5 lg:px-8 lg:py-8 flex border justify-between h-[235px] lg:h-[300px] flex-col transition-all  border-gray-200 bg-white rounded-xl ">
        <div className="">
          <span
            className="rounded-full h-10 w-10 lg:h-16 lg:w-16 flex justify-center items-center "
            style={{ background: iconBackgroundColor }}
          >
            <img src={icon} className="h-6 w-6 lg:h-8 lg:w-8" alt={iconAlt} />
          </span>
          <h6 className="mt-4 text-primary font-bold text-base leading-normal capitalize whitespace-nowrap">
            {title}
          </h6>
          <p className="mt-2 text-sm text-primary-200 leading-normal">
            {description}
          </p>
        </div>
        <Link href={url}>
          <span
            className={`mt-2 lg:mt-6 text-blue-ribbon text-xs lg:text-sm font-bold inline-flex items-center ${urlTextColor}`}
          >
            {urlText}
            <svg
              className="h-4 w-4 ml-4 text-red-900"
              fill={urlIconColor}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.333 7.1h-.9v1.8h.9V7.1zm9.334 1.8a.9.9 0 100-1.8v1.8zm-9.334 0h9.334V7.1H3.333v1.8z"
                fill={urlIconColor}
              />
              <path
                d="M8 3.333L12.667 8 8 12.667"
                fill={urlIconColor}
                strokeWidth="1.8"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
};
export default OtherCard;
