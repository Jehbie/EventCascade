import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation"; // Import redirect function
import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { SearchParamProps } from "@/types";
import { currentUser } from "@clerk/nextjs";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { getEventsByUser } from "@/lib/actions/event.actions";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;
  const user = await currentUser();

  if (!user) {
    redirect("/"); // Redirect to login page if no user is found
    return null; // Ensure the function does not return any content after redirection
  }

  const events = await getEventsByUser({
    userId: user.publicMetadata.userId as string,
    page,
    limit: 6,
  });
  const tickets = await getOrdersByUser({
    userId: user.publicMetadata.userId as string,
    limit: 10,
    page: 1,
  });

  return (
    <>
      {/* Profile Section */}
      <section className="bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-start">
          <img
            src={user?.imageUrl}
            alt={`${user?.firstName} ${user?.lastName}`}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {user?.firstName} {user?.lastName}
            </h2>
            <p className="text-gray-600">
              {user?.emailAddresses[0]?.emailAddress}
            </p>
          </div>
        </div>
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold flex flex-col text-center sm:text-left">
            My Tickets ({tickets?.data?.length})
            <span className="text-[14px] font-normal">
              <Link className="button hidden sm:flex" href="/tickets">
                View my tickets
              </Link>
            </span>
          </h3>

          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      {/* Events Organized */}
      <section className="bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={0}
        />
      </section>
    </>
  );
};

export default ProfilePage;

