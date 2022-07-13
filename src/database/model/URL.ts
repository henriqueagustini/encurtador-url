import { prop, getModelForClass } from "@typegoose/typegoose";

export class URL {
  @prop({ required: true })
  originalUrl: string;

  @prop({ required: true })
  hash: string;

  @prop({ required: true })
  shortUrl: string;
}
export const URLModel = getModelForClass(URL);
