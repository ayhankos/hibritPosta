import * as z from "zod";

export const formSchema = z.object({
  customerName: z.string(),
  postMessage: z.string(),
  postalCode: z.string(),
  date: z.date().nullable(),
  adres: z.string(),
  submit: z.string(),
  isStatus: z.string(),
  sideOption: z.string(), // tek taraflı mı çift taraflı mı
  colorOption: z.string(), // renk tipi
  envelopeType: z.string(), // zarf tipi
  brochure: z.string(), // broşürlü mü
  surveyType: z.string(), // anket
  commitment: z.string(), // taahhüt
  customerId: z.number(),
  file: z.string().nullable(),
});
