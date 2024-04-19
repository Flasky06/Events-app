import React from "react";
import { Button } from "./button";
import { IEvent } from "@/lib/database/models/event.model";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckOut = async () => {};
  console.log("checkout");

  return (
    <form action={onCheckOut} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
