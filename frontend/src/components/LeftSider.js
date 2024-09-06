import React from "react";

//Left Sider with icons
const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row sm:mb-3">
          <a href="https://www.facebook.com/sinee.h/">
            <i class="ri-facebook-circle-fill text-gray-500 text-xl"></i>
          </a>
          <a href="https://www.instagram.com/enishamzaa/">
            <i class="ri-instagram-fill text-gray-500 text-xl"></i>
          </a>
          <a href="mailto:eniss.hamza@gmail.com">
            <i class="ri-mail-fill text-gray-500 text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/enis-hamza/">
            <i class="ri-linkedin-box-fill text-gray-500 text-xl"></i>
          </a>
          <a href="https://github.com/EnisHamza">
            <i class="ri-github-fill text-gray-500 text-xl"></i>
          </a>
        </div>
        <div className="w-[2px] h-40 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
