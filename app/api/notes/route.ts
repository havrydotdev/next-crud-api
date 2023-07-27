import { addDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { notes } from "..";
import { Note } from "@/types";
import { getDataFromDoc } from "@/utils";

export const GET = async (req: Request, res: Response) => {
  const snapshot = await getDocs(notes);

  const data = snapshot.docs.map((doc) => getDataFromDoc(doc));

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  const body: Note = await req.json();
  const res = await addDoc(notes, {
    text: body.text,
    title: body.title,
  });

  return NextResponse.json({
    id: res.id,
    ok: true,
  });
};
