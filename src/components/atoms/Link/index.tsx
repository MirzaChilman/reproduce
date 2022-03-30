import NextLink from 'next/link';

interface Props {
  url: string;
  urlText?: string;
  urlTextColor?: string; // tailwind color
  urlIconColor?: string;
}

const Link = ({
  urlIconColor,
  urlTextColor = 'text-black',
  urlText = 'Learn More',
  url = '/',
}: Props) => {
  return (
    <NextLink href={url}>
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
    </NextLink>
  );
};

export default Link;
