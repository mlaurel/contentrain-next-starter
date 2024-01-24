// components/AuthWrapper.tsx

import { IHeader } from "../../../interfaces/contentrain";
import AppButton from "../app-button";

type AuthProps = {
  headerData: IHeader;
};

const Auth: React.FC<AuthProps> = ({ headerData }) => {
  return (
    <div className=" flex w-full justify-center items*">
      <div className="mr-1 flex-grow lg:flex-grow-0 flex justify-start">
        <AppButton
          type="ghost"
          label={headerData.leftbuttonlabel}
          href={headerData.leftbuttonlink}
        />
      </div>

      <div className="ml-1 flex-grow lg:flex-grow-0 flex justify-end">
        <AppButton
          label={headerData.rightbuttonlabel}
          href={headerData.rightbuttonlink}
        />
      </div>
    </div>
  );
};

export default Auth;

