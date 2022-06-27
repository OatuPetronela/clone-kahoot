import { FullLogo } from 'components/logo';
import { Outlet } from 'react-router-dom';

export const AnonymousLayout: React.FunctionComponent<{}> = () => {
  return (
    <div className="max-w-md m-auto text-center text-steel-gray">
      <FullLogo />
      <Outlet />
    </div>
  );
};