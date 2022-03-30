import Card from '@components/molecules/Card/OtherCard';
import Something from '@views/Home';

import { RESPONSE } from '../models';

export async function getStaticProps() {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ghost/api/v3/content/posts/?key=${process.env.NEXT_PUBLIC_CONTENT_API_KEY}`
  );
  const data = await result.json();

  return {
    props: data,
  };
}

const Index = (props: RESPONSE) => (
  <>
    <Something {...props} />
    <div className="flex">
      <Card
        title="Account Aggregation"
        description={`Get an overview of your user's financial data. Understand them
            better to deliver personalised and engaging experiences.`}
        urlIconColor="#53CE93"
        iconAlt="Account Aggregation"
        urlTextColor="text-green-500"
        icon="/assets/images/products/icon-aggregation.svg"
        url="/account"
      />
    </div>
  </>
);

export default Index;
