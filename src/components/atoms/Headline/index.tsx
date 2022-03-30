interface Props {
  title: string;
  subtitle: string;
}

const Headline = ({ title, subtitle }: Props) => {
  return (
    <div className="lg:col-start-3 lg:col-span-8 col-span-12">
      <h1 className="text-primary leading-normal font-bold text-2xl lg:text-4xl font-eudoxus text-center">
        {title}
      </h1>
      <p className="text-sm text-primary-200 leading-normal font-eudoxus mt-2 text-center mx-auto max-w-xl w-[88%]">
        {subtitle}
      </p>
    </div>
  );
};

export default Headline;
