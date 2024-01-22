// components/AuthWrapper.tsx

import AppButton from "../app-button";
import { HeaderData } from "../layout";

type AuthProps = {
  headerData: HeaderData;
};

const Auth: React.FC<AuthProps> = ({ headerData }) => {
  return (
    <div className="auth flex">
      <div className="mr-1 flex-grow lg:flex-grow-0">
        <AppButton
          type="ghost"
          label={headerData.leftbuttonlabel}
          href={headerData.leftbuttonlink}
        />
      </div>

      <div className="ml-1 flex-grow lg:flex-grow-0">
        <AppButton
          label={headerData.rightbuttonlabel}
          href={headerData.rightbuttonlink}
        />
      </div>
    </div>
  );
};

export default Auth;

