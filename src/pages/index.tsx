import Card from '@components/molecules/Card/OtherCard';
import Something from '@views/Home';

const Index = () => (
  <>
    <Something />
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
