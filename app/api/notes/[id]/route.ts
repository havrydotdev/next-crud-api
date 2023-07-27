import { getDataFromDoc } from "@/utils";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { notes } from "..";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const docRef = doc(notes, params.id);
  const data = await getDoc(docRef);

  return NextResponse.json(getDataFromDoc(data));
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const body = await req.json();
  const docRef = doc(notes, params.id);
  await updateDoc(docRef, body);

  return NextResponse.json({
    ok: true,
  });
};
