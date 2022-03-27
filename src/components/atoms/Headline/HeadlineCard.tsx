import type { Variant } from '@components/atoms/Headline/types';

interface Props extends Variant {
  topText?: string;
  title: string;
  description: string;
}

const HeadlineCard = ({
  title,
  description,
  variant = 'normal',
  topText,
}: Props) => {
  const variantFontSize = {
    title: variant === 'normal' ? 'text-base' : 'text-2xl',
    description: variant === 'normal' ? 'text-sm' : 'text-xl',
    topText: variant === 'normal' ? 'text-sm' : 'text-xl',
  };

  return (
    <div>
      {topText && (
        <h6
          className={`${variantFontSize.topText} mt-4 font-bold leading-normal text-green-primary-100`}
        >
          {topText}
        </h6>
      )}
      <h6
        className={`${variantFontSize.title} ${
          topText ? 'mt-2' : 'mt-4'
        } text-primary font-bold leading-normal capitalize whitespace-nowrap`}
      >
        {title}
      </h6>
      <p
        className={`${variantFontSize.description} mt-2text-primary-200 leading-normal`}
      >
        {description}
      </p>
    </div>
  );
};

export default HeadlineCard;
