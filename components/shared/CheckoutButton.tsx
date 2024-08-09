"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@clerk/nextjs";
import { IEvent } from "@/lib/database/models/event.model";
import Checkout from "./Checkout";

const CheckoutButton = ({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) => {
  const { session } = useSession();
  const router = useRouter();
  const hasEventFinished = new Date(event?.endDateTime) < new Date();

  useEffect(() => {
    if (!session) {
      router.push("/sign-in"); // Redirect to sign-in page if no session
    }
  }, [session, router]);

  if (!session) {
    return null; // Return null or a loading spinner while redirecting
  }

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Event has expired</p>
      ) : (
        <Checkout event={event} userId={userId} />
      )}
    </div>
  );
};

export default CheckoutButton;

