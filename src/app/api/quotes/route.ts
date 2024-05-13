import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic'; // static by default, unless reading the request

const alexHormoziQuotes = [
  'The reason people buy anything is to get a deal. They believe what they are getting (VALUE) is worth more than what they are giving in exchange for it (PRICE).',
  'How to not be poor: Fail once, try again. Expect no one to help you. Make promises. Keep them. Become irreplaceable. Do more. Talk less. Make ...',
  'According to the pareto principle: ... 18. Building a business is risky. Living paycheck to paycheck is risky. Some risks come with upside. Others ...',
  'Getting people to buy is NOT the objective of a business. Making money is. And lowering price is a one-way road to destruction for most — you can only go down ...',
  'Leave it better than you found it.',
  'God gave you the power to ignore, use it.',
  "It's better to be hated for who you are, than loved for who you're not.",
  'If you can wait a year, you can win big. If you can wait a decade, you can be the best. If you can wait a lifetime, you can change the world.',
  'I cannot lose if I do not quit.',
  "You can get 'good enough' at almost anything in 20 hours of focused effort. The problem is, most people never do the 20 hours.",
  'The only way to win is to not play the game.',
  "Failure is not the opposite of success, it's part of it.",
  'The secret to getting ahead is getting started.',
  'The only way to do great work is to love what you do.',
  'Consistency is the key to success.',
  'The harder you work, the luckier you get.',
  "Embrace the suck. The more you avoid discomfort, the more you'll stay stuck.",
  'Surround yourself with people who challenge you to be better.',
  'The only way to win is to not compare yourself to others.',
  'The only way to win is to focus on your own journey.',
  'The only way to win is to be authentic to yourself.',
  'The only way to win is to never give up.',
  'The only way to win is to keep learning and growing.',
  'The only way to win is to be grateful for what you have.',
  'The only way to win is to help others succeed.',
];

export function GET(request: Request) {
  return NextResponse.json({ quotes: alexHormoziQuotes });
}
