import { currentActiveRole } from '@/lib/auth';
import { ActiveRole } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const activeRole = await currentActiveRole();

  if (activeRole === ActiveRole.Admin) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
