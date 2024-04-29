import { MAX_DATE_RANGE_DAYS } from "@/lib/constants";
import { differenceInDays } from "date-fns";
import { z } from "zod";

export const OverviewQuerySchema = z
  .object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  })
  .refine((args) => {
    const { from, to } = args;
    const days = differenceInDays(to, from);
    const isValidRange = days <= MAX_DATE_RANGE_DAYS && days >= 0;
    if (!isValidRange) throw new Error("Invalid date range");
    
    return isValidRange;
  });
