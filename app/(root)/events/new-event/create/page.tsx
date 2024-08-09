"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import EventForm from "@/components/shared/EventForm";
import { useSession } from "@clerk/nextjs";

const CreateEvent = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if there's no user session
    if (!session.session) {
      router.push("/"); // Redirect to home page
    }
  }, [session, router]);

  // Optionally, you can return a loading indicator while checking the session
  if (!session.session) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm clerkId={session.session.user.id ?? ""} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;

