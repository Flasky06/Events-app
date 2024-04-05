import EventForm from "@/components/ui/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const UpdateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="Wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>
      <div className="">
        <EventForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEvent;
