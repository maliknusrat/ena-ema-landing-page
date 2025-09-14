import React from "react";
import Form from "./Form";
import Image from "next/image";

export default function FootBanner() {
  return (
    <div>
      <div className="px-2 md:px-0  md:max-w-[614px] lg:max-w-[794px] mx-auto">
        <Form></Form>

        <div className="grid grid-cols-2 md:grid-cols-3  place-items-start md:place-items-center  gap-0 mt-4 text-gray-400 text-sm">
          <div className="flex items-center  gap-2">
            <Image src="/icons/Lock.png" alt="ssl" width={12} height={12} /> SSL
            secure
          </div>
          <div className="flex items-center  gap-2">
            <Image src="/icons/Check.png" alt="ssl" width={12} height={12} />{" "}
            Money-back guarantee
          </div>
          <div className="flex items-center  gap-2">
            <Image src="/icons/Vector.png" alt="ssl" width={12} height={12} />{" "}
            Satisfaction guaranteed
          </div>
        </div>
      </div>
    </div>
  );
}
