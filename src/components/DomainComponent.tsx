"use client";

import { usePathname, useRouter } from "next/navigation";

const DomainComponent = () => {
  const router = useRouter();
  const path = usePathname();
  console.log(router);
  console.log(path);
  return <div>DomainComponent</div>;
};

export default DomainComponent;
