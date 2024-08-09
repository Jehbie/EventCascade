import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json();
  const body = JSON.stringify(payload);

  console.log(body);

  if (payload.type === "InvoiceCreated") {
  }

  if (payload.type === "InvoiceReceivedPayment") {
  }

  if (payload.type === "InvoicePaymentSettled") {
  }
  const sample = {
    deliveryId: "3q39EApNqFdDy65L9ECULK",
    webhookId: "VkeeCjUYwKEch2hx175qMM",
    originalDeliveryId: "__test__91239dd6-620c-4c8d-b7c3-8d83829bb1ad__test__",
    isRedelivery: false,
    type: "InvoiceCreated",
    timestamp: 1714728942,
    storeId: "A3PHYhEyiMa8KB2zDBwGwFxAy5SwtGoPK8tw3X5bFv1B",
    invoiceId: "__test__c8c030d4-88ee-4b6f-b11d-fdcc4efe31eb__test__",
    metadata: null,
  };

  const s = {
    deliveryId: "Fz3a6TVUr4rKKEG62cktGU",
    webhookId: "VkeeCjUYwKEch2hx175qMM",
    originalDeliveryId: "__test__9ec53cfa-641d-40cd-94de-8e2967b6c243__test__",
    isRedelivery: false,
    type: "InvoicePaymentSettled",
    timestamp: 1714729084,
    storeId: "A3PHYhEyiMa8KB2zDBwGwFxAy5SwtGoPK8tw3X5bFv1B",
    invoiceId: "__test__c8d1c533-31a4-4183-9a8c-20bf32bba8b8__test__",
    metadata: null,
  };

  return NextResponse.json({ message: "OK" });
}
