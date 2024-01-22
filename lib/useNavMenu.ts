import { useState } from "react";

const useNavMenu = () => {
  const [show, setShow] = useState<boolean>(false);


  function setMenuShow(show: boolean) {
    setShow(show);
  }
  return {
    show,
    setMenuShow,
  };
}
export default useNavMenu;