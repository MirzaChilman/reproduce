import { Meta } from '@layouts/Meta';
import { AppConfig } from '@utils/AppConfig';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
  </div>
);

export { Base };
