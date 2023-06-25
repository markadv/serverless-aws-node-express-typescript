import { ScheduledEvent, Context } from 'aws-lambda';

export const run = async (event: ScheduledEvent, context: Context): Promise<void> => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
};
