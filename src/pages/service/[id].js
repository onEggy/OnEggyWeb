import React from "react";
import { useRouter } from "next/router";
import Service from "../service"; 
import serviceData from "../../../public/data/serviceData.json";

const ServicePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const service = serviceData.services.find((s) => s.id === id);

  if (!service) {
    return <p>loading...</p>;
  }

  return (
    <div>
        <Service service={service} />
    </div>
  );
};

export default ServicePage;
