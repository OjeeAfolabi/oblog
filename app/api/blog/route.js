import { ConnectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");

const LoadDb = async () => {
  await ConnectDB();
};
LoadDb();

export async function POST(request) {
  const FormData = await request.FormData();
  const TimeStamp = Date.now();
  const image = FormData.get("image");
  const imageByte = await image.arrayBuffer();
  const Buffer = Buffer.from(imageByte);
  const Path = `./public/${TimeStamp}_${image.name}`;
  await writeFile(Path, Buffer);
  const imgUrl = `/${TimeStamp}_${image.name}`;
  console.log(imgUrl);
  return NextResponse.json({ imgUrl });
}

export async function GET(request) {
  return NextResponse.json({ msg: "API working" });
}
