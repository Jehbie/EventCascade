import { redirect } from "next/navigation";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { currentUser } from "@clerk/nextjs/server";
import TicketCard from "@/components/shared/TicketsCard";

export default async function MyTickets({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const user = await currentUser();

  if (!user) {
    redirect("/"); // Redirect to login page
    return null; // Ensure the function does not return any content after redirection
  }

  const tickets = await getOrdersByUser({
    userId: user.publicMetadata.userId as string,
    limit: 10,
    page: 1,
  });

  const hasTickets = tickets?.data.length > 0;

  return (
    <div className="py-5 md:py-10 px-6">
      <h1 className="font-semibold">User Tickets ({tickets?.data.length})</h1>
      {hasTickets ? (
        <div className="grid gap-4 py-6 grid-cols-4">
          {tickets?.data.map(
            (ticket: {
              _id: string;
              createdAt: string;
              stripeId: string;
              event: {
                _id: string;
                title: string;
                description: string;
                location: string;
                imageUrl: string;
                startDateTime: string;
                endDateTime: string;
                price: string;
                isFree: boolean;
                url: string;
                category: string;
                organizer: any;
                createdAt: string;
                __v: number;
              };
              buyer: string;
            }) => (
              <TicketCard
                key={ticket._id}
                createdAt={ticket.createdAt}
                stripeId={ticket.stripeId}
                event={ticket.event}
                buyer={ticket.buyer}
                _id={""}
                totalAmount={""}
              />
            )
          )}
        </div>
      ) : (
        <div className="py-6">You do not have any tickets.</div>
      )}
    </div>
  );
}
