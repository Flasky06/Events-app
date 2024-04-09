import EventForm from "@/components/ui/shared/EventForm";
import { currentUser } from "@clerk/nextjs";

const CreateEvent = async () => {
  const user = await currentUser();

  console.log(user);

  const userId = user?.id || "";

  console.log(userId);
  console.log(typeof userId);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
