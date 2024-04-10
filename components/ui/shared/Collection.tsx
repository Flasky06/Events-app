import { IEvent } from "@/lib/database/models/event.model";
import React from "react";

type collectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
};

function Collection({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: collectionProps) {
  return <div>collection</div>;
}

export default Collection;
